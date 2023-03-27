require('dotenv').config();

const {PORT,
    saltRound,
    accountSid,
    authToken,
    user,
    pass,
    basePort,
    JWT_SECRET,
    JWT_LIFETIME,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGEING_SENDER_ID,
    APP_ID,
    MEASURMENT_ID
}=process.env

module.exports ={
    PORT:PORT,
    saltRound:saltRound,
    accountSid:accountSid,
    authToken:authToken,
    user:user,
    pass:pass,
    basePort:basePort,
    JWT_SECRET:JWT_SECRET,
    JWT_LIFETIME:JWT_LIFETIME,
    firebaseConfig :{
        apiKey: API_KEY,
        authDomain:     AUTH_DOMAIN,        
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId:MESSAGEING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASURMENT_ID
      }
}