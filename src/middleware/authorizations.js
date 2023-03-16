const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const fast2sms = require("fast-two-sms");
//const client = require('twilio')(accountSid, authToken);
const nodemailer = require("nodemailer");
fast2smskey="mySFvt7CuNbagNGCoUotkB1nrBDUfpvXka1fQvGsRKGmgVVS4ike07dKJ69a"
const sendMail = async (req,res) =>{
  try{

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'prince11march1998@gmail.com', // generated ethereal user
        pass: 'evsmavnjsqoefsdl', // generated ethereal password
      },
    });

    var mailOptions = {
      from: "prince11march1998@gmail.com",
      to: ["devanshu@takniik.com",'gj@finofii.com','ms@finofii.com'],
      subject: "Email Banking Test Emails - By Prince",
      Text: "First Email send from nodejs nodemailer own made Package ( for auto emails of banking)",
      html:
        `<p>First Email send from nodejs nodemailer own made Package ( for auto emails of banking)`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return false
      } else {
        console.log("Email sent successfully")
        res.send(transporter)
      }
    });

  }catch(err){
    console.log(err);
  }
}

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
  const OTP = otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  console.log(OTP);
  res.send({ msg: "send otp succesfully", data:OTP });
};

const usefast2sms =async(req,res) =>{
  try{
    var accountSid = "AC7a8309a010b366f1926a1f06cf43139c"; // Your Account SID from www.twilio.com/console
    var authToken = "6599e78edff89deadc1b9fc77f35cd6f";   
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({
       body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
       from: '+919693161773',
       to: '+918434443026'
     })
    .then(message => console.log('touilio',message.sid));

  var response =await fast2sms.sendMessage({
    authorization :"w1qDBIOa6kFJCuXUxk3mTenptUZpBTABKfUkXIFukEMJp67FmOPbPODS7DLR",
    message : `he hdfkhk otp is ${11111}`,
    numbers : ['9931799087','9693161773']
  })
  res.send({msg:'send otp successful',response})
  console.log("data",response);
}catch(err){
  console.log(err);
}
}


module.exports = { createJWT, verify, generateOtp,usefast2sms,sendMail };
