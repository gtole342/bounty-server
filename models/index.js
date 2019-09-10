let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports.Bounty = require('./bounty')