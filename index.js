const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Question = require('./database/models/Question')
require('dotenv').config()

//Database
connection
  .authenticate()
  .then(() => {
    console.log('Connection made to the database.!')
  })
  .catch(error => {
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
  Question.findAll({ raw: true, order:[
    ['id', 'DESC'] //DESC ordenando de forma decrescente pelo id
  ] }).then(questions => {
    res.render('index', {
      questions: questions
    })
  })
})

app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
  let title = req.body.title
  let description = req.body.description

  Question.create({
    title: title,
    description: description
  }).then(() => {
    res.redirect('/')
  })
})


app.get('/pergunta/:id', (req, res) => {  //procurando pergunta pelo id
  let id = req.params.id
  
  Question.findOne({
    where: { id: id }
  })
  .then(question => {
    if (question != undefined) {
      res.render('pergunta', {
        question: question
      })
    } else {
      res.redirect('/')
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
