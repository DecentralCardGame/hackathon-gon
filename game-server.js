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
game.addChain("Omniflix")
game.addChain("Uptick")


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

function postRequest(options, data, callback) {
  const req = https.request(options, (res) => {
    let data = '';
    
    res.on('data', (d) => {
        data += d;
    });
    res.on('end', () => {
        callback(data)
      })
    })
  req.write(data)
  req.end()
}

function getRequest(route, callback) {
  return new Promise(function(resolve, reject) {
    https.get(route, (res) => {
      let data = [];
      console.log('Status Code:', res.statusCode);
  
      res.on('data', chunk => {
        data.push(chunk);
      });
  
      res.on('end', () => {
        resolve(callback(JSON.parse(Buffer.concat(data).toString())))
      })
    }).on('error', err => {
      console.log('Error: ', err.message);
      reject(err.message)
    })
  })
}

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
            let dataObj = JSON.parse(data).data.tokens.tokens

            dataObj.forEach((nft) => {
                nft.imageUrl = R.replace('ipfs://', 'https://ipfs.io/ipfs/', nft.imageUrl)
                game.addNFT("Stargaze", nft.collectionAddr, nft.tokenId, req.params.address, nft.name, nft.imageUrl, nft.description)
            })

            res.end(JSON.stringify(dataObj))
        }
        else
            res.end("data is crap: "+data)
      })
    })
    graphreq.write(data)
    graphreq.end()
})
app.get('/iris/:address', function (req, res) {
  const data = JSON.stringify({
    "pageSize": "20",
    "pageNumber": "1",
    "owner": "iaa1awpflkaj937pkn6ws5f048hhf7jwjg8feq85qh",
    "filterType": "0",
    "did": "iaa1awpflkaj937pkn6ws5f048hhf7jwjg8feq85qh",
    "authenticationAddress": "iaa1awpflkaj937pkn6ws5f048hhf7jwjg8feq85qh",
    "chainType": "IRIS_IRISHUB",
    "lang": "en",
    "mobileVersion": "1.3.2"
    })
    
  const options = {
  hostname: 'web.upticknft.com',
  path: '/uptickapi1/homepage/getMyTokenId.json',
  port: 443,
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'User-Agent': 'Node',
    },
  }

  const irisreq = https.request(options, (irisres) => {
  let data = '';

  irisres.on('data', (d) => {
      data += d;
  });
  irisres.on('end', () => {
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
  irisreq.write(data)
  irisreq.end()
})
app.get('/omniflix/:address', function (req, res) {
  https.get('https://data-api.omniflix.studio/nfts?owner='+req.params.address, (omnires) => {
  let data = [];
  console.log('Status Code:', res.statusCode);

  omnires.on('data', chunk => {
    data.push(chunk);
  });

  omnires.on('end', () => {
    const dataObj = JSON.parse(Buffer.concat(data).toString()).result.list;
    
    let resObj = R.map(nft => {
      return {
      "collectionAddr": nft.denom_id,
      "tokenId": nft.id,
      "name": nft.name,
      "description": nft.description,
      "imageUrl": R.replace('ipfs://', 'https://ipfs.io/ipfs/', nft.media_uri)
    }}, dataObj)
    
    console.log(resObj)
    R.map(x => {
      game.addNFT("Omniflix", x.collectionAddr, x.tokenId, req.params.address, x.name, x.imageUrl, x.description) 
    }, resObj)

    res.end(JSON.stringify(resObj))
  })
  }).on('error', err => {
    console.log('Error: ', err.message);
  })
})
app.get('/uptick/:address', function (req, res) {
  https.get('https://api.irishub-1.irisnet.org/irismod/nft/nfts?owner='+req.params.address, (uptickres) => {
  let data = [];

  uptickres.on('data', chunk => {
    data.push(chunk);
  });

  uptickres.on('end', () => {
    const dataObj = JSON.parse(Buffer.concat(data).toString()).owner.id_collections;
    console.log('Response ended: ', dataObj);

    let resObj = R.flatten(R.map(collection => {
      return R.map(token_id => {
        return getRequest('https://api.irishub-1.irisnet.org/irismod/nft/nfts/'+collection.denom_id+'/'+token_id, resNft => {
          return getRequest(resNft.nft.uri, resContent => {
            return {
              "collectionAddr": collection.denom_id,
              "tokenId": resNft.nft.id,
              "name": resNft.nft.name,
              "description": resContent.description,
              "imageUrl": resContent.image
            }
          })
        })
      }, collection.token_ids)
    }, dataObj))
    
    Promise.all(resObj).then((nfts) => {
      R.map(nft => {
        game.addNFT("Uptick", nft.collectionAddr, nft.tokenId, req.params.address, nft.name, nft.imageUrl, nft.description)
      }, nfts)
      res.end(JSON.stringify(nfts))
    })
  })
  }).on('error', err => {
    console.log('Error: ', err.message)
  })
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
/*
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
*/
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
