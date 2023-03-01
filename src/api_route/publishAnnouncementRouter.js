const { createPublishannounce, getPublishannounce, getByIdPublishannounce, upatePublishannounce, deletePublishannounce } = require("../api/controller/publishAnnouncementController")

module.exports = (app) => {
    app.post('/createPublishannounce',(req,res) =>createPublishannounce (req,res));
    app.get('/getPublishannounce',(req,res) => getPublishannounce (req,res));
    app.get('/getByIdPublishannounce/:id',(req,res) => getByIdPublishannounce (req,res));
    app.put('/upatePublishannounce/:id',(req,res) => upatePublishannounce (req,res));
    app.delete('/deletePublishannounce/:id',(req,res) =>deletePublishannounce (req,res))
}