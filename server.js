require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./config/connectdb');
const port = process.env.PORT || process.env.APP_PORT;
app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {   
    pool.query('SELECT * FROM test1',[],(error,result,fields)=>{
        if(error){
            res.statusCode(400).send({error:"errors"});
        }
        res.send({success:result});
    });
    
 })


app.listen(port, () => {
    console.log("server running port:", process.env.APP_PORT) // แสดงผล บน Console APP_PORT at 3000
});