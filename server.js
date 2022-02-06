var  Sniffr  = require("sniffr") ; 
var  s  = new Sniffr(); 
const express = require('express')
const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    try {
        res.status(200).json(s.os.name)
    } catch (error) {
        next(error)
    }
})

app.listen(process.env.PORT || 3000, ()=>{
})


