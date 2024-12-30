
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send("Hello Twitter")
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