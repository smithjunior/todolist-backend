const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  return response.json({
    message: "Sucess"
  })
})

server.listen(3000)