const https = require('https')
const http = require('http')
const fs = require('fs');
var express = require('express')
var cors = require('cors')
var R = require('ramda')
//require('dotenv').config();

const cert = fs.readFileSync('/etc/letsencrypt/live/nftarena.cc/cert.pem');
const ca = fs.readFileSync('/etc/letsencrypt/live/nftarena.cc/chain.pem');
const key = fs.readFileSync('/etc/letsencrypt/live/nftarena.cc/privkey.pem');
var options = {
  key: key,
  cert: cert
};

var app = express()

app.use(cors())
app.options('*', cors())
app.options(options)

app.get('/stargaze/:address', function (req, res) {
    console.log(req.params.address)
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
      });
      
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
    };
      
    const graphreq = https.request(options, (graphres) => {
    let data = '';
    console.log(`statusCode: ${res.statusCode}`);
    
    graphres.on('data', (d) => {
        data += d;
    });
    graphres.on('end', () => {
        if (JSON.parse(data) && JSON.parse(data).data && JSON.parse(data).data.tokens) {
            let dataRefined = JSON.parse(data).data.tokens.tokens

            dataRefined.forEach((nft) => {
                nft.imageUrl = R.replace('ipfs://', 'https://ipfs.io/ipfs/', nft.imageUrl)
            })

		    dataRefined[0].testImg = "https://crowdcontrol.network/img/keplr-logo.4e707793.png"
		    console.log(dataRefined)
            res.end( JSON.stringify(dataRefined) );
        }
        else
            res.end("data is crap: "+data)
    });
    });
    
    graphreq.write(data);
    graphreq.end();

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
