import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2kLfOZrJUNWO8CUg_mQsGCiqetxye6DE",
    authDomain: "firechat-8a30e.firebaseapp.com",
    projectId: "firechat-8a30e",
    storageBucket: "firechat-8a30e.appspot.com",
    messagingSenderId: "919104985340",
    appId: "1:919104985340:web:50ad6f4b28f1f00f015f79",
    measurementId: "G-1Z4E8YFXFK"
  });
  
export const auth = firebase.auth();
export  const db = fireBaseApp.firestore();