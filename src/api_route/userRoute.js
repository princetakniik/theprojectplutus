const {
  RegisterUser,
  LoginUser,
  validateOtp,
} = require("../api/userController");
const {
  userOtpValidate,
  generateOtp,
  usefast2sms,
  sendMail,
} = require("../middleware/authorizations");

module.exports = function (app) {
  app.post("/api", (req, res) => RegisterUser(req, res));
  app.post("api/otp", (req, res) => validateOtp(req, res));
  app.get("/api", (req, res) => LoginUser(req, res));
  app.post("/otpgenerate", (req, res) => generateOtp(req, res));
  app.get('/fast',(req,res)=>usefast2sms(req,res));
  app.get('/mail',(req,res)=>sendMail(req,res));
};
