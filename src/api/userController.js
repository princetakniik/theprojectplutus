const { user } = require("../config/dbConnection");
require("dotenv").config();
const {Auth} = require('two-step-auth');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { createJWT } = require("../middleware/authorizations");

const validateOtp = async(req,res) =>{
  //const res = await Auth(emailId);
  const {emailId}=req.body
  const result = await Auth(emailId, "Company Name");
  console.log("res",result);
}

const RegisterUser = async (req, res) => {
  console.log(" ownerRegister controller ", req.body);
  const { ...rest } = req.body;
  try {
    if (!rest.email) {
      console.log("Please provide all values");
      res.send({ msg: "Please provide all values" });
    }

    //checking if user exist
    const userAlreadyExist = await user.findOne({
      where: {
        email: rest.email,
      },
    });

    if (userAlreadyExist) {
      res.send({ msg: "User already exist" });
    }
    const saltRounds = 10;
    //encrypting the password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(rest.password, salt);
    let data = await user.create({
      firstName: rest.firstName,
      lastName: rest.lastName,
      email: rest.email,
      password: hash,
      role: rest.role,
      phone: rest.phone,
      phoneOtp:rest.phoneOtp,
      emailOtp:rest.emailOtp
    });
    console.log(data);
    return res.json({ data: data });
  } catch (error) {
    console.log(error);
  }
};


// const validateOtp = async (req, res) => {

//   console.log(" validateOtp controller ",req.body);
//   const { email, userId } = req.user;
//   console.log("email",email);
//   try {

//     if(Object.keys(req.body).length === 0){    
//       return res.status(204).json({status:constant.status.error, message:" Empty request ", data:{}})
//     }

//       // -----------------------------   Otp validadate and return  ---------------------------- 
//         let validateUser = await user.findOne({ email: email });
//         if (validateUser) {
//           let userDetails =  await userSignupServices(res,email)
//           return res.status(403).json({status:constant.status.suce, message: constant.message.getdatasucess, data:userDetails})
//         }    
//   } catch (error) {
//     console.log("validateOtp api ...",error);
//     return res.json({status:constant.status.error, message:constant.message.errorSomethingWorng, data:{}})
//   }
// };


//!LOGIN USER
const LoginUser = async (req, res) => {
  // console.log(" ownerRegister controller ",req.body);
  const { ...rest } = req.body;
  try {
    if (!rest.email) {
      console.log("Please provide all the values");
      res.send({msg:'Please provide all the values'})
    }

    //checking if user exist in DB
    const User = await user.findOne({
      where: { email: rest.email },
    });
    //console.log("user", User.password);
    //Throwing an error
    if (!User) {
      loginDash.log("User is not registered");
    res.send({msg:"User is not Registered"});
    }
   const compare= bcrypt.compareSync(rest.password, User.password) 
        if(!compare){
          res.send({success: false, message: 'passwords do not match'});
        } else {
            const data={"email":User.email,'password':User.password,'role':User.role,
        'firstName':User.firstName,'lastName':User.lastName,'phone':User.phone}
          const token = jwt.sign(data, process.env.JWT_SECRET);
          console.log(`${User.role} has login`);
          res.send({data:token})
        };

  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Incorrect email or password" });
  }
};

module.exports = {
  RegisterUser,
  LoginUser,
  validateOtp
};
