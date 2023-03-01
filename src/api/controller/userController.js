const { user } = require("../../config/dbConnection");
require("dotenv").config();
const { Auth } = require("two-step-auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const { createJWT } = require("../middleware/authorizations");

const validateOtp = async (req, res) => {
  //const res = await Auth(emailId);
  const { emailId } = req.body;
  const result = await Auth(emailId, "Company Name");
  console.log("res", result);
};

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
      phoneOtp: rest.phoneOtp,
      emailOtp: rest.emailOtp,
    });
    console.log(data);
    return res.json({ data: data });
  } catch (error) {
    console.log(error);
  }
};

//!LOGIN USER
const LoginUser = async (req, res) => {
  console.log(" ownerRegister controller ", req.body);
  // console.log(" ownerRegister controller ",req.body);
  const { ...rest } = req.body;
  try {
    if (!rest.email) {
      console.log("Please provide all the values");
      res.send({ msg: "Please provide all the values" });
    }
    //checking if user exist in DB
    const User = await user.findOne({
      where: { email: rest.email },
    });
    //console.log("user", User.password);
    //Throwing an error
    if (!User) {
      loginDash.log("User is not registered");
      res.send({ msg: "User is not Registered" });
    }
    const compare = bcrypt.compareSync(rest.password, User.password);
    if (!compare) {
      res.send({ success: false, message: "passwords do not match" });
    } else {
      const data = {
        email: User.email,
        password: User.password,
        role: User.role,
        firstName: User.firstName,
        lastName: User.lastName,
        phone: User.phone,
      };
      const token = jwt.sign(data, process.env.JWT_SECRET);
      console.log(`${User.role} has login`);
      res.send({ data: token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Incorrect email or password" });
  }
};

const updateUser = async (req, res) => {
  const {
    Email,
    email,
    firstName,
    lastName,
    emailOtp,
    password,
    role,
    phone,
    phoneOtp,
  } = req.body;
  const data = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    emailOtp: emailOtp,
    password: password,
    role: role,
    phone: phone,
    phoneOtp: phoneOtp,
  };
  // console.log("data", data);
  try {
    // const updateData = await user.update(data, {
    //   where: {
    //     email: Email,
    //   },
    // });

    // res.send({ msg: "update user data successfully", data: updateData });

    const alreadyExist = await user.findOne({
      where: {
        email: Email,
      },
    });
    //console.log("data", alreadyExist.email);
    console.log("already", alreadyExist.email.length);
    if (alreadyExist.email.length > 0) {
      if (alreadyExist.email == email) {
        res.send({ msg: "email already present" });
      }
      const updateData = await user.update(data, {
        where: {
          email: Email,
        },
      });
      res.send({ msg: "update user data successfully", data: updateData });
    }
    res.send({ msg: "email not found" });
  } catch (err) {
    console.log(err);
    res.json({ msg: "not update data", err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = { isDeleate: true };
    const { email } = req.body;
    const deleteData = await user.update(data, {
      where: {
        email,
      },
    });
    res.status(200).json({ msg: "user delete successfully", data: deleteData });
  } catch (err) {
    console.log(err);
    res.send({ msg: "not delete data", err });
  }
};

module.exports = {
  RegisterUser,
  LoginUser,
  validateOtp,
  updateUser,
  deleteUser
};
