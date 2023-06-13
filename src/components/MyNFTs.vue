<template>

    <div class="qux-container qux-element MyNFTs BG">
        <div class="qux-image qux-element MyNFTs nfttitleimage"></div>
        
        <div class="qux-container qux-element Leaderboard_detail">
            <div class="qux-container qux-element RoundedRectangle7">
                <label class="qux-label qux-element Label11_5">
                    <span class="qux-common-label">Address</span><!---->
                </label>
                <label class="qux-label qux-element Label11_17">
                    <span class="qux-common-label">Current Chain</span><!---->
                </label>
                <div class="qux-container qux-element Group_1">
                    <div class="qux-container qux-element Circle2_13">
                    <div class="qux-container qux-element Circle2">
                        <div class="qux-image qux-element Image7"></div>
                        <!---->
                    </div>
                    <!---->
                    </div>
                    <!---->
                </div>
                <label class="qux-label qux-element Label11_32">
                    <span class="qux-common-label">Status</span><!---->
                </label>
                <label class="qux-label qux-element Label11_36">
                    <span class="qux-common-label">DEFENDER
                    </span><!---->
                </label>
                <div class="qux-container qux-element Group">
                    <div class="qux-container qux-element Circle2_16">
                    <div class="qux-container qux-element Circle2_15">
                        <div class="qux-image qux-element Image7_14"></div>
                        <!---->
                    </div>
                    <!---->
                    </div>
                    <!---->
                </div>
                <div class="qux-container qux-element Group_2">
                    <div class="qux-container qux-element Circle2_20">
                    <div class="qux-container qux-element Circle2_19">
                        <div class="qux-image qux-element Image7_18"></div>
                        <!---->
                    </div>
                    <!---->
                    </div>
                    <!---->
                </div>
                <div class="qux-container qux-element Group_3">
                    <div class="qux-container qux-element Circle2_23">
                    <div class="qux-container qux-element Circle2_22">
                        <div class="qux-image qux-element Image7_21"></div>
                        <!---->
                    </div>
                    <!---->
                    </div>
                    <!---->
                </div>
                <div class="qux-container qux-element Group_4">
                    <div class="qux-container qux-element Circle2_26">
                    <div class="qux-container qux-element Circle2_25">
                        <div class="qux-image qux-element Image7_24"></div>
                        <!---->
                    </div>
                    <!---->
                    </div>
                    <!---->
                </div>
                <label class="qux-label qux-element Label11_6">
                    <span class="qux-common-label">ADDRESS</span><!---->
                </label>
                <label class="qux-label qux-element Label11_27">
                    <span class="qux-common-label">Omniflix
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_33">
                    <span class="qux-common-label">ATTACKER
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_7">
                    <span class="qux-common-label">ADDRESS
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_28">
                    <span class="qux-common-label">Uptick
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_34">
                    <span class="qux-common-label">DEFENDER
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_8">
                    <span class="qux-common-label">ADDRESS
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_29">
                    <span class="qux-common-label">Stargaze
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_35">
                    <span class="qux-common-label">ATTACKER
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_9">
                    <span class="qux-common-label">ADDRESS
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_30">
                    <span class="qux-common-label">Omniflix
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_10">
                    <span class="qux-common-label">ADDRESS
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_38">
                    <span class="qux-common-label">Wallet Stats
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_39">
                    <span class="qux-common-label">Total NFTs
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_37">
                    <span class="qux-common-label">ATTACKER
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_65">
                    <span class="qux-common-label">Total Attackers
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_3">
                    <span class="qux-common-label">XXX
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11">
                    <span class="qux-common-label">XXX
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label11_31">
                    <span class="qux-common-label">Uptick
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label19">
                    <span class="qux-common-label">Total Defenders
                    </span><!---->
                </label>
                <label class="qux-label qux-element Label20">
                    <span class="qux-common-label">XXX
                    </span><!---->
                </label>
                <!---->
            </div>
            <!---->
        </div>
        <div class="qux-repeater qux-element Grid">

            <ul class="qux-repeater-child qux-repeater-placeholder">
                <li class="nftimage"
                v-for="(nft, index) in NFTs"
                :key="index"
                @click="
                clickedIndex = index;
                nftClicked();
                ">
                    <img class="nftimage"
                        :id="index"
                        :src="nft.imageUrl"
                    />
                </li>
                <!-- other items here -->
            </ul>

        </div>
    <!---->
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
        NFTs: []
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
        console.log("requesting stargaze:", this.stargazeAddresses)
        addresses.forEach(address => {
          requestData('https://nftarena.cc/stargaze/'+address)
        })
      })
      this.omniflixAddresses.then(addresses => {
        console.log("requesting omniflix:", this.omniflixAddresses)
        addresses.forEach(address => {
          requestData('https://nftarena.cc/omniflix/'+address)
        })
      })
      this.irisAddresses.then(addresses => {
        console.log("requesting iris:", this.irisAddresses)
        addresses.forEach(address => {
          requestData('https://nftarena.cc/uptick/'+address)
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

.qux-repeater{overflow:auto;}
/*! CSS Used from: Embedded */
.qux-dropdown{-webkit-transition:all .2s;transition:all .2s;display:inline-block;position:relative;cursor:pointer;}
.qux-dropdown .qux-dropdown-label{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
.qux-dropdown .qux-dropdown-label .qux-dropdown-expend{position:absolute;height:100%;top:0;right:0;width:40px;}
.qux-dropdown .qux-dropdown-label .qux-dropdown-carret{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid;display:inline-block;height:0;margin-left:2px;vertical-align:middle;width:0;position:absolute;right:50%;top:50%;-webkit-transform:translateY(-50%) translateX(50%);transform:translateY(-50%) translateX(50%);cursor:pointer;}
/*! CSS Used from: Embedded */
.qux-textbox{border:1px solid #333;-webkit-transition:all .2s;transition:all .2s;padding:0;}
.qux-textbox:focus{outline:none;}

/*! CSS Used from: Embedded */
.qux-screen.MyNFTs{min-height:1372px;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:49px 1px 494px minmax(60px, auto) minmax(767px, auto) 1fr;background-color:#263236;height:100%;}
#MyNFTs {all: initial}
.MyNFTs .Box{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#1d2126;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:3;display:grid;grid-template-columns:minmax(0,1fr) 159px 1.1% 30px 3.1%;grid-template-rows:10px 3px 27px 1fr;}
.MyNFTs .Image2{grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:4;z-index:5;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aUJbvynlHeL5agH2gcb6XhOtT2Kr0O15w2yaXEOc9qoI9waF2TjfLy.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Label{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:16px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:3;grid-row-end:4;z-index:6;}
.MyNFTs .Label:hover{transition:all 0.2s;text-decoration:underline;}
.MyNFTs .Box1{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#1d2126;grid-column-start:1;grid-column-end:2;grid-row-start:4;grid-row-end:5;z-index:1;display:grid;grid-template-columns:4.7% 30px 3.1% 90px 3.1% 90px minmax(0,1fr);grid-template-rows:15px 3px 27px 1fr;}
.MyNFTs .Image1{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:3;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aIAxzmDyUZIZ1mXUKDzFcQuCFrCh5j1vcyCa1nLivzwhmMUh7uyjne.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Label1{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:16px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;z-index:4;}
.MyNFTs .Label1:hover{transition:all 0.2s;text-decoration:underline;}
.MyNFTs .Label2_75{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:16px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:3;grid-row-end:4;z-index:10;}
.MyNFTs .Label2_75:hover{transition:all 0.2s;text-decoration:underline;}
.MyNFTs .Image{grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:4;z-index:2;display:flex;flex-direction:column;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aJzr8Is60G9K3zKDjShkCSuzEPMsW6ODFlYtvUjgkXfGno6QVGL8j6.jpg);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Group_MY_NFTs_Locked{border:0px solid transparent;width:864px;margin-left:auto;margin-right:auto;min-height:226px;margin-top:129px;display:grid;grid-template-columns:166px 531px 167px;grid-template-rows:53px 64px 109px;}
.MyNFTs .Image3{grid-column-start:1;grid-column-end:4;grid-row-start:2;grid-row-end:4;z-index:8;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10ay1whPu7k6z4R6hprbkITaOcr7tbWqMzjjSLseWzGVX3GkJ3zLq1QK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Image4{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:3;z-index:9;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10abtKO1UcOJWb50ktiuGHuxe3QI75vHQfmVqiazGBTfKIhzWQhUMJ4a.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .BG{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#263236;grid-column-start:1;grid-column-end:2;grid-row-start:5;grid-row-end:6;z-index:11;display:grid;grid-template-columns:minmax(0,1fr) 280px 1% 211px 13px 642px 1px minmax(0,1fr);grid-template-rows:25px 29px 22px 69px 25px minmax(559px, auto) 1fr;}
.MyNFTs .nfttitleimage{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:5;z-index:12;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aUzznnw2OeMFGz17eZy9RpOBdQ5hz0WcH9fqW4j4llY2Jhp7sR0hQS.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .DropDown_42{color:#ffffff;text-align:center;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1.9;border:0px solid #333333;border-radius:3px;padding:5px 6px 5px 6px;background-color:#39444a;grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:3;z-index:13;}
.MyNFTs .DropDown{color:#777;text-align:right;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:10px;border:0px solid #333333;border-radius:3px;padding:5px;background-color:#1d2126;grid-column-start:6;grid-column-end:7;grid-row-start:2;grid-row-end:3;z-index:14;}
.MyNFTs .DropDown:focus{background-color:#000000;}
.MyNFTs .DropDown::placeholder{color:rgba(119, 119, 119, 0.5);}
.MyNFTs .Leaderboard_detail{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:6;grid-row-end:7;z-index:15;display:flex;flex-direction:column;}
.MyNFTs .RoundedRectangle7{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#1d2126;width:280px;margin-left:auto;margin-right:auto;min-height:559px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 16px 23px 9px 23px 12px 2px 2px 31px 8px 5px 19px 21px 40px 8px 10px 7.5%;grid-template-rows:30px minmax(11px, auto) 17px minmax(1px, auto) minmax(11px, auto) 10px minmax(1px, auto) minmax(11px, auto) 10px minmax(1px, auto) minmax(11px, auto) 10px minmax(1px, auto) minmax(11px, auto) 10px minmax(1px, auto) minmax(11px, auto) 271px minmax(11px, auto) 18px minmax(11px, auto) 11px minmax(11px, auto) 12px minmax(1px, auto) minmax(10px, auto) 1px 1fr;}
.MyNFTs .Label11_5{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:4;grid-row-start:2;grid-row-end:3;z-index:17;}
.MyNFTs .Label11_17{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:13;grid-row-start:2;grid-row-end:3;z-index:18;}
.MyNFTs .Group_1{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:4;grid-row-end:6;z-index:19;display:flex;flex-direction:column;}
.MyNFTs .Circle2_13{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.MyNFTs .Circle2{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.MyNFTs .Image7{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Label11_32{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:14;grid-column-end:15;grid-row-start:2;grid-row-end:3;z-index:23;}
.MyNFTs .Label11_36{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:14;grid-column-end:17;grid-row-start:14;grid-row-end:15;z-index:24;}
.MyNFTs .Group{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:7;grid-row-end:9;z-index:25;display:flex;flex-direction:column;}
.MyNFTs .Circle2_16{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.MyNFTs .Circle2_15{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.MyNFTs .Image7_14{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Group_2{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:10;grid-row-end:12;z-index:29;display:flex;flex-direction:column;}
.MyNFTs .Circle2_20{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.MyNFTs .Circle2_19{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.MyNFTs .Image7_18{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Group_3{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:13;grid-row-end:15;z-index:33;display:flex;flex-direction:column;}
.MyNFTs .Circle2_23{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.MyNFTs .Circle2_22{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.MyNFTs .Image7_21{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Group_4{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:16;grid-row-end:18;z-index:37;display:flex;flex-direction:column;}
.MyNFTs .Circle2_26{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.MyNFTs .Circle2_25{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.MyNFTs .Image7_24{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.MyNFTs .Label11_6{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:5;grid-row-start:5;grid-row-end:6;z-index:41;}
.MyNFTs .Label11_27{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:12;grid-row-start:5;grid-row-end:6;z-index:42;}
.MyNFTs .Label11_33{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:14;grid-column-end:17;grid-row-start:5;grid-row-end:6;z-index:43;}
.MyNFTs .Label11_7{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:5;grid-row-start:8;grid-row-end:9;z-index:44;}
.MyNFTs .Label11_28{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:12;grid-row-start:8;grid-row-end:9;z-index:45;}
.MyNFTs .Label11_34{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:14;grid-column-end:17;grid-row-start:8;grid-row-end:9;z-index:46;}
.MyNFTs .Label11_8{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:5;grid-row-start:11;grid-row-end:12;z-index:47;}
.MyNFTs .Label11_29{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:12;grid-row-start:11;grid-row-end:12;z-index:48;}
.MyNFTs .Label11_35{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:14;grid-column-end:17;grid-row-start:11;grid-row-end:12;z-index:49;}
.MyNFTs .Label11_9{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:5;grid-row-start:14;grid-row-end:15;z-index:50;}
.MyNFTs .Label11_30{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:12;grid-row-start:14;grid-row-end:15;z-index:51;}
.MyNFTs .Label11_10{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:5;grid-row-start:17;grid-row-end:18;z-index:52;}
.MyNFTs .Label11_38{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:10;grid-row-start:19;grid-row-end:20;z-index:53;}
.MyNFTs .Label11_39{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:3;grid-column-end:8;grid-row-start:21;grid-row-end:22;z-index:54;}
.MyNFTs .Label11_37{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:14;grid-column-end:17;grid-row-start:17;grid-row-end:18;z-index:55;}
.MyNFTs .Label11_65{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:3;grid-column-end:10;grid-row-start:23;grid-row-end:24;z-index:56;}
.MyNFTs .Label11_3{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:13;grid-column-end:16;grid-row-start:21;grid-row-end:22;z-index:57;}
.MyNFTs .Label11{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:13;grid-column-end:16;grid-row-start:23;grid-row-end:24;z-index:58;}
.MyNFTs .Label11_31{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:12;grid-row-start:17;grid-row-end:18;z-index:59;}
.MyNFTs .Label19{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:3;grid-column-end:11;grid-row-start:26;grid-row-end:28;z-index:60;}
.MyNFTs .Label20{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:13;grid-column-end:16;grid-row-start:25;grid-row-end:27;z-index:61;}
.MyNFTs .Grid{color:#333333;border:0px solid #333333;grid-column-start:4;grid-column-end:12;grid-row-start:2;grid-row-end:7;z-index:62;display:flex;flex-wrap:wrap;}
.MyNFTs .Grid .qux-repeater-child{  
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    align-content: flex-start;

    object-fit: cover;
    width: 100%;
    height: 100%;
    
    border-radius: 5px;width:100%;height:100%;
}
.nftimage{
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
}
body{margin:0px;font-family:'Helvetica Neue', 'Helvetica', sans-serif;}
div{margin:0px;}
</style>