const { user } = require("../../config/dbConnection");

const roleWiseGetDetails = async (req, res) => {
  const data = await user.findOne({
    where: {
      email: req.body.email,
    },
  });
  let details = [];
  if (data.role === "Admin") {
    const getDataAll = await user.findAll({
      attributes: ["role", "email"],
    });
    details.push(getDataAll);
    console.log("admin", getDataAll);
  } else if (data.role === "User") {
    const getDataAll = await user.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log("user", getDataAll);
    details.push(getDataAll);
  } else if (data.role === "Employee") {
    const getDataAll = await user.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log("emp", getDataAll);
    details.push(getDataAll);
  } else {
    const getDataAll = "id is not sufficient details";
    details.push(getDataAll);
    console.log("else", getDataAll);
  }
  res.send({ msg: "get data successfully", data: details });
};
module.exports = {
  roleWiseGetDetails,
};
