const express=require('express');
const router = express.Router();
const path = require('path');
const ejs=require('ejs')
const cookieParser = require('cookie-parser')
require('dotenv').config();
require('./src/middleware/fileUpload')
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
app.set("view engine", "ejs");
const db=require('./src/config/dbConnection')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use("/profile", express.static("upload"));
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  app.use('/', router)
const port =process.env.PORT||5000;
require('./Router')(app)
//require('./src/api_route/userRoute')(app)
require('./src/middleware/fileUpload')(app)
app.get('/',(req,res)=>{
  res.send('hello')
})
app.listen(port,()=>{
    console.log(`server is connected ${port}`);
})