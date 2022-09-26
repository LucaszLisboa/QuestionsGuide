const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
require('dotenv').config()

//Database
connection.authenticate()
.then(() => {
  console.log('Connection made to the database.!')
}).catch((error) => {
  console.log(error)
})

const port = process.env.PORT

//Express used the EJS how view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
  let title = req.body.title
  let description = req.body.description
  res.send(
    'Formulário recebido com sucesso! Título: ' +
      title +
      ' Descrição: ' +
      description
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
