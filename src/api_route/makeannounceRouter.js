
const { createMakeannounce, getMakeannounce, getByIdMakeannounce, upateMakeannounce, deleteMakeannounce } = require("../api/controller/makeannounceController");

module.exports = (app) => {
    app.post('/createMakeannounce',(req,res) => createMakeannounce (req,res));
    app.get('/getMakeannounce', (req,res) => getMakeannounce (req,res));
    app.get('/getByIdMakeannounce/:id',(req,res) => getByIdMakeannounce (req,res));
    app.put('/upateMakeannounce/:id',(req,res) => upateMakeannounce (req,res));
    app.delete('/deleteMakeannounce/:id',(req,res) => deleteMakeannounce (req,res));
}