const { user } = require("../../config/dbConnection");

const createUser = async (req, res) => {
  console.log("api data user by client ...", req.body);
  try {
    const insertData = await user.create(req.body);
    res.status(200).json({ msg: "Insert data by client", data: insertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Data not insert by client", err });
  }
};

const getUser = async (req, res) => {
  try {
    const getData = await user.findAll({
      where: {
        isDelete: "false",
        role:'User'
      },
    });
    res
      .status(200)
      .json({ msg: "data get user created by client..", data: getData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not get user ..", err });
  }
};

const getByIdUserDetail = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const getByIdData = await user.findOne({
      where: {
        email: rest.email,
        isDelete: "false",
      },
    });
    res
      .status(200)
      .json({
        msg: "data get by id user created by client..",
        data: getByIdData,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not get user ..", err });
  }
};

const updateUserDetails = async (req, res) => {
  console.log("api data update ....", req.body);
  const { ...rest } = req.body;
  const data = {
    email: rest.email,
    firstName: rest.firstName,
    lastName: rest.lastName,
    emailOtp: rest.emailOtp,
    password: rest.password,
    role: rest.role,
    phone: rest.phone,
    phoneOtp: rest.phoneOtp,
    roleEnum: rest.roleEnum,
    plainType: rest.plainType,
    startData: rest.startData,
    endDate: rest.endDate,
  };
  try {
    const updateData = await user.update(data, {
      where: {
        email: rest.Email,
      },
    });
    res
      .status(200)
      .json({ msg: "data update by id user created by client..", data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not get user ..", err });
  }
};

const deleteUserDetails = async (req, res) => {
  const email = req.body;
  const data = { isDelete: "true" };
  try {
    const deleteData = await user.update(data, {
      where: {
        email,
      },
    });
    res
      .status(200)
      .json({
        msg: "data delete by id user created by client..",
        data: deleteData,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not get user ..", err });
  }
};

module.exports = {
  createUser,
  getUser,
  getByIdUserDetail,
  updateUserDetails,
  deleteUserDetails,
};
