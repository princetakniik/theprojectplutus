module.exports = (app) => {
  require("./src/api_route/userRoute")(app);
  require("./src/api_route/LawOfAmendmentRoute")(app);
  require("./src/api_route/hierarchyRoute")(app);
  require("./src/api_route/DirectorRouter")(app);
  require("./src/api_route/complianceRouter")(app);
require('./src/api_route/firebaseRoute')(app)
  //Employee
  require("./src/api_route/employeeRouter")(app);
  require('./src/api_route/AssignUserEmployeeRouter')(app);
  require('./src/api_route/issueEmpRoute')(app)
  //Admin
  require("./src/api_route/makeannounceRouter")(app);
  require("./src/api_route/publishAnnouncementRouter")(app);
  require("./src/api_route/addClientRouter")(app);
  require("./src/api_route/clientRouter")(app);
};
