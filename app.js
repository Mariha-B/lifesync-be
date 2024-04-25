const express = require('express');
require('dotenv').config();
const { connectToDb, getDb } = require('./db');
const { PORT } = process.env;
const app = express();

app.use(express.json());

let db

connectToDb((err)=> {
    if(!err){
        app.listen(PORT, ()=>{
            console.log('app listening on port 9090');
        })
        db = getDb();
    }
})

app.get('/', (req, res) => {

    res.send({msg: "Welcome to lifeSync API"})
})