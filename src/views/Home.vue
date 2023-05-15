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
        result: ''
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

    graphqlReq(req, res) {
      const options = {
        method: 'POST',
        url: '/api',
        crossdomain: true,
        withCredentials: false,
        rejectUnauthorized: false,
        headers: {
        },
        data: {
          query: `query Tokens {
            tokens(
              ownerAddr: "stars1awpflkaj937pkn6ws5f048hhf7jwjg8fc7scfh"
            ) {
              tokens {
                collectionAddr
                tokenId
                name
                description
                imageUrl
              }
            }
          }`
        }
      }

      console.log(res)
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data); // Response
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
  mounted () {
    this.graphqlReq("yes", "yo")
  }
}
</script>