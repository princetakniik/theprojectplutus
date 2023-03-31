const {userdetails} = require("../../config/dbConnection");

const userDetails = async (req, res) => {
  console.log('api....',req.body);
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
