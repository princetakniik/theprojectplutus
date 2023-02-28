const {
  CreateHierarchy,
  getHierarchy,
  getByIdHierarchy,
  updateHierarchy,
  deleteHierarchy,
} = require("../api/controller/hierarchyController");

module.exports = (app) => {
  app.post("/CreateHierarchy", (req, res) => CreateHierarchy(req, res));
  app.get("/getHierarchy", (req, res) => getHierarchy(req, res));
  app.get("/getByIdHierarchy/:id", (req, res) => getByIdHierarchy(req, res));
  app.put("/updateHierarchy/:id", (req, res) => updateHierarchy(req, res));
  app.delete("/deleteHierarchy/:id", (req, res) => deleteHierarchy(req, res));
};
