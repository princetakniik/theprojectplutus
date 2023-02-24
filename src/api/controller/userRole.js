const { user } = require("../config/dbConnection");

const role = async (req, res) => {
  try {
    const data = await user.create(req.body);
  } catch (err) {
    console.log(err);
  }
};

module.exports ={
    role
}