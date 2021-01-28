require("dotenv").config();
const { Client } = require('pg');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || process.env.APP_PORT;

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  
  client.connect();
  
  client.query('SELECT * FROM Persons;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });

app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('hello');
});

app.listen(port, () => {
    console.log("server running port:", port) // แสดงผล บน Console APP_PORT at 3000
});