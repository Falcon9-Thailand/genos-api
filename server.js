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
        // client.end();
      });
  })

  app.post('/create', async (req,res)=>{
    const body = req.body;
    client.connect(
        (error)=>{
            if(error) throw new Error();
            try {
                const res = await client.query('INSERT INTO Persons (personid, lastname, firstname, address, city) VALUES (?,?,?,?,?)', [
                  parseInt(body.personid),
                `${body.lastname}`,
                    `${body.firstname}`,
                    `${body.address}`,
                    `${body.city}`
                ])
                res.send(res.rows[0])
                // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
              } catch (err) {
                console.log(err.stack)
              }
        }
    );
    

    // await client.query('INSERT INTO Persons (personid, lastname, firstname, address, city) VALUES (?,?,?,?,?);',
    // [],
    // (err,result,field)=>{
    //     if(err){
    //         console.error(err);
    //         res.status(403).send({error:err});
    //     }
    //     res.send({
    //         status:"ok",
    //         msg:"success",
    //         data:result
    //     });
        // client.end();
    });
//   })

app.listen(port, () => {
    console.log("server running port:", port) // แสดงผล บน Console APP_PORT at 3000
});