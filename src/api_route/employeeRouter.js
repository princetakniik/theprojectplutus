const {
  EmployeeManagement,
  employeeDetails,
} = require("../api/controller/employeeController");

module.exports = (app) => {
  app.get("/EmployeeManagement", (req, res) => EmployeeManagement(req, res));
  app.get("/employeeDetails", (req, res) => employeeDetails(req, res));
};
