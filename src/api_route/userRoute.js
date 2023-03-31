const {
  roleWiseGetDetails,
} = require("../api/controller/roleManagementController");
const {
  RegisterUser,
  validateOtp,
  LoginUser,
  updateUser,
  //deleteUser,
} = require("../api/controller/userController");
const { userDetails } = require("../api/controller/userDetailsController");
const {
  usefast2sms,
  generateOtp,
  sendMail,
} = require("../middleware/authorizations");
const { upload } = require("../middleware/fileUpload");

module.exports = function (app) {
   app.post("/api", (req, res) => RegisterUser(req, res));
  app.post("api/otp", (req, res) => validateOtp(req, res));
  app.get("/api",LoginUser, (req, res) => roleWiseGetDetails(req, res));
  app.post("/otpgenerate", (req, res) => generateOtp(req, res));
  app.post("/fast", (req, res) => usefast2sms(req, res));
  app.get("/mail", (req, res) => sendMail(req, res));

  app.post('/userDetails',(req,res)=>userDetails(req,res));
  //user update
  app.put ('/updateUser',(req,res) => updateUser (req,res));
 // app.delete ('/deleteUser', (req,res) => deleteUser (req,res));
//   app.post("/uploads", (req, res, next) => {
//     upload(req, res, function (err) {
//       if (err) {
//         return res.send("file do not uploads");
//       }
//       res.send("uploads complete");
//       let file = req.files;
//       console.log("files", file.filename);
//     });
//   });

};
