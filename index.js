const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

//Express used the EJS how view engine
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
