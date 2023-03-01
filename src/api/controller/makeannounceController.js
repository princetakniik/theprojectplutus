const { makeannounce } = require("../../config/dbConnection");

const createMakeannounce = async (req, res) => {
    console.log('api data...',req.body);
  try {
    const dataInsert = await makeannounce.create(req.body);
    res.status(200).json({ msg: "Insert makeAnnounce data", data:dataInsert});
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "not insert makeAccounce data", err });
  }
};

const getMakeannounce = async (req, res) => {
    try {
        const dataGet = await makeannounce.findAll({
            where:{
                isDeleate: "false",
            }
        })
      res.status(200).json({ msg: "get all makeAnnounce data", data:dataGet });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "not get makeAnnounce data", err });
    }
  };

  const getByIdMakeannounce = async (req, res) => {
    try {
        const dataGetById = await makeannounce.findOne({
            where:{
                id: req.params.id,
                isDeleate: "false",
            }
        })
      res.status(200).json({ msg: "get data by id makeAnnounce", data:dataGetById });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "not get data by id makeAnnounce", err });
    }
  };

  const upateMakeannounce = async (req, res) => {
    console.log('api data...',req.body)
    try {
        const data=req.body
        const id=req.params.id
        const dataUpdate = await makeannounce.update(data,{
            where:{
                id
            }
        })
      res.status(200).json({ msg: "data update by id successfully", data:dataUpdate });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "data not update by id", err });
    }
  };

  const deleteMakeannounce = async (req, res) => {
    const data ={isDeleate:'true'}
    const id=req.params.id
    try {
        const dataDelete = await makeannounce.update(data,{
            where:{
                id
            }
        })
      res.status(200).json({ msg: "makeAnnounce data delete successfully", data:dataDelete });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "makeAnnounce data not delete", err });
    }
  };

  module.exports ={
    createMakeannounce,
    getMakeannounce,
    getByIdMakeannounce,
    upateMakeannounce,
    deleteMakeannounce
  }