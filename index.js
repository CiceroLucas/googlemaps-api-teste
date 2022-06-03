const express = require('express');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());
const port = 3000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`)
});

const db = require('./database/database')

app.post('/pontos', db.addPonto)
app.get('/getPonto', db.getPonto)
app.delete('/getPonto', db.removePonto)