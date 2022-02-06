var  Sniffr  = require("sniffr") ; 
var os = require("os");
const express = require('express')
const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    try {
        var  s  = new Sniffr(); 
        res.status(200).json(os)
    } catch (error) {
        next(error)
    }
})

app.listen(process.env.PORT || 3000, ()=>{
})


