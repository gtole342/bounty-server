const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))

app.get('*', (req,res) => {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 8080)