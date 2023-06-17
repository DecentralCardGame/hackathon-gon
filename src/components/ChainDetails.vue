<template>
    <div class="qux-container qux-element MyNFTs BG">
        <div class="qux-image qux-element MyNFTs nfttitleimage">
            <a href="#/Start_Detailed_View_1.html" class="qux-label qux-element qux-action Label4">
                <span class="qux-common-label">{{$route.params.name}}
                </span>
            </a>

            <div class="qux-container qux-element qux-template-Circle Circle">
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
                        <span >Name: {{selectedNFT.name}}
                        </span>
                    </label>
                    <label class="qux-label">
                        <span >Description: {{selectedNFT.description}}
                        </span>
                    </label>
                    <label class="qux-label">
                        <span >Origin: {{selectedNFT.originChain}}
                        </span>
                    </label>
                    <label v-if="selectedNFT.alive" class="qux-label">
                        <span >Deployed at: {{selectedNFT.deployed ? selectedNFT.deployed : "Not deployed"}}
                        </span>
                    </label>
                    <label class="qux-label">
                        <span >{{getAliveText()}}
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
                    
                        <img v-if="!isVideo(nft.imageUrl)" class="nftimage"
                        :id="index"
                        :src="nft.imageUrl"
                        />
                        <video autoplay
                            v-if="isVideo(nft.imageUrl)" 
                            class="nftimage"
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
    getTopRightIcon(index) {
        console.log()
        if (this.NFTs[index].alive == false)
            return require('@/assets/img/dead.png')
        if (this.NFTs[index].originChain == this.NFTs[index].deployed)
            return require('@/assets/img/defender.png')
        if (this.NFTs[index].deployed && this.NFTs[index].originChain != this.NFTs[index].deployed)
            return require('@/assets/img/attacker.png')
    },
    getAliveText() {
      return this.selectedNFT.alive ? "Alive" : "Died in a glorious battle at "+this.selectedNFT.deployed
    },
    isVideo(src) {
      return src.endsWith(".mp4")
    },
    nftClicked(index) {
        this.selectedNFT = this.NFTs[index]
        this.attack = false
        this.defend = false
        console.log("selectedNFT: ", this.selectedNFT)
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
.top-right-icon{
    position: absolute;
    width: 2%;
}
.nfttitleimage{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:5;z-index:12;border:0px solid #333333;background-image:url(@/assets/img/Cards_4.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.qux-template-Image6{min-height:100%;border:0px solid #333333;background-size:100% 100%;border:0px solid #333;}
.Label4{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:18px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:4;grid-row-end:5;z-index:191;}

</style>