const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

//Express used the EJS how view engine
app.set("view engine", "ejs")

app.get('/:nome/:lang', (req, res) => {
  let nome = req.params.nome
  let lang = req.params.lang

  let showMsg = false

  res.render('index', {
    nome: nome,
    lang: lang,
    empresa: "Pado Labs",
    inscritos: 17,
    msg: showMsg
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
