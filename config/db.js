// Connect to DB
const mongoose = require('mongoose');

const url = 'mongodb://localhost/devconnecter';

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database connected on devconnecter')
}).catch(err => {
  console.log('Connection failed')
})