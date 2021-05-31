const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3002;
const ogs = require("open-graph-scraper")
var opengraph = require('opengraph-io')({appId: '92813a8d-7ec4-4348-8849-cee098e11317'})
app.use(cors());

app.use(bodyParser.json());

app.get('/api', function (req, res) {
  console.log(req)
  var siteUrl = req.query["code"];
 
  opengraph.getSiteInfo(siteUrl, function(err, siteInfo){
    console.log('hey err', err);
    console.log('hey result', siteInfo);
    res.json(siteInfo);
  });
 
});
// app.post("/api",(req,res)=>{
//     const text=req.body.params.code;
//     console.log(text)
//     const options={"url":text,"timeout":2000}
//     ogs(options, (error, results, response) => {
//       console.log('error:', error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
//       console.log('results:', results); // This contains all of the Open Graph results
//       let sendData  
//       sendData={error:error,results:results}
//       res.send(sendData)
//     });
// })
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})