const express = require("express");
const cors = require('cors');
const loginRouter = require('./routes/loginRouter')
const pokemonRouter =  require('./routes/pokemonRouter');
const usersRouter = require('./routes/usersRouter');
require('dotenv').config()
const connectToDatabase = require('./db/db')

const app = express();

app.use(express.json());
app.use(cors());
connectToDatabase();

app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/pokemon', pokemonRouter);

app.listen(3000, () => {
    console.log("server is running http://localhost:3000");
  });

  module.exports = app;