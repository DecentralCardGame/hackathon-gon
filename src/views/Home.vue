<template>
  <Luisa :design="design" :config="config" v-model="viewModel"/>
</template>
<script>
/**
 * Here is the downloaded figma file. To download yours, type in the command line
 * node download.js.
 */

/**
 * Import mdi fonts if you are using quant-ux designs
 */
//import '@mdi/font/css/materialdesignicons.css'


import axios from 'axios';

export default {
  name: 'Home',
  data: function() {
    return {
      design: "a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS",
      viewModel: {
        name:'',
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

      this.$router.push({ path: 'MY_NFTs_Locked.html' })

      //MY_NFTs_Locked
      //Start_Detailed_View

      console.log("NFTs:", this.viewModel.NFTs)
    },

    chainwarsData() {
      const options = {
        method: 'GET',
        url: 'http://45.136.28.158:3000/stargaze/stars1awpflkaj937pkn6ws5f048hhf7jwjg8fc7scfh',
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

    async keplrMount() {
      let chainId = "stargaze-1"
      // Enabling before using the Keplr is recommended.
      // This method will ask the user whether or not to allow access if they haven't visited this website.
      // Also, it will request user to unlock the wallet if the wallet is locked.
      await window.keplr.enable(chainId);

      const offlineSigner = window.getOfflineSigner(chainId);

      // You can get the address/public keys by `getAccounts` method.
      // It can return the array of address/public key.
      // But, currently, Keplr extension manages only one address/public key pair.
      // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();

      console.log(accounts)
    }
  },
  mounted () {
    //this.keplrMount()

    this.chainwarsData()
  }
}
</script>