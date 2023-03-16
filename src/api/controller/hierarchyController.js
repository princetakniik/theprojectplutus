const { hierarchy } = require("../../config/dbConnection");

const CreateHierarchy = async (req, res) => {
    console.log("hierarchy api data", req.body);
    try {
      const hierarchyData = await hierarchy.create(req.body);
      res.send({ msg: "hierarchy data successfully inserted", data: hierarchyData });
    } catch (err) {
      console.log(err);
      res.send({ msg: "not created hierarchy", err });
    }
  };

  const getHierarchy = async (req,res) => {
try{
    const hierarchyData = await hierarchy.findAll({
        where:{
          isDelete:'false'
        }
    });
    res.send({msg:'get hierarchy data successfully',data:hierarchyData})
}catch(err){
    console.log(err);
    res.send({msg:'not data found',err})
}
  }

  const getByIdHierarchy = async (req,res) => {
try{
    const hierarchyData = await hierarchy.findOne({
        where:{
            id: req.params.id,
            isDelete:'false'
        }
    });
    res.send({msg:'get data by id successfully',data:hierarchyData})
}catch(err){
    console.log(err);
    res.send({msg:'get data not found by id ',err})
}
  }

  const updateHierarchy = async (req,res) => {
    console.log("Hierarchy api data", req.body);
try{
    const hierarchyData = await hierarchy.update(req.body,{
        where:{
            id: req.params.id,
        }
    })
res.send({msg:'update data successfully',data:hierarchyData})
}catch(err){
    console.log(err);
    res.send({msg:'not update data',err})
}
  }

  const deleteHierarchy = async (req,res) => {
try{
    const data={isDelete:true}
    const id=req.params.id
const hierarchyData = await hierarchy.update(data,{
    where: {
      id
    },
  });
res.send({msg:'delete data successfully',data:hierarchyData})
}catch(err){
    console.log(err);
    res.send({msg:'not delete data',err})
}
  }

  module.exports = {
    CreateHierarchy,
    updateHierarchy,
    getHierarchy,
    getByIdHierarchy,
    deleteHierarchy
  }