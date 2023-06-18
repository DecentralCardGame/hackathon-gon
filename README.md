# ChainWars Game of NFTs Hackathon Contribution

## Description

ChainWars is cross-chain NFT game, where your NFTs from Uptick, Omniflix or Stargaze can fight against NFTs from other chains! The goal is to capture other chains, so if say Omniflix sends more NFTs attacking Stargaze than Stargaze has defenders the attack is succesful and Omniflix captures Stargaze. The users of Omniflix should then encourage other NFT holders to register their NFTs as fighters and help to defend!

The aim of this project is to motivate NFT holders to move their NFTs to other chains and fight over there. After a few weeks of working on this, we realized that we can make this work on the real mainnet of Stargaze, Omniflix and Uptick, so you can directly go to https://nftarena.cc and let your NFTs you currently hold fight! 

We had to cut down some features as we did not manage to build everything we had envisioned for this hackathon. In a final version it would be possible for NFTs to collect experience with each fight and level up. Then your NFT can set points into different attributes like Strength, Dexterity, Agility etc. from these attributes the performance in combat would be diced out.

Furthermore we wanted to implement doing IBC transactions of NFTs via Keplr Wallet, but the Problem here is mostly that the mainnets do not support that yet, but the testnet do not have the real NFTs. However implementing this, once the mainnets are ready is easy, since we have build everything with vue frontend and cosmos SDK rolls out a vue interface for doing blockchain transactions. 

Another feature we wanted to build was to generate battle reports with some AI like chatGPT, but the time was not sufficient to do that, unfortunately. All those unimplemented features make up our "what happens next" list.

## Technology used

 - Keplr Wallet
 - Uptick API
 - Stargaze API (graphQL)
 - Omniflix API
 - Node.js Server for serving the page and our game server
 - Vue 3.0

## Lessons learned

The most typical lesson for each hackathon is always the same: don't underestimate how long it will take until all APIs work. For all Chains, Uptick, Stargaze and Omniflix the documentation could be better, the developer experience is not the best. We had to go to the Discords of those projects and get more information. On all these discords we got help, Stargaze had a good documentation for their API but it was not easy to find, so we had to ask for it. 

Furthermore we tried out something new and crazy, a low/no code platform, Quant-ux (https://quant-ux.com/#/) and figma-low-code (https://www.figma.com/community/plugin/858477504263032980/Figma-Low-Code) were used. The basic idea is that our designer only uses that platform to create the whole page and the developer codes the backend for this. At first glance it looked very promising and we put together a great page, but then it turned out that too many things are not working properly and it is too early stage, so we had to give that up and code the page from fragments we got out of that. This gave us a crazy endgame crunch for this hackathon, a lot of sweat was produced, but now it feels great :D

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run production
```

## Acknowledgement

First of all we want to thank the Interchain Foundation for organizing such a great Hackathon. The Cosmos Ecosystem is our home at https://crowdcontrol.network/ already and the possibilities in this ecosystem are endless. 

Seeing the Interchain Foundation further supporting the evolution of IBC and ICS is something we see with great excitement. 

We also want to thank the helpful moderators and tech supporters at Uptick, Omniflix and Stargaze discord, who helped us getting further using their technology!

And even though we could not make real use of Quant-ux, we still want to thank Klaus Schäfers, who is developing this framework and helped us by fast fixing bugs we found in his low-code-platform. We see great potential in it and hope he keeps up the good work!
