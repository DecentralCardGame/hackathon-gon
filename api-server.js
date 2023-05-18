const https = require('https')
const fs = require('fs');
var express = require('express')
var cors = require('cors')
//require('dotenv').config();

var key = fs.readFileSync(__dirname + '/../certs/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/../certs/selfsigned.crt');
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
        console.log(data)

        if (JSON.parse(data) && JSON.parse(data).data && JSON.parse(data).data.tokens) {
            let dataRefined = {
                NFTs: JSON.parse(data).data.tokens.tokens
            }
            res.end( JSON.stringify(dataRefined) );
        }
        else
            res.end("data is crap: "+data)
    });
    });
    
    graphreq.write(data);
    graphreq.end();

})

var server = https.createServer(options, app).listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

