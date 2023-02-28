const { CreateDirectors, getDirectors, getByIdDirectors, updateDirectors, deleteDirectors } = require("../api/controller/DirectorController")

module.exports = (app)=>{
app.post('/CreateDirectors',(req,res) => CreateDirectors (req,res));
app.get('/getDirectors',(req,res) => getDirectors (req,res));
app.get('/getByIdDirectors/:id',(req,res) =>getByIdDirectors (req,res));
app.put('/updateDirectors/:id',(req,res) => updateDirectors (req,res));
app.delete ('/deleteDirectors/:id',(req,res) => deleteDirectors (req,res));
}