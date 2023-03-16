const {
  issueCreate,
  issueGet,
  issueGetById,
  issueUpdate,
  issueDelete,
} = require("../api/controller/issueEmpController.js");

module.exports = (app) => {
  app.post("/issueCreate", (req, res) => issueCreate(req, res));
  app.get("/issueGet", (req, res) => issueGet(req, res));
  app.get("/issueGetById", (req, res) => issueGetById(req, res));
  app.put("/issueUpdate", (req, res) => issueUpdate(req, res));
  app.delete("/issueDelete", (req, res) => issueDelete(req, res));
};
