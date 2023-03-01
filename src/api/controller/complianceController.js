const { compliance } = require("../../config/dbConnection");

const createCompliance = async (req, res) => {
  console.log("api data...", req.body);
  const { ...rest } = req.body;
  try {
    const dataInsert = await compliance.create(req.body);
    res
      .status(200)
      .json({ msg: "compliance insert data successfully", data: dataInsert });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `compliance not create`, err });
  }
};

const getCompliance = async (req, res) => {
  try {
    const getData = await compliance.findAll({
      where: {
        isDeleate: "false",
      },
    });
    res
      .status(200)
      .json({ msg: "compliance data get successfully", data: getData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `compliance data not get`, err });
  }
};

const getByIdCompliance = async (req, res) => {
  try {
    const getById = await compliance.findOne({
      where: {
        id: req.params.id,
        isDeleate: "false",
      },
    });
    res
      .status(200)
      .json({ msg: "compliance data get by id successfully", data: getById });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `compliance not get by id`, err });
  }
};

const updateCompliance = async (req, res) => {
  console.log("api data ...", req.body);
  try {
    const id = req.params.id;
    const dataUpdate = await compliance.update(req.body, {
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ msg: "compliance data update successfully", data: dataUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `compliance not update`, err });
  }
};

const deleteCompliance = async (req, res) => {
  try {
    const data={isDeleate:'true'}
    const id=req.params.id
    const datadelete = await compliance.update(data,{
        where:{
            id
        }
    })
    res.status(200).json({ msg: "compliance data delete successfully", data:datadelete });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `compliance not delete`, err });
  }
};

module.exports = {
  createCompliance,
  getCompliance,
  getByIdCompliance,
  updateCompliance,
  deleteCompliance,
};
