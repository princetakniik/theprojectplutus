const { directordetails } = require("../../config/dbConnection");

const CreateDirectors = async (req, res) => {
  console.log("directors api data", req.body);
  try {
    const directorsData = await directordetails.create(req.body);
    res.send({
      msg: "directorsData data successfully inserted",
      data: directorsData,
    });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not created directorsData", err });
  }
};

const getDirectors = async (req, res) => {
  try {
    const directorsData = await directordetails.findAll({
      where: {
        isDelete: "false",
      },
    });
    res.send({ msg: "get data successfully directors", data: directorsData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not details get directors data", err });
  }
};

const getByIdDirectors = async (req, res) => {
  try {
    const directorsData = await directordetails.findOne({
      where: {
        id: req.params.id,
        isDelete: "false",
      },
    });
    res.send({
      msg: "get data by id successfully directors",
      data: directorsData,
    });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not get data by id director", err });
  }
};

const updateDirectors = async (req, res) => {
  console.log("directors api data", req.body);
  try {
    const directorsData = await directordetails.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send({ msg: "update data successfully director", data: directorsData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not update data directors", err });
  }
};

const deleteDirectors = async (req, res) => {
  try {
    const data = { isDelete: true };
    const id = req.params.id;
    const directorsData = await directordetails.update(data, {
      where: {
        id,
      },
    });
    res.send({ msg: "delete data director", data: directorsData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not delete data directors", err });
  }
};

module.exports = {
  CreateDirectors,
  getDirectors,
  getByIdDirectors,
  updateDirectors,
  deleteDirectors,
};
