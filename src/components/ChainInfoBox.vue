<template>
    <div class="qux-container qux-element InfoGrid">
        <div class="qux-container qux-element Group_Attacker">
            <div class="qux-image qux-element ImageAttacker-white">
            </div>
        </div>
        <div class="qux-container qux-element Group_Defender">
            <div class="qux-image qux-element ImageDefender-white">
            </div>
        </div>
        <div class="qux-container qux-element Group_News">
            <div class="qux-image qux-element ImageNews">
            </div>
        </div>
        <label class="qux-label qux-element LabelAttacker">
            <span class="qux-common-label"><b>ATTACKERS</b>
            </span>
        </label>
        <label class="qux-label qux-element LabelDefender">
            <span class="qux-common-label"><b>DEFENDERS</b>
            </span>
        </label>
        <label class="qux-label qux-element LabelLog">
            <span class="qux-common-label"><b>NEWS</b> {{log}}
            </span>
        </label>
        <label class="qux-label qux-element NumberDefenders">
            <span class="qux-common-label">{{defenders}}
            </span>
        </label>
        <label class="qux-label qux-element NumberAttackers">
            <span class="qux-common-label">{{attackers}}
            </span>
        </label>
    </div>
</template>

<script>
export default {
  name: 'Chain Info Box',
  props: {
    title: {
        type: String,
        default () {
            return "noname"
        },
    },
    attackers: {
        type: Number,
        default () {
            return 0
        }
    },
    defenders: {
        type: Number,
        default () {
            return 0
        }
    },
    log: {
        type: String,
        default () {
            return "bla"
        }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.Group_Attacker{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:3;border:0px solid transparent;justify-content:center;display:flex;flex-direction:column;}
.Group_Defender{grid-column-start:2;grid-column-end:3;grid-row-start:3;grid-row-end:4;border:0px solid transparent;justify-content:center;display:flex;flex-direction:column;}
.Group_News{grid-column-start:2;grid-column-end:3;grid-row-start:4;grid-row-end:5;border:0px solid transparent;justify-content:center;display:flex;flex-direction:column;}

.Circle16{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Circle17{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Circle18{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Circle19{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}

.LabelDefender{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:3;grid-column-end:5;grid-row-start:2;grid-row-end:3;}
.LabelAttacker{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:3;grid-column-end:5;grid-row-start:3;grid-row-end:4;}
.LabelLog{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:3;grid-column-end:5;grid-row-start:4;grid-row-end:6;}

.NumberDefenders{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:3;margin:10px;}
.NumberAttackers{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;margin:10px;}

.InfoGrid{
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
    border:0px solid transparent;
    border-radius:10px;
    background-color:#39444a;
    width:280px;
    margin-left:auto;
    margin-right:auto;
    height:265px;
    margin-top:0px;
    display:grid;
    grid-template-columns: 20px 24px 100px 100px 50px;
    grid-template-rows: 28px 28px 28px 28px;
}
</style>