const {
  createUser,
  getUser,
  getByIdUserDetail,
  updateUserDetails,
  deleteUserDetails,
} = require("../api/controller/addClientController");

module.exports = (app) => {
  app.post("/createUserClient", (req, res) => createUser(req, res));
  app.get("/getUserClient", (req, res) => getUser(req, res));
  app.get("/getByIdUserDetailClient", (req, res) =>
    getByIdUserDetail(req, res)
  );
  app.put("/updateUserDetailsClient", (req, res) =>
    updateUserDetails(req, res)
  );
  app.delete("/deleteUserDetailsClient", (req, res) =>
    deleteUserDetails(req, res)
  );
};
