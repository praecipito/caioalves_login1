require('dotenv').config()
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const studentsRoutes = require('./routes/students.route')

app.use(bodyParser.json())

app.use('/students', studentsRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
