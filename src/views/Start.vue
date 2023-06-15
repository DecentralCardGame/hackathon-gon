<template>
<noscript><strong>We're sorry but luisa-vue3-starter doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
  <div id="app" data-v-app="">
    <div class="qux">
        <div class="qux-container qux-element Start qux-screen">
            <PageHeader
            />
            
            <Leaderboard v-if="isLeaderboardVisible"
            />

            <MyNFTs v-if="isMyNFTsVisible"
            />


        </div>
    </div>
    </div>
</template>

<script>
//import axios from 'axios'
//import * as R from "ramda"

import PageHeader from '@/components/PageHeader'
import Leaderboard from '@/components/Leaderboard'
import MyNFTs from '@/components/MyNFTs'

export default {
  name: 'Home',
  components: {PageHeader, Leaderboard, MyNFTs},
  data: function() {
    return {
      isLeaderboardVisible: true,
      isMyNFTsVisible: false,
      config: {
      }
    }
  },
  watch:{
    $route (to, from){
      if (to.name == "Leaderboard") {
        console.log("leaderboard")
        this.isLeaderboardVisible = true
        this.isMyNFTsVisible = false
      }
      else if (to.name == "MyNFTs") {
        console.log("mynfts")
        this.isLeaderboardVisible = false
        this.isMyNFTsVisible = true
      }
        
      console.log("route to", to, "from", from)
    }
  },   
  methods: {
    
  },
  mounted () {

  }
}
</script>

<style lang="scss">
/*! CSS Used from: https://nftarena.cc/css/app.f1c45761.css */
#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;}
/*! CSS Used from: Embedded */
.qux{background:none;height:100%;}
.qux-screen{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100%;background-size:100%;}
.qux-action{text-decoration:none;}
.qux-action,.qux-action *{cursor:pointer;}
.qux-valign-middle{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;}
.qux-valign-middle .qux-common-label{width:100%;}
/*! CSS Used from: Embedded */
.qux-container{border-style:solid;border-width:0;}

