const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  ejs = require('ejs')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('yay!')
})

app.listen(process.env.PORT || 3000, () =>
  console.log('Server is running in port 3000.')
)
