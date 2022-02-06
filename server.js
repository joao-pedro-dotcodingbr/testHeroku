var  Sniffr  = require("sniffr") ; 
const UserAgent = require("user-agents")
const userAgent = new UserAgent();
var  s  = new Sniffr(); 
s.sniff(userAgent.toString())

const express = require('express')
const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    try {
     
        res.status(200).json(s.os)
    } catch (error) {
        next(error)
    }
})

app.listen(process.env.PORT || 3000, ()=>{
})


