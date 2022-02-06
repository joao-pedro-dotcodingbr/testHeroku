var  Sniffr  = require("sniffr") ; 
const UserAgent = require("user-agents")
const userAgent = new UserAgent();
var  s  = new Sniffr(); 
s.sniff(userAgent.toString())
const agentExpress = require('express-useragent')
const express = require('express')
const app = express();
app.use(express.json());
app.use(agentExpress.express());

app.get('/', (req, res, next) => {
    try {
     
        res.status(200).json(req.useragent.isMobile)
    } catch (error) {
        next(error)
    }
})

app.listen(process.env.PORT || 3000, ()=>{
})


