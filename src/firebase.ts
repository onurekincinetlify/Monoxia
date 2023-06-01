import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrvH7f7hwIL6dGHKqXSY5JU2bzHPSm9BU",
  authDomain: "monoxia-5c690.firebaseapp.com",
  databaseURL: "https://monoxia-5c690-default-rtdb.firebaseio.com",
  projectId: "monoxia-5c690",
  storageBucket: "monoxia-5c690.appspot.com",
  messagingSenderId: "987529803379",
  appId: "1:987529803379:web:1541a2a97af0f8318a5c06",
  measurementId: "G-1G7EFMSQ7G"
}

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
const auth = getAuth()
export {db, auth}