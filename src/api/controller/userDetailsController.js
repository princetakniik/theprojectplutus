const userdetails = require("../../config/dbConnection");

const userDetails = async (req, res) => {
  try {
    const userData = await userdetails.create(req.body);
    console.log(userData);
    res.send({ msg: "user data successfully created", data: userData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "user details not created" });
  }
};

module.exports = {
  userDetails,
};
