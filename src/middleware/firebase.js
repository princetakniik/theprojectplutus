const { initializeApp } =require("firebase/app");
const { getAnalytics } =require("firebase/analytics");
const config =require('../config/config')
const app = initializeApp(config.firebaseConfig)

module.exports =app;