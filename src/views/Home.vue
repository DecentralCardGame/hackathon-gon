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
      const options = {
        method: 'GET',
        url: 'https://nftarena.cc/stargaze/stars1awpflkaj937pkn6ws5f048hhf7jwjg8fc7scfh',
        withCredentials: false,
        rejectUnauthorized: false,
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios
        .request(options)
        .then((response) => {
          console.log("response.data", response.data); // Response
          this.viewModel.NFTs = response.data.NFTs
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    async mountChain(chainId) {
      await window.keplr.enable(chainId);
      const offlineSigner = window.getOfflineSigner(chainId)
      const accounts = await offlineSigner.getAccounts()
      return R.pluck('address', accounts)
    }
  },
  mounted () {
    this.stargazeAddresses = this.mountChain('stargaze-1')
    console.log("stargaze:", this.stargazeAddresses)
    this.omniflixAddresses = this.mountChain('omniflixhub-1')
    console.log("omniflix:", this.omniflixAddresses)

    this.chainwarsData()
  }
}
</script>