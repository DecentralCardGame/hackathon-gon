<template>
  <Luisa :design="design" :config="config" v-model="viewModel"/>
</template>
<script>

import axios from 'axios'
import * as R from "ramda";

export default {
  name: 'Home',
  data: function() {
    return {
      design: "a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS",
      viewModel: {
        name:'',
        stargazeAddresses: [],
        omniflixAddresses: [],
        irisAddresses: [],
        result: '',
        NFTs: []
      },
      config: {
      }
    }
  },
  components: {
  },
  methods: {
    sayHello () {
      this.viewModel.result = "Hello " + this.viewModel.name
    },
    myNFTs() {

      console.log("NFTs:", this.viewModel.NFTs)

      this.chainwarsData()

      //this.$router.push({ path: 'MY_NFTs_Locked.html' })

      //MY_NFTs_Locked
      //Start_Detailed_View

      console.log("NFTs:", this.viewModel.NFTs)
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
        options.url = url
        axios
          .request(options)
          .then((response) => {
            console.log("response.data", response.data); // Response
            this.viewModel.NFTs.push(response.data.NFTs)
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
  },
  mounted () {
    // here we load all the addresses from the keplr wallet with given chain ids
    this.stargazeAddresses = this.mountChain('stargaze-1')
    this.omniflixAddresses = this.mountChain('omniflixhub-1')
    this.irisAddresses = this.mountChain('irishub-1')

    // then we want to do all the get requests to the chain's APIs
    this.chainwarsData()
  }
}
</script>