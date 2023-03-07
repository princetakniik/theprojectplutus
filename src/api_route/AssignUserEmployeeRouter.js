const {
  mapUserToEmployee,
  mapUserToEmployeeGet,
  mapUserToEmployeeById,
  mapUserToEmployeeUpdate,
  deleteUserToEmployeeData,
} = require("../api/controller/AssignUserEmployeeController");

module.exports = (app) => {
  app.post("/mapUserToEmployee", (req, res) => mapUserToEmployee(req, res));
  app.get("/mapUserToEmployeeGet", (req, res) =>
    mapUserToEmployeeGet(req, res)
  );
  app.get("/mapUserToEmployeeById", (req, res) =>
    mapUserToEmployeeById(req, res)
  );
  app.put("/mapUserToEmployeeUpdate", (req, res) =>
    mapUserToEmployeeUpdate(req, res)
  );
  app.delete("/deleteUserToEmployeeData", (req, res) =>
    deleteUserToEmployeeData(req, res)
  );
};
