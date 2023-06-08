let R = require("ramda")

class chainWarsGame {
    constructor() {
        this.NFTs = {}
        this.chains = {}
        this.players = {}
        this.lastFight = new Date()
    }
    addChain(chainName) {
        this.chains[chainName] = {
            name: chainName,
            defenders: [],
            attackers: [],
            capturedBy: [],
            log: []
        }
    }
    addNFT(chainName, collection, tokenId, owner, NFTname, imageUrl, description) {
        if (!this.NFTs[collection.toString()+tokenId.toString()]) {
            let newNFT = {
                originChain: chainName,
                deployed: chainName,
                owner: owner,
                name: NFTname,
                imageUrl: imageUrl,
                description: description,
                alive: true
            }
            this.NFTs[collection.toString()+tokenId.toString()] = newNFT
            this.addPlayer(owner)
            this.players[owner].NFTs.push(newNFT)
            this.chains[chainName].defenders[collection.toString()+tokenId.toString()] = newNFT
            return 0
        }
        else return -1
    }
    addPlayer(address) {
        if (!this.players[address]) {
            this.players[address] = {
                NFTs: []
            }
            return 0
        }
        else return -1
    }
    sendDefender(collection, tokenId, defendChain) {
        let defender = this.NFTs[collection.toString()+tokenId.toString()]
        if (defender.alive) {
            // check if NFT is moved to another chain
            if (defender.deployed != defendChain) {
                // remove the NFT from its deployed chain, check for attackers and defenders
                if (this.chains[defender.deployed].defenders[collection.toString()+tokenId.toString()]) {
                    delete this.chains[defender.deployed].defenders[collection.toString()+tokenId.toString()]
                    // after deleting from old chain, add as defender on new chain
                    this.chains[defendChain].defenders[collection.toString()+tokenId.toString()] = defender
                    return 0
                }
                else if (this.chains[defender.deployed].attackers[collection.toString()+tokenId.toString()]) {
                    delete this.chains[defender.deployed].attackers[collection.toString()+tokenId.toString()]
                    // after deleting from old chain, add as defender on new chain
                    this.chains[defendChain].defenders[collection.toString()+tokenId.toString()] = defender
                    return 0
                }
                else {
                    console.error("Trying to remove a NFT from a chain, but it is neither attacker nor defender")
                    return -1
                }
            }
            // for same chain, it is just a switch to defenders
            else {
                if (this.chains[defender.deployed].defenders[collection.toString()+tokenId.toString()]) return -1
                if (this.chains[defender.deployed].attackers[collection.toString()+tokenId.toString()]) {
                    // the NFT only changes from attacker to defender
                    delete this.chains[defender.deployed].attackers[collection.toString()+tokenId.toString()]
                    this.chains[defendChain].defenders[collection.toString()+tokenId.toString()] = defender
                    return 0
                }
                else {
                    console.error("Trying to switch from attacker to defender, but the NFT is not an attacker.")
                    return -1
                }
            }
        }
        else return -1   
    }
    sendAttacker(collection, tokenId, attackChain) {
        let attacker = this.NFTs[collection.toString()+tokenId.toString()]
        if (attacker.alive && attackChain != attacker.originChain) {
            // check if NFT is moved to another chain
            if (attacker.deployed != attackChain) {
                // remove the NFT from its deployed chain, check for attackers and defenders
                if (this.chains[attacker.deployed].defenders[collection.toString()+tokenId.toString()]) {
                    delete this.chains[attacker.deployed].defenders[collection.toString()+tokenId.toString()]
                    // after deleting from old chain, add as attacker on new chain
                    this.chains[attackChain].attackers[collection.toString()+tokenId.toString()] = attacker
                    return 0
                }
                else if (this.chains[attacker.deployed].attackers[collection.toString()+tokenId.toString()]) {
                    delete this.chains[attacker.deployed].attackers[collection.toString()+tokenId.toString()]
                    // after deleting from old chain, add as attacker on new chain
                    this.chains[attackChain].attackers[collection.toString()+tokenId.toString()] = attacker
                    return 0
                }
                else {
                    console.error("Trying to remove a NFT from a chain, but it is neither attacker nor defender")
                    return -1
                }
            }
            // for same chain, it is just a switch to attackers
            else {
                if (this.chains[attacker.deployed].attackers[collection.toString()+tokenId.toString()]) return -1
                if (this.chains[attacker.deployed].defenders[collection.toString()+tokenId.toString()]) {
                    // the NFT only changes from defender to attacker
                    delete this.chains[attacker.deployed].defenders[collection.toString()+tokenId.toString()]
                    this.chains[attackChain].attackers[collection.toString()+tokenId.toString()] = attacker
                    return 0
                }
                else {
                    console.error("Trying to switch from attacker to defender, but the NFT is not an attacker.")
                    return -1
                }
            }
        }
        else return -1 
    }
    fight() {
        // 10000 equals to 10s of min. waiting between fights
        if ( new Date() - this.lastFight < 10000 ) return " Last fight is not long ago, please give the fighters some rest."
        let report = ""
        R.forEachObjIndexed((chain, id) => {
            if (R.length(R.keys(chain.attackers)) > 0 && R.length(R.keys(chain.defenders)) > 0) {
                // If there are attackers and defenders on a chain, zip together fight pairs
                let fights = R.zip(R.keys(chain.defenders), R.keys(chain.attackers))

                let log = "An epic battle has begun! The brave defenders " +
                            R.join(', ', R.dropLast(1, R.pluck('name', R.values(chain.defenders)))) +
                            " and " + R.last(R.pluck('name', R.values(chain.defenders))) +
                            " stand against the ruthless attackers " +
                            R.join(', ', R.dropLast(1, R.pluck('name', R.values(chain.attackers)))) +
                            " and " + R.last(R.pluck('name', R.values(chain.attackers)))+"." +
                            " During the relentless carnage "

                fights.forEach((fight, index) => {
                    delete chain.defenders[fight[0]]
                    delete chain.attackers[fight[1]]
                    this.NFTs[fight[0]].alive = false
                    this.NFTs[fight[1]].alive = false
                    if (index < fights.length-1) {
                        log += this.NFTs[fight[0]].name + ", "
                        log += this.NFTs[fight[1]].name + ", "
                    }
                    else {
                        log += this.NFTs[fight[0]].name + ", "
                        log += "and " + this.NFTs[fight[1]].name + " have died. Their deeds of valor will be remembered. "
                    } 
                })

                // check if attackers have succeeded
                if (R.length(R.keys(chain.attackers)) > 0) {
                    let attackingChains = R.countBy(nft => nft.originChain, R.values(chain.attackers))
                    let max = R.reduce(R.max, 0, R.values(attackingChains))
                    let rulers = R.keys(R.filter(x => x >= max, attackingChains))

                    chain.capturedBy = rulers
                    log += rulers + " has won and seized control over " + chain.name + " - their banner is lifted over " + chain.name + "'s chain."
                }
                // if not remove capturers
                else {
                    chain.capturedBy = []
                    log += chain.name + " was successfully defended against the attackers!"
                }

                chain.log.push(log)
                report += "A fight happened on "+chain.name+" chain! Check logs!"
            }
        }, this.chains)

        if (report.length == 0) report = "No fight happened... Imagine there is war and nobody turns up."
        else {
            this.lastFight = new Date()
        }
        return report
    }
}

module.exports = chainWarsGame