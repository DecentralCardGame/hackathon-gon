<template>
    <div class="qux-container qux-element qux-action Image5"
        :style="getBackground()"
    >
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label2">
            <span class="qux-common-label">{{id}}
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label3">
            <span class="qux-common-label">Team
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label4">
            <span class="qux-common-label">{{title}}
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label5">
            <span class="qux-common-label">NUMBER
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label6">
            <span class="qux-common-label">NUMBER
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label7">
            <span class="qux-common-label">1
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label8">
            <span class="qux-common-label">ATTACKERS
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label9">
            <span class="qux-common-label">DEFENDERS
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label10">
            <span class="qux-common-label">captured chains
            </span>
        </a>
        <div class="qux-container qux-element Group_88">
            <div class="qux-container qux-element qux-template-Circle Circle">
                <div class="qux-container qux-element qux-template-Circle1 Circle1">
                    <div class="qux-image qux-element qux-template-Image6" 
                        :style="getLogo()"
                    >

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'Chain Top Box',
  data() {
    return {
    }
  },
  props: {
    title: {
        type: String,
        default () {
            return "noname"
        }
    },
    id: {
        type: Number,
        default () {
            return 0
        }
    },
    imageurl: {
        type: String,
        default: null
    },
    
  },
  mounted () {
  },
  methods: {
    getLogo () {
        if (this.title == "Omniflix")
            return {
                backgroundImage: `url(${require('@/assets/img/omniflix.png')})`
            }
        if (this.title == "Uptick")
            return {
                backgroundImage: `url(${require('@/assets/img/uptick.png')})`
            }
        if (this.title == "Stargaze")
            return {
                backgroundImage: `url(${require('@/assets/img/stargaze.png')})`
        }
    },
    getBackground () {
        if (this.title == "Omniflix")
            return {
                backgroundImage: `url(${require('@/assets/img/Cards_1.png')})`
            }
        if (this.title == "Uptick")
            return {
                backgroundImage: `url(${require('@/assets/img/Cards_2.png')})`
            }
        if (this.title == "Stargaze")
            return {
                backgroundImage: `url(${require('@/assets/img/Cards_3.png')})`
        }
    }
  }
}
</script>

<style scoped lang="scss">
.Start .Image5{width:280px;margin-left:auto;margin-right:auto;height:120px;margin-top:0px;display:grid;grid-template-columns:4.6% 39px 4.6% minmax(0,1fr) 4.6% 26px 3px 12px 23px 41px 5.4%;grid-template-rows:18px 11px 2px 10px 13px 11px 11px 1px 10px 2px 11px 1fr;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aLNauBk4c3LEFBIyKIwMwJO0zogzbgUpPU8n6N0xnTKyq57bgkt5zu.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.qux-template-Image6{min-height:100%;border:0px solid #333333;background-size:100% 100%;border:0px solid #333;}
</style>