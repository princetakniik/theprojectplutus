const { user } = require("../../config/dbConnection");

const getAllClient = async (req, res) => {
  try {
    const getData = await user.findAll({ 
      where: {
        role: "Admin",
      },
      attributes: ["id", "firstName", "lastName"],
    });
    res.status(200).json({ msg: "get all client details", data: getData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "not get data all client" });
  }
};

const getClientByUser = async (req, res) => {
  try {
    const getData = await user.findOne({
      where: {
        id: req.params.id,
        role: "Admin",
      },
      attributes: ["firstName", "lastName"],
    });
    res.status(200).json({ msg: "get all client details", data: getData });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllClient,
  getClientByUser,
};
