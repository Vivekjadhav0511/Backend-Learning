const express = require('express')
require('dotenv').config()
const app = express()
// const port = 3000

app.get('/', (req, res) => {   /* Home Route waha Par Listen Karo, Agar waha Koi Request Aati hai Ek Callback dege ( req.res) 
                               agar Wha koi Request Aati hai to ham waha par ek response dege ("Hello world") */
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("vivekjadhav555")
})

app.get("/login", (req, res) => {
    res.send("<h1> Please Login Here <h1/> ")
})

app.get("/youtube",(req,res)=>{
    res.send(" Youtube ")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})