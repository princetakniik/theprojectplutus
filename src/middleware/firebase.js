const { initializeApp} =require("firebase/app");
const { getAnalytics, logEvent, isSupported } = require("firebase/analytics");
const { Logger } =require('@firebase/logger');
const config =require('../config/config')
var logger = new Logger('@firebase/analytics');
const app = initializeApp(config.firebaseConfig)
const { getStorage, ref ,uploadBytes } =require("firebase/storage");
const storage = getStorage(app);

if (!getStorage) {
    console.log("data");
    return;
}
//const storageRef = ref(storage);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, 'images');
// const fileName = "prince";
// const spaceRef = ref(imagesRef, fileName);
// const name = spaceRef.name;
// console.log("spaceRef",spaceRef);
// console.log('name',name);
const analytics = () => {
    if (typeof window !== "undefined") {
      return getAnalytics(app)
    } else {
      return null
    }
  }
module.exports = {analytics,imagesRef}

  
