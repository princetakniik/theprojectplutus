const express=require('express');
const router = express.Router()
const cookieParser = require('cookie-parser')
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const db=require('./src/config/dbConnection')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  app.use('/', router)
const port =process.env.PORT||5000;
require('./src/api_route/userRoute')(app)
app.get('/',(req,res,next)=>{
   next()
})
app.listen(port,()=>{
    console.log(`server is connected ${port}`);
})