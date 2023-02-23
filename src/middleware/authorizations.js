//const { response } = require("express");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const fast2sms = require('fast-two-sms')
// const client = require('twilio')('accountSid', 'authToken', {
//   autoRetry: true,
//   maxRetries: 3
// });

const createJWT = async (user) => {
  try {
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
  } catch (error) {
    console.log(error);
  }
};

const verify = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader");
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.json({ message: constant.message.jwtAuthFailed });
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, constant.userJwtSecret);
    let validateUser = await User.findOne({ email: payload.email });
    if (validateUser) {
      req.user = {
        email: validateUser.email,
        role: validateUser.role,
        userId: validateUser._id,
      };
      console.log(req.user);
      next();
    } else {
      return res.json({ message: "Authentication invalid ! Please register" });
    }
  } catch (error) {
    console.log("invalid signature");
    return res.json({ message: "Authentication invalid" });
  }
};

const generateOtp = async (req, res) => {
  // const digits = '0123456789';
  // let OTP = '';
  // for (let i = 0; i < 4; i++ ) {
  //     OTP += digits[Math.floor(Math.random() * 10)];
  // }
  // const OTP = otpGenerator.generate(6, {
  //   digits: true,
  //   lowerCaseAlphabets: false,
  //   upperCaseAlphabets: false,
  //   specialChars: false,
  // });
  // console.log(OTP);
  // const number = req.body.mobile;
  // const otp = { number: number, otp: OTP };
  // console.log("otp", otp);
  var options = {authorization:"x3fE1DbYn4X0GqIoilwWOsVFrycNgHP9Ku2SATzMeQCamZ8h76GOons46c2tfr7aUNPkS9xyEwBHzYjJ",message : 'YOUR otp is 5543', numbers : ['9693161773']} 
  const response = await fast2sms.sendMessage(options)
  console.log("response",response)

  //const result =await otp.save();
 // res.send({ msg: "send otp succesfully", number: otp });
};




module.exports = { createJWT, verify, generateOtp };
