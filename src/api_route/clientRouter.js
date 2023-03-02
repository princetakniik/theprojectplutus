const { getAllClient, getClientByUser } = require("../api/controller/clientController")

module.exports =(app) => {
    app.get('/getAllClient',(req,res) => getAllClient (req,res));
    app.get('/getClientByUser/:id',(req,res) => getClientByUser (req,res));
}