<template>
    <div class="qux-container qux-element MyNFTs BG">
        <div class="qux-image qux-element MyNFTs nfttitleimage"></div>
        
        <div class="qux-container qux-element Leaderboard_detail">
            <div class="qux-container qux-element RoundedRectangle7">
                <div class="no-nft-info"
                  v-if="!selectedNFT">
                  <label class="qux-label" >
                    <span >Select one of {{$route.params.name}}'s NFTs
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
                    <label class="qux-label">
                    </label>
                        <span >Description: {{selectedNFT.description}}
                        </span>
                    <label class="qux-label">
                    </label>
                        <span >Origin: {{selectedNFT.originChain}}
                        </span>
                    <label class="qux-label">
                    </label>
                        <span >Deployed at: {{selectedNFT.deployed}}
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
    title: {
        type: String,
        default () {
            return "noname"
        },
    },
  },
  mounted () {
    this.getNFTs()
  },
  methods: {
    isVideo(src) {
      return src.endsWith(".mp4")
    },
    nftClicked(index) {
        this.selectedNFT = this.NFTs[index]
        this.attack = false
        this.defend = false
        console.log("selectedNFT: ", this.selectedNFT)
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
.nfttitleimage{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:5;z-index:12;border:0px solid #333333;background-image:url(@/assets/img/Cards_4.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
</style>