<template>
    <div class="qux-container qux-element Card bottom" :class="'pos'+pos">
        <ChainBottomBox
            :title="chain.name"
            :nft="frontNFT()"
            :defend="defending"
            :key="chain"
        />
    </div>
    <div class="qux-container qux-element Card top" :class="'pos'+pos">
        <ChainInfoBox
            :title="chain.name"
            :attackers="0"
            :defenders="0"
            :log="shortLog()"
        />
    </div>
    <div class="qux-container qux-element Card mid" :class="'pos'+pos">
        <ChainTopBox
            :title="chain.name"
            :id="pos"
        />
    </div>
</template>

<script>
import * as R from "ramda"
import ChainInfoBox from '@/components/ChainInfoBox'
import ChainTopBox from '@/components/ChainTopBox'
import ChainBottomBox from '@/components/ChainBottomBox'

export default {
    name: 'Leaderboard',
    components: {ChainInfoBox, ChainTopBox, ChainBottomBox},

    data() {
    return {
        defending: false
    }
    },
    props: {
        pos: {
            type: Number,
            default () {
                return 0
            }
        },
        chain: {
            type: Object,
            default () {
                return {
                    log: [],
                    capturedBy: []
                }
            }
        },
    },
    mounted () {
    },
    methods: {
        shortLog() {
            if (this.chain) 
                return R.join("\n", R.takeLast(3, this.chain.log))
            else return ""
        },
        frontNFT() {
            // if a chain is captured show the first attacker as frontNFT, otherwise show first defender if possible
            if (this.chain.capturedBy.length == 0) {
                this.defending = true
                if (R.keys(this.chain.defenders).length > 0) {
                    return R.values(this.chain.defenders)[0]
                }
                else return { empty: true }
            }
            else return this.chain.attackers[0]

        }
    }
}
</script>

<style scoped lang="scss">
.Card{
    border:0px solid transparent;
    display:flex;flex-direction:column;
}
.pos3{
    grid-column-start:8;
    grid-column-end:9;
}
.pos2{
    grid-column-start:6;
    grid-column-end:7;
}
.pos1{
    grid-column-start:4;
    grid-column-end:5;
}
.top {
    grid-row-start:6;
    grid-row-end:7;
}
.mid {
    grid-row-start:3;
    grid-row-end:5;
}
.bottom{
    grid-row-start:8; 
    grid-row-end:10;
}

</style>