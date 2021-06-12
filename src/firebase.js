//npm install firebase-tools  
//npm install firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyD_-lYQi60xQRVre1Ri-ajIjMxQl62OJXk",
  authDomain: "clone-32963.firebaseapp.com",
  projectId: "clone-32963",
  storageBucket: "clone-32963.appspot.com",
  messagingSenderId: "131754179095",
  appId: "1:131754179095:web:e6ac0b139b8f6cda257a52",
  measurementId: "G-LFWQ9MT1WK"
});


const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };



