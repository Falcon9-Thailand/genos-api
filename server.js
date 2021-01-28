require("dotenv").config();
const { Client } = require('pg');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || process.env.APP_PORT;



app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  client.connect();
  

  app.get('/',(req,res)=>{
    client.query('SELECT * FROM Persons;', (err, result) => {
        if (err) throw err;
        res.send({data:result.rows});
        client.end();
      });
  })

  app.post('/create', async (req,res)=>{
    const body = req.body;
    await client.query('INSERT INTO Persons (personid, lastname, firstname, address, city) VALUES (?,?,?,?,?);',
    [body.personid,
    body.lastname,
    body.firstname,
    body.address,
    body.city
    ],
    (err,result,field)=>{
        if(err){
            res.status(403).send({error:"errors"});
        }
        res.send({
            status:"ok",
            msg:"success",
            data:result
        });
        client.end();
    });
  })

app.listen(port, () => {
    console.log("server running port:", port) // แสดงผล บน Console APP_PORT at 3000
});