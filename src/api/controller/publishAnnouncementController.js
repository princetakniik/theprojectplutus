const { publishannounce } = require("../../config/dbConnection");

const createPublishannounce = async (req, res) => {
    console.log('api data...',req.body);
  try {
    const dataInsert = await publishannounce.create(req.body);
    res.status(200).json({ msg: "Insert publishannounce data", data:dataInsert});
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "not insert publishannounce data", err });
  }
};

const getPublishannounce = async (req, res) => {
    try {
        const dataGet = await publishannounce.findAll({
            where:{
                isDeleate: "false",
            }
        })
      res.status(200).json({ msg: "get all publishannounce data", data:dataGet });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "not get publishannounce data", err });
    }
  };

  const getByIdPublishannounce = async (req, res) => {
    try {
        const dataGetById = await publishannounce.findOne({
            where:{
                id: req.params.id,
                isDeleate: "false",
            }
        })
      res.status(200).json({ msg: "get data by id publishannounce", data:dataGetById });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "not get data by id publishannounce", err });
    }
  };

  const upatePublishannounce = async (req, res) => {
    console.log('api data...',req.body)
    try {
        const data=req.body
        const id=req.params.id
        const dataUpdate = await publishannounce.update(data,{
            where:{
                id
            }
        })
      res.status(200).json({ msg: "publishannounce data update by id successfully", data:dataUpdate });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "publishannounce data not update by id", err });
    }
  };

  const deletePublishannounce = async (req, res) => {
    const data ={isDeleate:'true'}
    const id=req.params.id
    try {
        const dataDelete = await publishannounce.update(data,{
            where:{
                id
            }
        })
      res.status(200).json({ msg: "publishannounce data delete successfully", data:dataDelete });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "publishannounce data not delete", err });
    }
  };

  module.exports ={
    createPublishannounce,
    getPublishannounce,
    getByIdPublishannounce,
    upatePublishannounce,
    deletePublishannounce
  }