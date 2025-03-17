const express = require("express");
const loginRouter = require('./routes/loginRouter')
const pokemonRouter =  require('./routes/pokemonRouter');
const usersRouter = require('./routes/usersRouter');
require('dotenv').config()
const connectToDatabase = require('./db/db')

const app = express();

app.use(express.json());
connectToDatabase();

app.use('/api', loginRouter);
app.use('/api', usersRouter);
app.use('/pk', pokemonRouter);

app.listen(3000, () => {
    console.log("server is running http://localhost:3000");
  });

  module.exports = app;