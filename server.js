require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./config/connectdb');
app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {  
    res.send({success:"true"}) ;
 })


app.listen(process.env.PORT, () => {
    console.log("server running port:", process.env.DB_PORT) // แสดงผล บน Console APP_PORT at 3000
});