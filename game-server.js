const https = require('https')
const http = require('http')
const fs = require('fs');
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var R = require('ramda')
const path = require('path')
//require('dotenv').config();


var gameEngine = require('./src/game/engine.js')
var game = new gameEngine()
game.addChain("Stargaze")
game.addChain("Juno")
game.addChain("Iris")


/*
const cert = fs.readFileSync('/etc/letsencrypt/live/nftarena.cc/cert.pem');
const ca = fs.readFileSync('/etc/letsencrypt/live/nftarena.cc/chain.pem');
const key = fs.readFileSync('/etc/letsencrypt/live/nftarena.cc/privkey.pem');
var options = {
  key: key,
  cert: cert
};
*/ var options = {}

var app = express()

app.use(express.static(path.resolve(__dirname, './dist')))
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.options('*', cors())
app.options(options)

// routes
app.get('/stargaze/:address', function (req, res) {
    const data = JSON.stringify({
        query: `query Tokens {
          tokens(
            ownerAddr: "`+req.params.address+`"
          ) {
            tokens {
              collectionAddr
              tokenId
              name
              description
              imageUrl
            }
          }
        }`,
      })
      
    const options = {
    hostname: 'constellations-api.mainnet.stargaze-apis.com',
    path: '/graphql',
    port: 443,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'User-Agent': 'Node',
      },
    }
      
    const graphreq = https.request(options, (graphres) => {
    let data = '';
    
    graphres.on('data', (d) => {
        data += d;
    });
    graphres.on('end', () => {
        if (JSON.parse(data) && JSON.parse(data).data && JSON.parse(data).data.tokens) {
            let dataRefined = JSON.parse(data).data.tokens.tokens

            dataRefined.forEach((nft) => {
                nft.imageUrl = R.replace('ipfs://', 'https://ipfs.io/ipfs/', nft.imageUrl)
            })

            res.end(JSON.stringify(dataRefined))
        }
        else
            res.end("data is crap: "+data)
      })
    })
    graphreq.write(data)
    graphreq.end()
})
app.get('/omniflix/:address', function (req, res) {
  https.get('https://data-api.omniflix.studio/nfts?owner='+req.params.address, (omnires) => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  omnires.on('data', chunk => {
    data.push(chunk);
  });

  omnires.on('end', () => {
    const dataObj = JSON.parse(Buffer.concat(data).toString());
    console.log('Response ended: ', dataObj);

    res.end(JSON.stringify(dataObj))
  });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
})
app.get('/uptick/:address', function (req, res) {
  https.get('https://uptick-rest.brocha.in/uptick/collection/nfts?owner='+req.params.address, (uptickres) => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  uptickres.on('data', chunk => {
    data.push(chunk);
  });

  uptickres.on('end', () => {
    const dataObj = JSON.parse(Buffer.concat(data).toString());
    console.log('Response ended: ', dataObj);

    res.end(JSON.stringify(dataObj))
  });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
})

app.get('/state', function(req, res) {
  res.send(game)
})
app.get('/chains', function(req, res) {
  res.send(game.chains)
})
app.get('/nfts', function(req, res) {
  res.send(game.NFTs)
})
app.get('/players', function(req, res) {
  res.send(game.players)
})
app.get('/fight', function(req, res) {
  res.send(game.fight())
})
app.post('/addNFT', (req, res) => {
  let data = req.body
  console.log(req.body)
  let result = game.addNFT(data.chainName, data.collection, data.tokenId, data.owner, data.NFTname, data.imageUrl, data.description)
  console.log("result:", result)
  if (result == 0) {
    res.send('Success. Data Received: ' + JSON.stringify(data));
  }
  else {
    res.send('FAIL with data: ' + JSON.stringify(data));
  }
})
app.post('/sendDefender', (req, res) => {
  let data = req.body;
  game.sendDefender(data.collection, data.tokenId, data.defendChain)
  if (result == 0) {
    res.send('Success. Data Received: ' + JSON.stringify(data));
  }
  else {
    res.send('FAIL with data: ' + JSON.stringify(data));
  }
})
app.post('/sendAttacker', (req, res) => {
  let data = req.body;
  game.sendDefender(data.collection, data.tokenId, data.attackChain)
  if (result == 0) {
    res.send('Success. Data Received: ' + JSON.stringify(data));
  }
  else {
    res.send('FAIL with data: ' + JSON.stringify(data));
  }
})

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);
const httpPort = 80
const httpsPort = 443

httpServer.listen(httpPort, () => {
        console.log('HTTP Server running on port '+httpPort);
});

httpsServer.listen(httpsPort, () => {
        console.log('HTTPS Server running on port '+httpsPort);
});