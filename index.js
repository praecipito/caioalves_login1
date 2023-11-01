require('dotenv').config()
const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()
const bodyParser = require('body-parser')
const studentsRoutes = require('./routes/students.route')

app.use(bodyParser.json())

const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "caioalves_login1",
      description: "API documentation",
      contact: {
        name: "Caio Alves",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
}

const swaggerDocs = swaggerJsdoc(swaggerOption)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/students', studentsRoutes)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000
}
app.listen(port, () => {
  console.log('Server is running on port 3000')
})
