// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFwz6jyMxxSEEXP_AB_svM6ACO62sz7ug",
  authDomain: "sepflix-9c5ca.firebaseapp.com",
  projectId: "sepflix-9c5ca",
  storageBucket: "sepflix-9c5ca.appspot.com",
  messagingSenderId: "415899090601",
  appId: "1:415899090601:web:708113a7ce35775e78f3b8",
  measurementId: "G-M9YLTS8YR9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }