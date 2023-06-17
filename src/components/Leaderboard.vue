<template>
    <div class="qux-container qux-element BG">
        <div class="qux-container qux-element Leaderboard_detail">
            <div class="qux-container qux-element Leaderboardbox">
                <label class="qux-label qux-element Label29">
                    <span class="qux-common-label">Position
                    </span>
                </label>
                <label class="qux-label qux-element Label30">
                    <span class="qux-common-label">Chain
                    </span>
                </label>
                <div class="qux-container qux-element Group_1">
                    <div class="qux-container qux-element Circle6">
                        <div class="qux-container qux-element Circle7">
                            <div class="qux-image qux-element Image9" :style="getChainLogo(0)">
                            </div>
                        </div>
                    </div>
                </div>
                <label class="qux-label qux-element Label31">
                    <span class="qux-common-label">Captures
                    </span>
                </label>
                <div class="qux-container qux-element Group">
                    <div class="qux-container qux-element Circle8">
                        <div class="qux-container qux-element Circle9">
                            <div class="qux-image qux-element Image10" :style="getChainLogo(1)">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="qux-container qux-element Group_2">
                    <div class="qux-container qux-element Circle10">
                        <div class="qux-container qux-element Circle11">
                            <div class="qux-image qux-element Image11" :style="getChainLogo(2)">
                            </div>
                        </div>
                    </div>
                </div>
                <label class="qux-label qux-element Label32">
                    <span class="qux-common-label">1
                    </span>
                </label>
                <label class="qux-label qux-element Label33">
                    <span class="qux-common-label">{{leaders[0].name}}
                    </span>
                </label>
                <label class="qux-label qux-element Label34">
                    <span class="qux-common-label">{{leaders[0].captures}}
                    </span>
                </label>
                <label class="qux-label qux-element Label35">
                    <span class="qux-common-label">2
                    </span>
                </label>
                <label class="qux-label qux-element Label37">
                    <span class="qux-common-label">{{leaders[1].captures}}
                    </span>
                </label>
                <label class="qux-label qux-element Label38">
                    <span class="qux-common-label">3
                    </span></label>
                <label class="qux-label qux-element Label39">
                    <span class="qux-common-label">{{leaders[2].name}}
                    </span></label>
                <label class="qux-label qux-element Label40">
                    <span class="qux-common-label">{{leaders[2].captures}}
                    </span>
                </label>
                <label class="qux-label qux-element Label45">
                    <span class="qux-common-label">{{leaders[1].name}}
                    </span>
                </label>

                <label class="qux-label qux-element Stats Stats-title">
                    <span class="qux-common-label">Chain War Stats
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-description Stats1">
                    <span class="qux-common-label">Total Chains
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-data Stats1">
                    <span class="qux-common-label">{{stats.chains}}
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-description Stats2">
                    <span class="qux-common-label">Total Fights
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-data Stats2">
                    <span class="qux-common-label">{{stats.fights}}
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-description Stats3">
                    <span class="qux-common-label">Alive NFTs
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-data Stats3">
                    <span class="qux-common-label">{{stats.aliveNFTs}}
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-description Stats4">
                    <span class="qux-common-label">Fallen NFTs
                    </span>
                </label>
                <label class="qux-label qux-element Stats Stats-data Stats4">
                    <span class="qux-common-label">{{stats.fallenNFTs}}
                    </span>
                </label>

            </div>
        </div>
    
        <ChainPanel
            :pos=1
            :chain="leaders[0]"
            :key="leaders[0]"
        />
        <ChainPanel
            :pos=2
            :chain="leaders[1]"
            :key="leaders[1]"
        />
        <ChainPanel
            :pos=3
            :chain="leaders[2]"
            :key="leaders[2]"
        />

        <div class="qux-image qux-element Leaderboardtitleimage">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import * as R from "ramda"
import ChainPanel from '@/components/ChainPanel'

export default {
    name: 'Leaderboard',
    components: {ChainPanel},

    data() {
    return {
        stats: {
            chains: 0,
            players: 0,
            aliveNFTs: 0,
            fallenNFTs: 0,
            fights: 0,
        },
        leaders: [
            {name:"dummy", captures: 0, capturedBy: [], log: []},
            {name:"dummy", captures: 0, capturedBy: [], log: []},
            {name:"dummy", captures: 0, capturedBy: [], log: []}
        ]
    }
    },
    props: {

    },
    mounted () {
        this.getChains()
        this.getNFTs()
        this.getStats()
    },
    methods: {
        getChainLogo (id) {
            if (this.leaders[id].name == "Omniflix")
                return {
                    backgroundImage: `url(${require('@/assets/img/omniflix.png')})`
                }
            else if (this.leaders[id].name == "Uptick")
                return {
                    backgroundImage: `url(${require('@/assets/img/uptick.png')})`
                }
            else if (this.leaders[id].name == "Stargaze")
                return {
                    backgroundImage: `url(${require('@/assets/img/stargaze.png')})`
            }
        },
        getStats () {
            const options = {
                method: 'GET',
                url: 'https://nftarena.cc/stats',
                withCredentials: false,
                rejectUnauthorized: false,
                headers: {
                'Content-Type': 'application/json'
                }
            }
            axios.request(options).then((response) => {
                this.stats.players = response.data.players
                this.stats.fights = response.data.fights
            })
            .catch(function (error) {
                console.error(error)
            })
        },
        getChains () {
            const options = {
                method: 'GET',
                url: 'https://nftarena.cc/chains',
                withCredentials: false,
                rejectUnauthorized: false,
                headers: {
                'Content-Type': 'application/json'
                }
            }
            axios.request(options).then((response) => {
                let chains = R.values(response.data)
                this.stats.chains = R.length(chains)
                // first fill captures with 0
                chains.forEach(chain => {
                    chain.captures = 0
                })
                // then count all captures
                chains.forEach(chain => {
                    if (chain.capturedBy.length > 0) {
                        chain.capturedBy.forEach(capturer => {
                            response.data[capturer].captures++
                        })
                    }
                })
                // then move to vue data object
                chains.forEach(chain => {
                    this[chain.name] = chain
                })
                // and sort the leaders
                this.leaders = R.reverse(R.sortBy(R.prop("captures"))(chains))
            })
            .catch(function (error) {
                console.error(error)
            })
        },
        getNFTs () {
            const options = {
                method: 'GET',
                url: 'https://nftarena.cc/nfts',
                withCredentials: false,
                rejectUnauthorized: false,
                headers: {
                'Content-Type': 'application/json'
                }
            }
            axios.request(options).then((response) => {
                let nfts = R.values(response.data)
                this.stats.aliveNFTs = R.count(x => x.alive, nfts)
                this.stats.fallenNFTs = nfts.length - this.stats.aliveNFTs
            })
            .catch(function (error) {
                console.error(error)
            })
        }
    }
}
</script>

<style lang="scss">
.Image9{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(@/assets/img/omniflix.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Image10{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(@/assets/img/uptick.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Image11{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(@/assets/img/stargaze.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}

.Leaderboardbox{
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
    border:0px solid transparent;
    border-radius:10px;
    background-color:#1d2126;
    width:280px;
    margin-left:auto;
    margin-right:auto;
    min-height:555px;
    margin-top:0px;
    display:grid;
    grid-template-columns:minmax(0,1fr) 16px 23px 40px 6px 6px 4px 10px 13px 21px 3.9% 29px 40px minmax(0,1fr);
    grid-template-rows:30px minmax(11px, auto) 17px 1px 11px 10px 1px 11px 10px 1px 11px 200px 15px 15px 7px 12px 18px 18px 18px 1fr;
}
.Stats {
    color:#ffffff;
    text-align:left;
    font-family:Roboto, " sans-serif";
    font-size:10px;
    letter-spacing:0px;
    line-height:1;
    border:0px solid transparent;
}
.Stats-description {
    grid-column-start:3;
    grid-column-end:6;
}
.Stats-data {
    grid-column-start:12;
    grid-column-end:14;
}
.Stats-title{
    grid-column-start:2;
    grid-column-end:10;
    grid-row-start:13;
    grid-row-end:14;
}
.Stats1{
    grid-row-start:15;
    grid-row-end:16;
}
.Stats2{
    grid-row-start:17;
    grid-row-end:18;
}
.Stats3{
    grid-row-start:18;
    grid-row-end:19;
}
.Stats4{
    grid-row-start:19;
    grid-row-end:20;
}

</style>