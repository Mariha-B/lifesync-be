const express = require('express');
const User = require('./models/User'); 

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to lifeSync API' });
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); 
    res.json(users); 
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
});

//Error Handling
app.all("*", (req, res) => {
    res.status(404).send({ msg: "Invalid Endpoint" });
  });
  
module.exports = app;