var express = require("express");

var testrouter = express.Router();
testrouter.get("/",(req,res)=>{
    console.log(`Get Request asked ${req.url}`);
    res.send("Hello Nishanth");
})

module.exports = testrouter;
