import firebase from "firebase/compat/app"
import "firebase/compat/auth";


// const app  = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId:process.env.REACT_APP_FIREBASE_APP_ID
// })

const app  = firebase.initializeApp({
    apiKey: "AIzaSyCqwbQLsQkLFr6DQLYBk53mZZE673jbEpc",
    authDomain:"resume-builder-dev-74c40.firebaseapp.com" ,
    projectId: "resume-builder-dev-74c40",
    storageBucket: "resume-builder-dev-74c40.appspot.com",
    messagingSenderId: "168888804856",
    appId:"1:168888804856:web:9b04de7a339d624793a20d"
  })


export const auth =  app.auth();

export default app;

