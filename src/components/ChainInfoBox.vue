<template>
    <div class="qux-container qux-element RoundedRectangle9">
        <div class="qux-container qux-element Group_6">
            <div class="qux-image qux-element ImageAttacker">
            </div>
        </div>
        <div class="qux-container qux-element Group_7">
            <div class="qux-image qux-element ImageDefender">
            </div>
        </div>
        <div class="qux-container qux-element Group_8">
            <div class="qux-image qux-element ImageNews">
            </div>
        </div>
        <label class="qux-label qux-element Label52">
            <span class="qux-common-label"><b>ATTACKERS</b>
            </span>
        </label>
        <label class="qux-label qux-element Label54">
            <span class="qux-common-label"><b>DEFENDERS</b>
            </span>
        </label>
        <label class="qux-label qux-element LabelLog">
            <span class="qux-common-label"><b>NEWS</b> {{log}}
            </span>
        </label>
        <label class="qux-label qux-element Label55">
            <span class="qux-common-label">{{defenders}}
            </span>
        </label>
        <label class="qux-label qux-element Label65">
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
.Group_6{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:172;display:flex;flex-direction:column;}
.Group_7{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:5;grid-row-end:10;z-index:176;display:flex;flex-direction:column;}
.Group_8{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:12;z-index:176;display:flex;flex-direction:column;}

.Circle16{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Circle17{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Circle18{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Circle19{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}

.Label52{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;}
.Label54{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:5;grid-row-end:6;}

.LabelLog{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:10;grid-row-start:7;grid-row-end:8;}

.Label55{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:5;grid-row-end:6;}
.Label65{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:3;grid-row-end:4;}

.RoundedRectangle9{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#39444a;width:280px;margin-left:auto;margin-right:auto;height:265px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 12px 4px 44px 54px 26px 18px 28px 33px minmax(0,1fr);grid-template-rows:29px minmax(1px, auto) 11px 18px 12px 17px minmax(1px, auto) 1px 10px 1px 1fr;}
</style>