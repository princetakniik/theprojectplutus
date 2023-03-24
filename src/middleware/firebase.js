const {initializeApp} = require("firebase/app");
const {getFirestore} =require("firebase/getFirestore");

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY5QmBil2JXTCUNBL7izZN3bvYhkMRO1Q",
  authDomain: "plutus-be45f.firebaseapp.com",
  projectId: "plutus-be45f",
  storageBucket: "plutus-be45f.appspot.com",
  messagingSenderId: "1019888956091",
  appId: "1:1019888956091:web:a9f771f873cabe8ae56f9e",
  measurementId: "G-7M1238V9TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const User =db.collection('Users')
module.exports = User;