const {
  createCompliance,
  getCompliance,
  updateCompliance,
  deleteCompliance,
  getByIdCompliance,
} = require("../api/controller/complianceController");

module.exports = (app) => {
  app.post("/createCompliance", (req, res) => createCompliance(req, res));
  app.get("/getCompliance", (req, res) => getCompliance(req, res));
  app.get("/getByIdCompliance/:id", (req, res) => getByIdCompliance(req, res));
  app.put("/updateCompliance/:id", (req, res) => updateCompliance(req, res));
  app.delete("/deleteCompliance/:id", (req, res) => deleteCompliance(req, res));
};
