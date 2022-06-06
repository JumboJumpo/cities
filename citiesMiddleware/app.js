var express = require('express');
const https = require('https');

const port    =  3000
const YELP_API_KEY = 'XgJtenuBLN5Km4WUi7JJpimfFHxkc2kNj4HqFBQlN8FZFqep7tv06eyCNra0x7uuRt6tso17Giw67B97pga6q9NP5By2_2L0aQ54e-DMn54xhpQgIuMw6T6lf_GRYnYx'



var app = express();


 app.use('/api/yelp', (req, res) => {
   console.log( 'Req :',req.query.location)
   https.get(`https://api.yelp.com/v3/businesses/search?location=${req.query.location}`,{
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
   }, (resp) => {
     let data = '';
     resp.on('data', (chunk) => {
       data += chunk;
     })
     resp.on('end', () => {
       res.send(data);
     })
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  })

})


app.listen( port ,
  () => console.log(`Expresso on Port ${ port } START. Ctrl + C to Stop `) )
