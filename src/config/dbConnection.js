const mysql = require('mysql');
const {userDetails} =require('../api/controller/userDetailsController')
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "testsql"
});
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('db connected as id ' + connection.threadId);
  });

  module.exports =connection;
const {Sequelize,DataTypes,QueryTypes} = require('sequelize')
const sequelize =new Sequelize('plutos','root','root',{
    port:3306,
    dialect: 'mysql',
    host: "localhost",
    logging: false
})
const db={}
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.user=require('../model/userModel')(sequelize,Sequelize,DataTypes);
db.userdetails=require('../model/userDetailsModel')(sequelize,Sequelize,DataTypes)
db.lawOfAmendment=require('../model/lawOfAmendmentModel')(sequelize,Sequelize,DataTypes);
db.hierarchy = require('../model/herarchyModel')(sequelize,Sequelize,DataTypes);
db.directordetails =require('../model/DirectorModel')(sequelize,Sequelize,DataTypes);
db.compliance = require ('../model/ComplianceModel')(sequelize,Sequelize,DataTypes);
//Admin
db.makeannounce = require('../model/makeAnnouncementModel')(sequelize,Sequelize,DataTypes);
db.publishannounce = require('../model/publishAnnouncementModel')(sequelize,Sequelize,DataTypes);
//Assine Admin User Employees
db.assineuseremployee =require('../model/assineUserEmpModel')(sequelize,Sequelize,DataTypes);
db.issueemp =require('../model/IssueEmpModel')(sequelize,Sequelize,DataTypes);
module.exports = db;



module.exports = db;


