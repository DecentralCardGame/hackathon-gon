const chainWarsGame = require('./game/engine.js')

let game = new chainWarsGame()

game.addChain("stargaze")
game.addChain("juno")

game.addNFT("stargaze", "asdf1", "1234", "stargaze1gönni", "besterNFT", "wurgstrf", "this nft is so gud")
game.addNFT("stargaze", "asdf1", "1234", "stargaze1gönni", "schlechterNFT", "wurgstrf", "this nft is so gud")
game.addNFT("stargaze", "asdf2", "1235", "stargaze1gönni", "dooferNFT", "wurgstrf", "this nft is so gud")
game.addNFT("stargaze", "asdf3", "1235", "stargaze1gönni", "besterNFT", "wurgstrf", "this nft is so gud")
game.addNFT("stargaze", "asdf4", "1235", "stargaze1gönni", "jaNFT", "wurgstrf", "this nft is so gud")
game.addNFT("stargaze", "asdf4", "0126", "stargaze1gönni", "neNFT", "wurgstrf", "this nft is so gud")
game.addNFT("juno", "asdf7", "0126", "stargaze1gönni", "joNFT", "wurgstrf", "this nft is so gud")
game.addNFT("juno", "asdf7", "0127", "stargaze1gönni", "uffNFT", "wurgstrf", "this nft is so gud")
game.addNFT("juno", "asdf7", "0128", "stargaze1gönni", "oiNFT", "wurgstrf", "this nft is so gud")

game.sendDefender("asdf1", "1234", "stargaze")
game.sendDefender("asdf1", "1234", "stargaze")
game.sendDefender("asdf2", "1235", "stargaze")

game.sendAttacker("asdf4", "0126", "juno")
game.sendAttacker("asdf1", "1234", "juno")
game.sendAttacker("asdf4", "1235", "juno")
game.sendAttacker("asdf7", "0126", "stargaze")

console.log(game.chains)
game.fight()

console.log(game.chains)

game.sendDefender("asdf7", "0127", "stargaze")
game.sendDefender("asdf7", "0128", "stargaze")

game.fight()

console.log(game.chains)
