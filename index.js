const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

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


app.get("/yt",(req,res)=>{
    res.send(" Youtube ")
})


const githubData = {
    "login": "Vivekjadhav0511",
    "id": 162805017,
    "node_id": "U_kgDOCbQ1GQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/162805017?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vivekjadhav0511",
    "html_url": "https://github.com/Vivekjadhav0511",
    "followers_url": "https://api.github.com/users/Vivekjadhav0511/followers",
    "following_url": "https://api.github.com/users/Vivekjadhav0511/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vivekjadhav0511/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vivekjadhav0511/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vivekjadhav0511/subscriptions",
    "organizations_url": "https://api.github.com/users/Vivekjadhav0511/orgs",
    "repos_url": "https://api.github.com/users/Vivekjadhav0511/repos",
    "events_url": "https://api.github.com/users/Vivekjadhav0511/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vivekjadhav0511/received_events",
    "type": "User",
    "site_admin": false,
    "name": "vivek jadhav",
    "company": null,
    "blog": "",
    "location": "mumbai ( India )",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "Mr_Vivek1105",
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 5,
    "created_at": "2024-03-09T12:18:03Z",
    "updated_at": "2024-07-29T12:29:26Z"
  }


app.get("/github",(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})