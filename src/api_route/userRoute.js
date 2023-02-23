const {
  RegisterUser,
  LoginUser,
  validateOtp,
} = require("../api/userController");
const {
  userOtpValidate,
  generateOtp,
} = require("../middleware/authorizations");

module.exports = function (app) {
  app.post("/api", (req, res) => RegisterUser(req, res));
  app.post("api/otp", (req, res) => validateOtp(req, res));
  app.get("/api", (req, res) => LoginUser(req, res));
  app.post("/otpgenerate", (req, res) => generateOtp(req, res));
};
