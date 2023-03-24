const { lawOfAmendment } = require("../../config/dbConnection");

const CreateLawOfAmendment = async (req, res) => {
  console.log("lawOfAmendment api data", req.body);
  try {
    const lawData = await lawOfAmendment.create(req.body);
    res.send({ msg: "law data successfully inserted", data: lawData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not created lawOfAmendment", err });
  }
};

const getLawOfAmendment = async (req, res) => {
  try {
    const lawData = await lawOfAmendment.findAll({
      where: {
        isDelete: "false",
      },
    });
    res.send({ msg: "get data successfully", data: lawData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not get data lawOfAmendment", err });
  }
};

const getByIdLawOfAmendment = async (req, res) => {
  try {
    const lawData = await lawOfAmendment.findOne({
      where: {
        id: req.params.id,
        isDelete: "false",
      },
    });
    res.send({ msg: "get data By Id successfully", data: lawData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not get data by id lawOfAmendment", err });
  }
};

const updateLawOfAmendment = async (req, res) => {
  console.log("lawOfAmendment api data", req.body);
  try {
    const lawData = await lawOfAmendment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send({ msg: "update data successfully", data: lawData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not update data lawOfAmendment", err });
  }
};

const deleteLawOfAmendment = async (req, res) => {
  console.log("lawOfAmendment api data", req.params);
  try {
    const id = req.params.id;
    const data = { isDeleate: true };
    const lawData = await lawOfAmendment.update(data, {
      where: {
        id,
      },
    });
    res.send({ msg: "delete data successfully", data: lawData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not delete data lawOfAmendment", err });
  }
};

module.exports = {
  CreateLawOfAmendment,
  getLawOfAmendment,
  getByIdLawOfAmendment,
  updateLawOfAmendment,
  deleteLawOfAmendment,
};
