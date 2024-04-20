
require('dotenv').config()
//console.log("Hello Backend");
const express = require('express')
const app = express()
const port = 3000
 

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin','*')
  res.send('Hello World!')
})
app.get('/login',(req,res) => {
  res.header('Access-Control-Allow-Origin','*')
    res.send('<h1>please login at our website</h11>')
})
app.get('/youtube',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*')
    res.send("Chai aur Code")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})