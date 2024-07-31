
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

import express from 'express'  // Module js 

// require('dotenv').config()
import 'dotenv/config'

const app = express()

// app.get("/", (req, res) => {
//     res.send("Hello Backend From server.js")
// })

/*  Get A list of 5 Jokes */

app.get("/api/jokes",(req , res)=>{
     const jokes = [
        {
            id:1,
            title: "First Joke",
            content: " this is Joke"
        },
        {
            id:2,
            title: "First Joke",
            content: " this is Joke"
        },
        {
            id:3,
            title: "First Joke",
            content: " this is Joke"
        },
        {
            id:4,
            title: "First Joke",
            content: " this is Joke"
        }
     ]

     res.send(jokes)

})


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`port is ready to serve on ${port}`))