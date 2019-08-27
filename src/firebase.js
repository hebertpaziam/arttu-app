import firebase from "firebase/app";
import "firebase/firebase-app";
import "firebase/firebase-auth";
import "firebase/firebase-database";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpmVzKhXQW-VyfbN2gU-VWl3j6R4gVSa0",
  authDomain: "arttu-web.firebaseapp.com",
  databaseURL: "https://arttu-web.firebaseio.com",
  projectId: "arttu-web",
  storageBucket: "arttu-web.appspot.com",
  messagingSenderId: "88188349169",
  appId: "1:88188349169:web:f62d68db441b2147"
};

firebase.initializeApp(firebaseConfig);
