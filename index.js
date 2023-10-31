import 'dotenv/config'
import express from 'express'

const app = express()

app.use('/test', (req, res) => {
  console.log('Hello from the middleware')
  res.status(200).send('Success')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