/*! CSS Used from: Embedded */
.qux-label{
  display: inline-block;
  overflow: inherit;
}
/*! CSS Used from: Embedded */
.qux-template-Circle{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;}
.qux-template-Circle1{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;}
.qux-screen.Start{min-height:1372px;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:49px 1px 494px minmax(60px, auto) minmax(767px, auto) 1fr;background-color:#263236;height:100%;}
.Start .Box{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#1d2126;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:3;display:grid;grid-template-columns:minmax(0,1fr) 159px 1.1% 30px 3.1%;grid-template-rows:10px 3px 27px 1fr;}
.Start .Image2{grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:4;z-index:5;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aUJbvynlHeL5agH2gcb6XhOtT2Kr0O15w2yaXEOc9qoI9waF2TjfLy.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:16px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:3;grid-row-end:4;z-index:6;}
.Start .Label:hover{transition:all 0.2s;text-decoration:underline;}
.Start .Box1{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#1d2126;grid-column-start:1;grid-column-end:2;grid-row-start:4;grid-row-end:5;z-index:1;display:grid;grid-template-columns:4.7% 30px 3.1% 90px 3.1% 20px 67px 3px minmax(0,1fr);grid-template-rows:15px 3px 25px 2px 1fr;}
.Start .Image1{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:5;z-index:3;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aIAxzmDyUZIZ1mXUKDzFcQuCFrCh5j1vcyCa1nLivzwhmMUh7uyjne.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label1{border:0px solid transparent;grid-column-start:7;grid-column-end:8;grid-row-start:3;grid-row-end:4;z-index:203;}
.Start .Label1:hover{transition:all 0.2s;}
.Start .Image{grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:4;z-index:2;display:flex;flex-direction:column;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aJzr8Is60G9K3zKDjShkCSuzEPMsW6ODFlYtvUjgkXfGno6QVGL8j6.jpg);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Group_Start{border:0px solid transparent;width:864px;margin-left:auto;margin-right:auto;min-height:226px;margin-top:129px;display:grid;grid-template-columns:166px 531px 167px;grid-template-rows:53px 64px 109px;}
.Start .Image3{grid-column-start:1;grid-column-end:4;grid-row-start:2;grid-row-end:4;z-index:8;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10ay1whPu7k6z4R6hprbkITaOcr7tbWqMzjjSLseWzGVX3GkJ3zLq1QK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Image4{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:3;z-index:9;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10abtKO1UcOJWb50ktiuGHuxe3QI75vHQfmVqiazGBTfKIhzWQhUMJ4a.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .BG{color:#ffffff;text-align:left;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:0px;line-height:1.4;border:0px solid #333333;background-color:#263236;grid-column-start:1;grid-column-end:2;grid-row-start:5;grid-row-end:6;z-index:10;display:grid;grid-template-columns:minmax(0,1fr) 280px 1% 280px 1% 280px 1% 280px minmax(0,1fr);grid-template-rows:25px 1px 119px 1px 24px minmax(265px, auto) 25px minmax(1px, auto) minmax(264px, auto) 1px 1fr;}
.Start .Leaderboard_detail{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:6;grid-row-end:10;z-index:11;display:flex;flex-direction:column;}
.Start .Label29{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:4;grid-row-start:2;grid-row-end:3;z-index:13;}
.Start .Label30{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:5;grid-column-end:9;grid-row-start:2;grid-row-end:3;z-index:14;}
.Start .Group_1{border:0px solid transparent;grid-column-start:5;grid-column-end:7;grid-row-start:4;grid-row-end:6;z-index:15;display:flex;flex-direction:column;}
.Start .Circle6{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle7{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image9{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label31{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:13;grid-column-end:14;grid-row-start:2;grid-row-end:3;z-index:19;}
.Start .Group{border:0px solid transparent;grid-column-start:5;grid-column-end:7;grid-row-start:7;grid-row-end:9;z-index:20;display:flex;flex-direction:column;}
.Start .Circle8{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle9{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image10{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Group_2{border:0px solid transparent;grid-column-start:5;grid-column-end:7;grid-row-start:10;grid-row-end:12;z-index:24;display:flex;flex-direction:column;}
.Start .Circle10{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle11{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image11{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label32{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:4;grid-row-start:5;grid-row-end:6;z-index:28;}
.Start .Label33{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:8;grid-column-end:11;grid-row-start:5;grid-row-end:6;z-index:29;}
.Start .Label34{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:13;grid-column-end:14;grid-row-start:5;grid-row-end:6;z-index:30;}
.Start .Label35{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:4;grid-row-start:8;grid-row-end:9;z-index:31;}
.Start .Label37{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:13;grid-column-end:14;grid-row-start:8;grid-row-end:9;z-index:32;}
.Start .Label38{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:4;grid-row-start:11;grid-row-end:12;z-index:33;}
.Start .Label39{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:8;grid-column-end:11;grid-row-start:11;grid-row-end:12;z-index:34;}
.Start .Label40{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:13;grid-column-end:14;grid-row-start:11;grid-row-end:12;z-index:35;}
.Start .Label45{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:8;grid-column-end:11;grid-row-start:8;grid-row-end:9;z-index:41;}
.Start .Card_3_bottom{border:0px solid transparent;grid-column-start:8;grid-column-end:9;grid-row-start:8;grid-row-end:10;z-index:42;display:flex;flex-direction:column;}
.Start .Label101{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;z-index:44;}
.Start .Group_23{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:45;display:flex;flex-direction:column;}
.Start .Circle41{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle42{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image27{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label102{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:9;grid-row-start:5;grid-row-end:6;z-index:49;}
.Start .Label105{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:8;grid-row-end:10;z-index:50;}
.Start .Group_26{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:10;z-index:51;display:flex;flex-direction:column;}
.Start .Circle43{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle44{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image28{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label106{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:9;grid-row-end:11;z-index:55;}
.Start .Label107{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:9;grid-row-end:11;z-index:56;}
.Start .Label109{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:3;grid-row-end:4;z-index:57;}
.Start .Label110{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:3;grid-row-end:4;z-index:58;}
.Start .Label114{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:13;grid-row-end:14;z-index:59;}
.Start .Label117{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:13;grid-row-end:14;z-index:60;}
.Start .Label118{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:13;grid-row-end:14;z-index:61;}
.Start .Group_27{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:12;grid-row-end:14;z-index:62;display:flex;flex-direction:column;}
.Start .Circle51{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle52{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image32{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Card_3_top{border:0px solid transparent;grid-column-start:8;grid-column-end:9;grid-row-start:6;grid-row-end:7;z-index:66;display:flex;flex-direction:column;}
.Start .RoundedRectangle10{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#39444a;width:280px;margin-left:auto;margin-right:auto;min-height:265px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 12px 4px 44px 54px 26px 18px 28px 33px minmax(0,1fr);grid-template-rows:29px minmax(1px, auto) minmax(11px, auto) 18px minmax(12px, auto) 18px minmax(11px, auto) 1fr;}
.Start .Label98{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;z-index:68;}
.Start .Group_22{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:69;display:flex;flex-direction:column;}
.Start .Circle39{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle40{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image26{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label99{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:9;grid-row-start:5;grid-row-end:6;z-index:73;}
.Start .Label100{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:7;grid-row-end:8;z-index:74;}
.Start .Label103{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:3;grid-row-end:4;z-index:75;}
.Start .Label104{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:3;grid-row-end:4;z-index:76;}
.Start .Card_3{border:0px solid transparent;grid-column-start:8;grid-column-end:9;grid-row-start:3;grid-row-end:5;z-index:77;display:flex;flex-direction:column;}
.Start .Image35{width:280px;margin-left:auto;margin-right:auto;min-height:120px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 39px minmax(0,1fr) 82px minmax(0,1fr) 26px 3px 12px 23px 41px minmax(0,1fr);grid-template-rows:18px minmax(11px, auto) 2px minmax(10px, auto) minmax(1px, auto) 12px minmax(11px, auto) 11px minmax(1px, auto) 10px 2px minmax(11px, auto) 1fr;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10ayPbJMXjaRRzY2kbXCmzsCuyV9VWBCAD4NwysYyqEYf6UPKrzHzs5y.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label20{color:#ffffff;text-align:center;font-family:Roboto, " sans-serif";font-size:36px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:5;grid-row-end:10;z-index:79;}
.Start .Circle4{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:13;z-index:80;display:flex;flex-direction:column;}
.Start .Circle5{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:76px;margin-left:auto;margin-right:auto;min-height:76px;margin-top:3px;display:flex;flex-direction:column;}
.Start .Image8{width:68px;margin-left:auto;margin-right:auto;height:68px;margin-top:4px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label21{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:2;grid-row-end:3;z-index:82;}
.Start .Label22{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:4;grid-row-end:6;z-index:83;}
.Start .Label23{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:9;grid-row-end:11;z-index:84;}
.Start .Label24{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:12;grid-row-end:13;z-index:85;}
.Start .Label25{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:7;grid-row-end:8;z-index:86;}
.Start .Label26{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:11;grid-row-start:9;grid-row-end:11;z-index:87;}
.Start .Label27{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:11;grid-row-start:12;grid-row-end:13;z-index:88;}
.Start .Label28{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:8;grid-column-end:11;grid-row-start:7;grid-row-end:8;z-index:89;}
.Start .Card_2_bottom{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:9;grid-row-end:11;z-index:91;display:flex;flex-direction:column;}
.Start .RoundedRectangle6{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#39444a;width:280px;margin-left:auto;margin-right:auto;min-height:265px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 12px 4px 44px 54px 26px 18px 28px 33px minmax(0,1fr);grid-template-rows:29px minmax(1px, auto) minmax(11px, auto) 18px minmax(12px, auto) 17px minmax(1px, auto) minmax(1px, auto) minmax(10px, auto) 1px 11px minmax(1px, auto) minmax(11px, auto) 1fr;}
.Start .Label75{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;z-index:93;}
.Start .Group_11{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:94;display:flex;flex-direction:column;}
.Start .Circle25{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle26{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image19{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label76{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:9;grid-row-start:5;grid-row-end:6;z-index:98;}
.Start .Label77{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:8;grid-row-end:10;z-index:99;}
.Start .Group_15{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:10;z-index:100;display:flex;flex-direction:column;}
.Start .Circle27{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle28{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image20{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label78{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:9;grid-row-end:11;z-index:104;}
.Start .Label79{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:9;grid-row-end:11;z-index:105;}
.Start .Label80{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:3;grid-row-end:4;z-index:106;}
.Start .Label81{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:3;grid-row-end:4;z-index:107;}
.Start .Label83{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:13;grid-row-end:14;z-index:108;}
.Start .Label86{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:13;grid-row-end:14;z-index:109;}
.Start .Label87{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:13;grid-row-end:14;z-index:110;}
.Start .Group_16{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:12;grid-row-end:14;z-index:111;display:flex;flex-direction:column;}
.Start .Circle33{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle34{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image23{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Card_2_top{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:6;grid-row-end:7;z-index:115;display:flex;flex-direction:column;}
.Start .RoundedRectangle8{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#39444a;width:280px;margin-left:auto;margin-right:auto;min-height:265px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 12px 4px 44px 54px 26px 18px 28px 33px minmax(0,1fr);grid-template-rows:29px minmax(1px, auto) minmax(11px, auto) 18px minmax(12px, auto) 17px minmax(1px, auto) minmax(1px, auto) minmax(10px, auto) 1px 1fr;}
.Start .Label91{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;z-index:117;}
.Start .Group_20{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:118;display:flex;flex-direction:column;}
.Start .Circle35{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle36{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image24{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label92{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:9;grid-row-start:5;grid-row-end:6;z-index:122;}
.Start .Label93{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:8;grid-row-end:10;z-index:123;}
.Start .Group_21{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:10;z-index:124;display:flex;flex-direction:column;}
.Start .Circle37{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;min-height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle38{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;min-height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image25{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label94{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:9;grid-row-end:11;z-index:128;}
.Start .Label95{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:9;grid-row-end:11;z-index:129;}
.Start .Label96{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:3;grid-row-end:4;z-index:130;}
.Start .Label97{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:3;grid-row-end:4;z-index:131;}
.Start .Card_2{border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:3;grid-row-end:5;z-index:132;display:flex;flex-direction:column;}
.Start .Image34{width:280px;margin-left:auto;margin-right:auto;min-height:120px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 39px minmax(0,1fr) 82px minmax(0,1fr) 26px 3px 12px 23px 41px minmax(0,1fr);grid-template-rows:18px minmax(11px, auto) 2px minmax(10px, auto) minmax(1px, auto) 12px minmax(11px, auto) 11px minmax(1px, auto) 10px 2px minmax(11px, auto) 1fr;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aOQ1OFdb2wvmHTAIYpnwIuuAOB9h7cmnZN0BCYxNfuyV5vWupClMrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label11{color:#ffffff;text-align:center;font-family:Roboto, " sans-serif";font-size:36px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:5;grid-row-end:10;z-index:134;}
.Start .Circle2{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:13;z-index:135;display:flex;flex-direction:column;}
.Start .Circle3{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:76px;margin-left:auto;margin-right:auto;min-height:76px;margin-top:3px;display:flex;flex-direction:column;}
.Start .Image7{width:68px;margin-left:auto;margin-right:auto;height:68px;margin-top:4px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label12{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:2;grid-row-end:3;z-index:136;}
.Start .Label13{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:4;grid-row-end:6;z-index:137;}
.Start .Label14{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:9;grid-row-end:11;z-index:138;}
.Start .Label15{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:12;grid-row-end:13;z-index:139;}
.Start .Label16{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:7;grid-row-end:8;z-index:140;}
.Start .Label17{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:11;grid-row-start:9;grid-row-end:11;z-index:141;}
.Start .Label18{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:11;grid-row-start:12;grid-row-end:13;z-index:142;}
.Start .Label19{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:8;grid-column-end:11;grid-row-start:7;grid-row-end:8;z-index:143;}
.Start .Card_1_bottom{border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:8;grid-row-end:10;z-index:146;display:flex;flex-direction:column;}
.Start .RoundedRectangle{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#39444a;width:280px;margin-left:auto;margin-right:auto;height:265px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 12px 4px 44px 54px 26px 18px 28px 33px minmax(0,1fr);grid-template-rows:29px minmax(1px, auto) 11px 18px 12px 17px minmax(1px, auto) 1px 10px 1px 11px minmax(1px, auto) 11px 1fr;}
.Start .Label57{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;z-index:148;}
.Start .Group_11{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:149;display:flex;flex-direction:column;}
.Start .Circle20_131{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle20{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image16{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label57_121{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:9;grid-row-start:5;grid-row-end:6;z-index:153;}
.Start .Label58_135{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:8;grid-row-end:10;z-index:154;}
.Start .Group_15{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:10;z-index:155;display:flex;flex-direction:column;}
.Start .Circle20_160{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle20_159{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image16_161{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label58{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:9;grid-row-end:11;z-index:159;}
.Start .Label59{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:9;grid-row-end:11;z-index:160;}
.Start .Label60{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:3;grid-row-end:4;z-index:161;}
.Start .Label61{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:3;grid-row-end:4;z-index:162;}
.Start .Label63{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:13;grid-row-end:14;z-index:163;}
.Start .Label63_127{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:13;grid-row-end:14;z-index:164;}
.Start .Label66{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:13;grid-row-end:14;z-index:165;}
.Start .Group_16{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:12;grid-row-end:14;z-index:166;display:flex;flex-direction:column;}
.Start .Circle20_134{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle20_133{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image16_132{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aQtGBelHc6VxmiQmdOz4xdeCXskO837xJHCPFaGpbEByyRXMyEiGrK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Card_1_Top{border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:6;grid-row-end:7;z-index:170;display:flex;flex-direction:column;}
.Start .RoundedRectangle9{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid transparent;border-radius:10px;background-color:#39444a;width:280px;margin-left:auto;margin-right:auto;height:265px;margin-top:0px;display:grid;grid-template-columns:minmax(0,1fr) 12px 4px 44px 54px 26px 18px 28px 33px minmax(0,1fr);grid-template-rows:29px minmax(1px, auto) 11px 18px 12px 17px minmax(1px, auto) 1px 10px 1px 1fr;}
.Start .Group_6{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:172;display:flex;flex-direction:column;}
.Start .Circle16{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#a8d324;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle17{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image14{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Group_7{border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:10;z-index:176;display:flex;flex-direction:column;}
.Start .Circle18{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#cc0000;width:12px;margin-left:auto;margin-right:auto;height:12px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle19{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;border:0px solid #333333;border-radius:400px;background-color:#ffffff;width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:2px;display:flex;flex-direction:column;}
.Start .Image15{width:8px;margin-left:auto;margin-right:auto;height:8px;margin-top:0px;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aCXrBUuuR6Jzg7IFcNLzNXyTDANM6WKTlWayOxIPndvDAFRGyj0bqK.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Label52{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;z-index:180;}
.Start .Label53{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:9;grid-row-start:5;grid-row-end:6;z-index:181;}
.Start .Label54{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:8;grid-row-end:11;z-index:182;}
.Start .Label55{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:9;grid-row-end:11;z-index:183;}
.Start .Label56{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:9;grid-row-end:11;z-index:184;}
.Start .Label64{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:7;grid-column-end:10;grid-row-start:3;grid-row-end:4;z-index:185;}
.Start .Label65{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:8;grid-row-start:3;grid-row-end:4;z-index:186;}
.Start .Card_1{border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:5;z-index:187;display:flex;flex-direction:column;}

.Start .Label2{color:#ffffff;text-align:center;font-family:Roboto, " sans-serif";font-size:36px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:2;grid-column-end:3;grid-row-start:5;grid-row-end:9;z-index:189;}
.Start .Label3{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:2;grid-row-end:3;z-index:190;}
.Start .Label4{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:4;grid-row-end:5;z-index:191;}
.Start .Label5{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:8;grid-row-end:10;z-index:192;}
.Start .Label6{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:10;grid-row-start:11;grid-row-end:12;z-index:193;}
.Start .Label7{color:#ffffff;text-align:left;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:6;grid-column-end:7;grid-row-start:6;grid-row-end:7;z-index:194;}
.Start .Label8{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:11;grid-row-start:8;grid-row-end:10;z-index:195;}
.Start .Label9{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;font-weight:bold;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:9;grid-column-end:11;grid-row-start:11;grid-row-end:12;z-index:196;}
.Start .Label10{color:#ffffff;text-align:right;font-family:Roboto, " sans-serif";font-size:10px;letter-spacing:0px;line-height:1;border:0px solid transparent;grid-column-start:8;grid-column-end:11;grid-row-start:6;grid-row-end:7;z-index:197;}
.Start .Group_88{border:0px solid transparent;grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:12;z-index:198;display:flex;flex-direction:column;}
.Start .Circle{border:0px solid transparent;width:82px;margin-left:auto;margin-right:auto;height:82px;margin-top:0px;display:flex;flex-direction:column;}
.Start .Circle1{border:0px solid transparent;width:76px;margin-left:auto;margin-right:auto;height:76px;margin-top:3px;display:flex;flex-direction:column;}
.Start .Image6{width:68px;margin-left:auto;margin-right:auto;height:68px;margin-top:4px;border:0px solid transparent;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10aYdfc3zR9P21mee6ZPFy9zexI1VeT2ZBmsFN8aLg1Bg738hOJqF2e2.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
.Start .Leaderboardtitleimage{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:4;z-index:202;border:0px solid #333333;background-image:url(https://quant-ux.com/rest/images/a2aa10aF3wiUWs0bUPvP4HmiGrazOZFaTsw02DxbsLLjXxlHQNfdjO9FEOeS//645a61d103e7a20038ad3986/a2aa10ar0unMK5ohJIIjXYwbZjgseSkWZcgxgV9syS7A7Jdun7acABNVdRgy.png);background-size:100%;background-position:0px 0px;background-repeat:no-repeat;}
div{margin:0px;}
/*! CSS Used fontfaces */
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');unicode-range:U+1F00-1FFF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');unicode-range:U+0370-03FF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}

</style>