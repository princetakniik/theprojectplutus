const { user } = require("../../config/dbConnection");

const getAllClient = async (req, res) => {
  try {
    const getData = await user.findAll({
        attributes: ['id','firstName','lastName'],
      where: {
        role: 'Admin'
      },
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
        attributes: ['firstName','lastName'],
      where: {
        id:req.params.id,
        role: 'Admin'
      },
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
