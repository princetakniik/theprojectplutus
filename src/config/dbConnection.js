const {Sequelize,DataTypes} = require('sequelize')
const sequelize =new Sequelize('plutos','root','root',{
    port:3306,
    host:'localhost',
    dialect: 'mysql',
    logging: false
})

try{
sequelize.sync().then(()=>{
    console.log('db is connected');
})
}catch(err){
    console.log('db is not connected');
}
//
const db={}
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.user=require('../model/userModel')(sequelize,sequelize,DataTypes);
module.exports = db;