const { analytics, imagesRef } = require("../../middleware/firebase");
const { getAnalytics, logEvent, isSupported } = require("firebase/analytics");
const { user } = require("../../config/dbConnection");
const { getStorage, ref, uploadBytes } = require("firebase/storage");
const { getAuth } = require("firebase/auth");
//const { getStorage } =require("firebase/storage");

const createUser = async (req, res, next) => {
  try {
    const userData = await isSupported().then((data) => {
      if (data) {
        logEvent(analytics, "goal_completion", { name: req.body });
      }
    });
    const data= req.body.name;
    console.log(data);
    const fileName =data
    const spaceRef = ref(imagesRef, fileName);
    const name = spaceRef.name;
    console.log("name", name);
    res.status(200).send({msg:'firebase send data..',data:name})
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "firebase data not found", err });
  }
};

module.exports = {
  createUser,
};
