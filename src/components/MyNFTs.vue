<template>
  	<div class="qux-container qux-element MyNFTs BG">
        <div class="qux-image qux-element MyNFTs nfttitleimage"></div>
        
        <div class="qux-container qux-element Leaderboard_detail">
            <div class="qux-container qux-element RoundedRectangle7">
                <div class="no-nft-info"
                  v-if="!selectedNFT">
                  <label class="qux-label" >
                    <span >Select one of your NFT for details
                    </span>
                  </label>
                </div>
                <div class="nft-info" v-if="selectedNFT">          
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
                  <div v-if="!orderSent">
                    <div v-if="selectedNFT.originChain == 'Uptick'">
                      <button @click="targetChain = 'Uptick'; sendDefender()">Defend Uptick</button>
                    </div>
                    <div v-if="selectedNFT.originChain == 'Stargaze'">
                      <button @click="targetChain = 'Stargaze'; sendDefender()">Defend Stargaze</button>
                    </div>
                    <div v-if="selectedNFT.originChain == 'Omniflix'">
                      <button @click="targetChain = 'Omniflix'; sendDefender()">Defend Omniflix</button>
                    </div>
                    <div v-if="selectedNFT.originChain != 'Uptick'">
                      <button  @click="targetChain = 'Uptick'; sendAttacker()">Attack Uptick</button>
                    </div>
                    <div v-if="selectedNFT.originChain != 'Stargaze'">
                      <button @click="targetChain = 'Stargaze'; sendAttacker()">Attack Stargaze</button>
                    </div>
                    <div v-if="selectedNFT.originChain != 'Omniflix'">
                      <button @click="targetChain = 'Omniflix'; sendAttacker()">Attack Omniflix</button>
                    </div>
                  </div> 
                  <label v-if="orderSent" class="qux-label">
                    <span class="oneliner">
                      <b>Order</b>
                    </span>
                    <span class="oneliner">
                      {{apiRes}}
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
  name: 'MyNFTs',
  components: {},

  data() {
    return {
        stargazeAddresses: [],
        omniflixAddresses: [],
        irisAddresses: [],
        NFTs: [],
        selectedNFT: undefined,
        targetChain: null,
        orderSent: false,
        apiRes: "",
    }
  },
  props: {
  },
  mounted () {
    // here we load all the addresses from the keplr wallet with given chain ids
    this.stargazeAddresses = this.mountChain('stargaze-1')
    this.omniflixAddresses = this.mountChain('omniflixhub-1')
    this.irisAddresses = this.mountChain('irishub-1')

    // then we want to do all the get requests to the chain's APIs
    this.chainwarsData()
  },
  methods: {
    selectionBorders(index) {
        if (this.selectedNFT && this.selectedNFT.tokenId == this.NFTs[index].tokenId)
            return "nftimage-selected"
        else
            return "nftimage"
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
    isVideo(src) {
      return src.endsWith(".mp4")
    },
    async sendAttacker() {
      this.apiRes = await axios.post('https://nftarena.cc/sendAttacker', {
          collection: this.selectedNFT.collection,
          tokenId: this.selectedNFT.tokenId,
          attackChain: this.targetChain
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      if (this.apiRes.data && this.apiRes.data.status)
        this.apiRes = this.apiRes.data.status
      this.orderSent = true
    },
    async sendDefender() {
      this.apiRes = await axios.post('https://nftarena.cc/sendDefender', {
          collection: this.selectedNFT.collection,
          tokenId: this.selectedNFT.tokenId,
          defendChain: this.targetChain
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      if (this.apiRes.data && this.apiRes.data.status)
        this.apiRes = this.apiRes.data.status
      this.orderSent = true
    },
    nftClicked(index) {
        this.selectedNFT = this.NFTs[index]
        this.orderSent = false
        console.log("selectedNFT: ", this.selectedNFT)
    },
    chainwarsData() {
      console.log("requesting chain data")
      const options = {
        method: 'GET',
        url: '',
        withCredentials: false,
        rejectUnauthorized: false,
        headers: {
          'Content-Type': 'application/json'
        }
      }

      let requestData = (url) => {
        console.log("requesting", url)
        options.url = url
        axios
          .request(options)
          .then((response) => {
            R.map(nft => {
                if (nft) this.NFTs.push(nft)
            }, response.data)
            
            console.log("NFTs", this.NFTs)
          })
          .catch(function (error) {
            console.error(error)
          })
      }

      this.stargazeAddresses.then(addresses => {
        addresses.forEach(address => {
          requestData('https://nftarena.cc/stargaze/'+address, "Stargaze")
        })
      })
      this.omniflixAddresses.then(addresses => {
        addresses.forEach(address => {
          requestData('https://nftarena.cc/omniflix/'+address, "Omniflix")
        })
      })
      this.irisAddresses.then(addresses => {
        addresses.forEach(address => {
          requestData('https://nftarena.cc/uptick/'+address, "Uptick")
        })
      })
    },

    async mountChain(chainId) {
      await window.keplr.enable(chainId)
      const offlineSigner = window.getOfflineSigner(chainId)
      const accounts = await offlineSigner.getAccounts()
      return new Promise(function(resolve, reject) {
        try {
          console.log("address:", R.pluck('address', accounts))
          resolve(R.pluck('address', accounts))
        }
        catch (error) {
          console.error("mountChain failed for", chainId, "with error", error)
          reject([])
        }
      })
    }
  }
}

</script>

<style lang="scss">
button {
  color: white;
  border-radius: 3px;
  border-width: 0px;
  border-color: rgb(51, 51, 51);
  background: rgb(119, 119, 119);
  margin: 5px;
  padding: 5px;
}
button:hover {
  margin: 3px;
  border: 2px solid white;
}
button:active {
  background: rgb(142, 54, 50);
}
.oneliner {
  display: block;
}

.qux-textbox{border:1px solid #333;-webkit-transition:all .2s;transition:all .2s;padding:0;}
.qux-textbox:focus{outline:none;}

.qux-label{
    display:block; 
    overflow:hidden;
    text-overflow: ellipsis;
    overflow:hidden;
    margin: 5%;
}

.no-nft-info{
    text-align: center;
    margin: auto;
    width: 75%;
}
.nft-info{
    text-align: center;
    margin: auto;
    width: 90%;
}

/*! CSS Used from: Embedded */
.qux-screen.MyNFTs{min-height:1372px;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:49px 1px 494px minmax(60px, auto) minmax(767px, auto) 1fr;background-color:#263236;height:100%;}

.MyNFTs .BG{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#263236;grid-column-start:1;grid-column-end:2;grid-row-start:5;grid-row-end:6;z-index:11;display:grid;grid-template-columns:minmax(0,1fr) 280px 1% 211px 13px 642px 1px minmax(0,1fr);grid-template-rows:25px 29px 22px 69px 25px minmax(559px, auto) 1fr;}
.MyNFTs .nfttitleimage{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:5;z-index:12;border:0px solid #333333;background-image:url(@/assets/img/Cards_MyNFTs.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}

.MyNFTs .Leaderboard_detail{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:6;grid-row-end:7;z-index:15;display:flex;flex-direction:column;}
.MyNFTs .RoundedRectangle7{
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
    border:0px solid transparent;
    border-radius:10px;
    background-color:#1d2126;
    width:280px;
    margin-left:auto;
    margin-right:auto;
    min-height:559px;
    margin-top:0px;
    display:flex;
}
.MyNFTs .Label11_5{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:4;grid-row-start:2;grid-row-end:3;z-index:17;}

.Grid{color:#333333;border:0px solid #333333;grid-column-start:4;grid-column-end:12;grid-row-start:2;grid-row-end:7;z-index:62;display:flex;flex-wrap:wrap;}

body{margin:0px;font-family:'Helvetica Neue', 'Helvetica', sans-serif;}
div{margin:0px;}
</style>