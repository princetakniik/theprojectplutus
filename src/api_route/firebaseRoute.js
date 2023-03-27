const { createUser } = require("../api/controller/firebaseController")

module.exports = (app) => {
    app.post('/createUser',(req,res) =>createUser (req,res));
}