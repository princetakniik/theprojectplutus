const {
  CreateLawOfAmendment,
  getLawOfAmendment,
  getByIdLawOfAmendment,
  updateLawOfAmendment,
  deleteLawOfAmendment,
} = require("../api/controller/lawOfAmendmentController");

module.exports = (app) => {
  app.post("/CreateLawOfAmendment", (req, res) =>
    CreateLawOfAmendment(req, res)
  );
  app.get("/getLawOfAmendment", (req, res) => getLawOfAmendment(req, res));
  app.get("/getByIdLawOfAmendment/:id", (req, res) =>
    getByIdLawOfAmendment(req, res)
  );
  app.put("/updateLawOfAmendment/:id", (req, res) =>
  updateLawOfAmendment(req, res)
  );
  app.delete("/deleteLawOfAmendment/:id", (req, res) =>
    deleteLawOfAmendment(req, res)
  );
};
