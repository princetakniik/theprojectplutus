const express=require('express');
const router = express.Router();
const path = require('path');
const mysql = require('mysql');
const ejs=require('ejs')
const cookieParser = require('cookie-parser')
const config =require('./src/config/config')
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors:{
    origin:"*",
    methods:["GET","POST","PUT","DELETE"]
  }
});
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
const port =config.PORT||5000;
require('./src/api/constant/status')
require('./Router')(app)
require('./src/middleware/fileUpload')(app)

io.on('connection', (socket)=>{
  console.log('New user connected');
   //emit message from server to user
   socket.emit('newMessage', {
     from:'jen@mds',
     text:'hepppp',
     createdAt:123
   });
 
  // listen for message from user
  socket.on('createMessage', (newMessage)=>{
    console.log('newMessage', newMessage);
  });
  socket.on('disconnect', ()=>{
    console.log('disconnected from user');
  });
});

server.listen(port,()=>{
    console.log(`server is connected ${port}`);
})