<template>
<div class="qux-container qux-element RoundedRectangle">

    <div>
        <label class="qux-label qux-element Label57">
            <span v-if="!defend && !nft.empty" class="qux-common-label">
                The Defenders of {{title}} are united behind their leader:
            </span>
            <span v-if="defend && !nft.empty" class="qux-common-label">
                The Attackers have captured {{title}} with their leader:
            </span>
            <span v-if="nft.empty" class="qux-common-label">
                No NFT Fighters are deployed at {{title}}.
            </span>
        </label>
    </div>

    <div v-if="!nft.empty" class="imageNft">
        <img v-if="!isVideo(nft.imageUrl)" 
            class="imageNft"
            :src="nft.imageUrl"
        />
        <video autoplay 
            class="imageNft"
            v-if="isVideo(nft.imageUrl)"
            :src="nft.imageUrl" type="video/mp4"
        />
    </div>
    <div v-if="!nft.empty">
        <label class="qux-label qux-element Label57">
            <span class="qux-common-label">
                {{nft.name}}
            </span>
        </label>
    </div>

</div>
</template>

<script>
export default {
  name: 'Chain Top Box',
  props: {
    title: {
        type: String,
        default () {
            return "noname"
        }
    },
    nft: {
        type: Object,
        default () {
            return { empty: true }
        }
    },
    defend: {
        type: Boolean,
        default () {
            return true 
        }
    }
  },
  mounted () {
    console.log("frontnft", this.nft)
  },
  methods: {
    isVideo(src) {
      return src.endsWith(".mp4")
    },
  }
}
</script>

<style scoped lang="scss">
.RoundedRectangle{
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
    border:0px solid transparent;
    border-radius:10px;
    background-color:#39444a;
    width:280px;
    margin-left:auto;
    margin-right:auto;
    height:265px;
    margin-top:0px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.Label57{
    color:#ffffff;
    text-align:center;
    font-family:Roboto, " sans-serif";
    font-size:10px;
    letter-spacing:0px;
    line-height:1;
    border:0px solid transparent;
    z-index:148;
}
.imageNft{
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: flex-end;
}

</style>