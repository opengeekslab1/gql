const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to mongodb!')
  })
  .catch(err => {
    console.log('Cannot connect to mongodb! ERROR:\n', err)
  });
