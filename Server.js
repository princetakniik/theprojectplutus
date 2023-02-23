const express=require('express');
require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const db=require('./src/config/dbConnection')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port =process.env.PORT||5000;
require('./src/api_route/userRoute')(app)
app.get('/',(req,res)=>{
    res.send('Hello plutos')
})
app.listen(port,()=>{
    console.log(`server is connected ${port}`);
})