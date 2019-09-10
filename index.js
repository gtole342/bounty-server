const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))

app.use('/v1/bounties', require('./controllers/v1/bounties'))

app.get('*', (req,res) => {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 8080)