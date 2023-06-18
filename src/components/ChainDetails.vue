<template>
    <div class="qux-container qux-element MyNFTs BG">
        <div class="qux-image qux-element MyNFTs nfttitleimage">
            <div class="qux-label qux-element qux-action LabelTitle">
                <span class="qux-common-label">{{$route.params.name}}
                </span>
            </div>
            <div class="qux-container qux-element Circle Group_88" :class="capturedClass()">
                <div class="qux-container qux-element qux-template-Circle1 Circle1">
                    <div class="qux-image qux-element qux-template-Image6" 
                        :style="getLogo()"
                    >
                    </div>
                </div>
            </div>
        </div>
        
        <div class="qux-container qux-element Leaderboard_detail">
            <div class="qux-container qux-element RoundedRectangle7">
                <div class="no-nft-info"
                  v-if="!selectedNFT">
                  <label class="qux-label" >
                    <span>Select one of {{$route.params.name}}'s NFTs
                    </span>
                  </label>
                </div>
                <div class="nft-info" 
                    v-if="selectedNFT">
                    <div>
                      <img v-if="!isVideo(selectedNFT.imageUrl)" 
                          class="full-nftimage"
                          :src="selectedNFT.imageUrl"
                      />
                      <video autoplay 
                          class="full-nftimage"
                          v-if="isVideo(selectedNFT.imageUrl)"
                          :src="selectedNFT.imageUrl" type="video/mp4"
                      />
                    </div>
                    <label class="qux-label">
                      <span class="oneliner">
                        <b>Name</b>
                      </span>
                      <span class="oneliner"> 
                        {{selectedNFT.name}}
                      </span>
                    </label>
                    <label class="qux-label">
                      <span class="oneliner">
                        <b>Description</b>
                      </span>
                      <span class="oneliner">
                        {{selectedNFT.description}}
                      </span>
                    </label>
                    <label class="qux-label">
                      <span class="oneliner">
                        <b>Origin</b>
                      </span>
                      <span class="oneliner">
                        {{selectedNFT.originChain}}
                      </span>
                    </label>
                    <label v-if="selectedNFT.deployed && selectedNFT.alive" class="qux-label">
                        <span class="oneliner">
                        <b>Deployed at</b>
                        </span>
                        <span class="oneliner">
                        {{selectedNFT.deployed}}
                        </span>
                    </label>
                    <label class="qux-label">
                        <span class="oneliner">
                        <b>Status</b>
                        </span>
                        <span class="oneliner">
                        {{getAliveText()}}
                        </span>
                  </label>
                </div>
            </div>
        </div>
        <div class="qux-repeater qux-element Grid">
            <ul class="qux-repeater-child qux-repeater-placeholder">
                <li class="nftimage"
                    v-for="(nft, index) in NFTs"
                    :key="index"
                    @click="
                    clickedIndex = index;
                    nftClicked(index);
                ">
                    <img class="top-right-icon"
                        :src="getTopRightIcon(index)"
                    />
                    <img v-if="!isVideo(nft.imageUrl)"
                        :class="selectionBorders(index)"
                        :id="index"
                        :src="nft.imageUrl"
                    />
                    <video autoplay
                        v-if="isVideo(nft.imageUrl)" 
                        :class="selectionBorders(index)"
                        :id="index"
                        :src="nft.imageUrl" type="video/mp4"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import * as R from "ramda"

export default {
  name: 'ChainDetails',
  data() {
    return {
        NFTs: [],
        selectedNFT: undefined,
    }
  },
  props: {
  },
  mounted () {
    this.getNFTs()
  },
  methods: {
    capturedClass () {
        if (this.$route.params.captured == "true") {
            return "qux-template-Circle-captured"
        }
        else {
            return "qux-template-Circle"
        }  
    },
    getTopRightIcon(index) {
        if (this.NFTs[index].alive == false)
            return require('@/assets/img/dead.png')
        if (!this.NFTs[index].deployed)
            return ""
        if (this.NFTs[index].originChain == this.NFTs[index].deployed)
            return require('@/assets/img/defender.png')
        if (this.NFTs[index].deployed && this.NFTs[index].originChain != this.NFTs[index].deployed)
            return require('@/assets/img/attacker.png')
    },
    getAliveText() {
      if (!this.selectedNFT.alive)
        return "Died in a glorious battle at " + this.selectedNFT.deployed
      if (!this.selectedNFT.deployed)
        return "Alive and idling"
      if (this.selectedNFT.deployed==this.selectedNFT.originChain)
        return "Alive and defending"
      else
        return "Alive and attacking"
    },
    selectionBorders(index) {
        if (this.selectedNFT && this.selectedNFT.tokenId == this.NFTs[index].tokenId)
            return "nftimage-selected"
        else
            return "nftimage"
    },
    isVideo(src) {
      return src.endsWith(".mp4")
    },
    nftClicked(index) {
        this.selectedNFT = this.NFTs[index]
        this.attack = false
        this.defend = false
    },
    getLogo () {
        if (this.$route.params.name == "Omniflix")
            return {
                backgroundImage: `url(${require('@/assets/img/omniflix.png')})`
            }
        else if (this.$route.params.name == "Uptick")
            return {
                backgroundImage: `url(${require('@/assets/img/uptick.png')})`
            }
        else if (this.$route.params.name == "Stargaze")
            return {
                backgroundImage: `url(${require('@/assets/img/stargaze.png')})`
        }
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
            let nfts = R.filter(nft => nft.originChain == this.$route.params.name, R.values(response.data))
            this.NFTs = nfts
            console.log("nfts", nfts)
        })
        .catch(function (error) {
            console.error(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.oneliner {
  display: block;
}

.MyNFTs .BG{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#263236;grid-column-start:1;grid-column-end:2;grid-row-start:5;grid-row-end:6;z-index:11;display:grid;grid-template-columns:minmax(0,1fr) 280px 1% 211px 13px 642px 1px minmax(0,1fr);grid-template-rows:25px 29px 22px 69px 25px minmax(559px, auto) 1fr;}

.Image5{width:280px;margin-left:auto;margin-right:auto;height:120px;margin-top:0px;display:grid;grid-template-columns:4.6% 39px 4.6% minmax(0,1fr) 4.6% 26px 3px 12px 23px 41px 5.4%;grid-template-rows:18px 11px 2px 10px 13px 11px 11px 1px 10px 2px 11px 1fr;border:0px solid #333333;background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}

.nfttitleimage{display:grid;grid-template-columns:4.6% 39px 4.6% minmax(0,1fr) 4.6% 26px 3px 12px 23px 41px 5.4%;grid-template-rows:18px 11px 2px 10px 13px 11px 11px 1px 10px 2px 11px 1fr;border:0px solid #333333;background-image:url(@/assets/img/Cards_4.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.qux-template-Image6{min-height:100%;border:0px solid #333333;background-size:100% 100%;border:0px solid #333;}
.LabelTitle{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:18px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:4;grid-row-end:5;z-index:191;}
.Grid{color:#333333;border:0px solid #333333;grid-column-start:4;grid-column-end:12;grid-row-start:2;grid-row-end:7;z-index:62;display:flex;flex-wrap:wrap;}

</style>