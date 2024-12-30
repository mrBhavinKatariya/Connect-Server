
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


const gitHubData = 
{
  "login": "mrBhavinKatariya",
  "id": 189523132,
  "node_id": "U_kgDOC0vkvA",
  "avatar_url": "https://avatars.githubusercontent.com/u/189523132?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mrBhavinKatariya",
  "html_url": "https://github.com/mrBhavinKatariya",
  "followers_url": "https://api.github.com/users/mrBhavinKatariya/followers",
  "following_url": "https://api.github.com/users/mrBhavinKatariya/following{/other_user}",
  "gists_url": "https://api.github.com/users/mrBhavinKatariya/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mrBhavinKatariya/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mrBhavinKatariya/subscriptions",
  "organizations_url": "https://api.github.com/users/mrBhavinKatariya/orgs",
  "repos_url": "https://api.github.com/users/mrBhavinKatariya/repos",
  "events_url": "https://api.github.com/users/mrBhavinKatariya/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mrBhavinKatariya/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Bhavin Katariya",
  "company": null,
  "blog": "",
  "location": "surat",
  "email": null,
  "hireable": null,
  "bio": "👋 Hi, I’m Bhavin Katariya 👀 I’m interested in mern stack 📫 How to reach Email : mr.bhavin009@gmail.com",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-11-24T11:59:49Z",
  "updated_at": "2024-12-30T05:39:34Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send("Hello Twitter")
})

app.get("/github", (req,res) => {
  res.json({gitHubData})


})


app.get("/login", (req, res) => {
  res.send('<h1>Please Login</h1>')
})

app.get("/signup", (req, res) => { 
  res.send("Please SIgn Up");

})
  app.listen(process.env.PORT, () => {
  console.log(` ${port}`)
})