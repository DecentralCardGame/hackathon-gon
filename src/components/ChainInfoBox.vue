<template>
    <div class="qux-container qux-element RoundedRectangle9">
        <div class="qux-container qux-element Group_6">
            <div class="qux-container qux-element Circle16">
                <div class="qux-container qux-element Circle17">
                    <div class="qux-image qux-element Image14">
                    </div><!---->
                </div><!---->
            </div><!---->
        </div>
        <div class="qux-container qux-element Group_7">
            <div class="qux-container qux-element Circle18">
                <div class="qux-container qux-element Circle19">
                    <div class="qux-image qux-element Image15">
                    </div><!---->
                </div><!---->
            </div><!---->
        </div>
        <label class="qux-label qux-element Label52">
            <span class="qux-common-label">{{title}}
            </span><!---->
        </label>
        <label class="qux-label qux-element Label53">
            <span class="qux-common-label">CAPTURED CHAINS WITH
            </span><!---->
        </label>
        <label class="qux-label qux-element Label54">
            <span class="qux-common-label">Uptick
            </span><!---->
        </label>
        <label class="qux-label qux-element Label55">
            <span class="qux-common-label">XXX
            </span><!---->
        </label>
        <label class="qux-label qux-element Label56">
            <span class="qux-common-label">ATTACKERS
            </span><!---->
        </label>
        <label class="qux-label qux-element Label64">
            <span class="qux-common-label">DEFENDERS
            </span><!---->
        </label>
        <label class="qux-label qux-element Label65">
            <span class="qux-common-label">XXX
            </span><!---->
        </label><!---->
    </div><!---->
</template>

<script>
export default {
  name: 'Chain Info Box',
  props: {
    title: {
        type: String,
        default () {
            return "noname"
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
.Start .RoundedRectangle9{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#39444a;width:280px;margin-left:auto;margin-right:auto;height:265px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 12px 4px 44px 54px 26px 18px 28px 33px minmax(0,1fr);grid-template-rows:29px minmax(1px, auto) 11px 18px 12px 17px minmax(1px, auto) 1px 10px 1px 1fr;}
</style>