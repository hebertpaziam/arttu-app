import firebase from 'firebase/app'
import 'firebase/firebase-app'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET
}

firebase.initializeApp(firebaseConfig)
