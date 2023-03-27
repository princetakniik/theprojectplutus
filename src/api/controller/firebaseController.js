const app = require ('../../middleware/firebase')
const { initializeApp } =require("firebase/app");
const { getAnalytics } =require("firebase/analytics");

const { user } = require("../../config/dbConnection");

const analytics = getAnalytics(app);

const createUser = async(req,res,next) => {
    const data =req.body
    try{
const userData = await analytics.collection('users')//.doc().set(data);
res.status(200).send({msg:'record save successfully',data:userData})
console.log("userData",userData);
    }catch(err){
        console.log(err);
        res.status(500).send({msg:'firebase data not found',err})
    }
}

module.exports ={
    createUser
}