require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || process.env.APP_PORT;
const userRouter = require("./services/user/user.route");
app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello');
});

app.listen(port, () => {
    console.log("server running port:", process.env.APP_PORT) // แสดงผล บน Console APP_PORT at 3000
});