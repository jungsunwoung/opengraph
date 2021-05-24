const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const ogs = require("open-graph-scraper")

app.use(cors());

app.use(bodyParser.json());


app.post("/api",(req,res)=>{
    const text=req.body.params.code;
    console.log(text)
    const options={"url":text,"timeout":2000}
    ogs(options, (error, results, response) => {
      console.log('error:', error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
      console.log('results:', results); // This contains all of the Open Graph results
      let sendData  
      sendData={error:error,results:results}
      res.send(sendData)
    });
})
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})