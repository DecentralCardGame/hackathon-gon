<template>
<router-link :to="'/ChainDetails/'+title">
    <div class="qux-container qux-element qux-action Image5"
        :style="getBackground()"
    >    
        <div class="qux-label qux-element qux-action LabelNumber">
            <span class="qux-common-label">{{id}}
            </span>
        </div>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action LabelTitle">
            <span class="qux-common-label">{{title}}
            </span>
        </a>
        <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action LabelLink">
            <span class="qux-common-label">View NFTs
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
</router-link>
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
        else if (this.title == "Uptick")
            return {
                backgroundImage: `url(${require('@/assets/img/uptick.png')})`
            }
        else if (this.title == "Stargaze")
            return {
                backgroundImage: `url(${require('@/assets/img/stargaze.png')})`
        }
    },
    getBackground () {
        if (this.title == "Omniflix")
            return {
                backgroundImage: `url(${require('@/assets/img/Cards_1.png')})`
            }
        else if (this.title == "Uptick")
            return {
                backgroundImage: `url(${require('@/assets/img/Cards_2.png')})`
            }
        else if (this.title == "Stargaze")
            return {
                backgroundImage: `url(${require('@/assets/img/Cards_3.png')})`
        }
    }
  }
}
</script>

<style scoped lang="scss">
.LabelNumber{color:#ffffff;text-align:center;font-family:Roboto, " sans-serif";font-size:36px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:5;grid-row-end:9;z-index:189;}
.LabelTitle{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:18px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:4;grid-row-end:5;z-index:191;}
.LabelLink{color:#ffffff;text-align:center;font-family:Roboto, " sans-serif";font-size:12px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:7;grid-row-end:11;z-index:189;text-decoration:underline}

.Image5{width:280px;margin-left:auto;margin-right:auto;height:120px;margin-top:0px;display:grid;grid-template-columns:4.6% 39px 4.6% minmax(0,1fr) 4.6% 26px 3px 12px 23px 41px 5.4%;grid-template-rows:18px 11px 2px 10px 13px 11px 11px 1px 10px 2px 11px 1fr;border:0px solid #333333;background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.qux-template-Image6{min-height:100%;border:0px solid #333333;background-size:100% 100%;border:0px solid #333;}
</style>