
const agentExpress = require('express-useragent')
const express = require('express')
const app = express();
app.use(express.json());
app.use(agentExpress.express());

app.get('/', (req, res, next) => {
    try {
      const result ={
            android: req.useragent.isAndroid,
            ois: req.useragent.isiPhone,
            windows: req.useragent.isWindows,
        }
       return res.status(200).json({message: 'Dados retornados', result})
    } catch (error) {
        next(error)
    }
})

app.listen(process.env.PORT || 3000, ()=>{
})


