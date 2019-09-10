let db = require('../../models')
let router = require('express').Router()

router.get('/', (req,res)=>{
  db.Bounty.find()
  .then(bounties =>{
    res.send(bounties)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({ message: 'Database asleep?'})
  })
})

router.get('/:id', (req,res)=>{
  res.send('STUB for GET /boutnies/:id')
})

router.post('/', (req,res)=>{
  db.Bounty.create(req.body)
  .then(bounty =>{
    res.status(201).send(bounty)
  })
  .catch( err => {
    console.log('Error while creating', err)
    res.status(500).send({ message: 'Server Error' })
  })
})

router.put('/:id', (req,res)=>{
  res.send('STUB for PUT /bounties/:id')
})

router.delete('/', (req,res)=>{
  res.send('STUB for DELETE /bounties')
})

router.delete('/:id', (req,res)=>{
  res.send('STUB for DELETE /bounties/:id')
})

router

module.exports = router