import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getStorage, ref, uploadBytes } from "firebase/storage";
// const fs = require("fs");
// const path = require("path");

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
const app = initializeApp(firebaseConfig)

// // init firestore service
// const storage = getStorage(app);



// const imagePath = path.join(__dirname, "images", "Logo3.png");
// console.log(imagePath)
// const file = fs.readFileSync(imagePath);

// const storageRef = ref(storage, "images/my-ima.png"); // Yüklenecek resmin referansını belirtin
// uploadBytes(storageRef, file)
//   .then((snapshot) => {
//     console.log("Resim yükleme işlemi tamamlandı");
//   })
//   .catch((error) => {
//     console.log("Resim yükleme işlemi sırasında bir hata oluştu", error);
//   });

const db = getFirestore()
const auth = getAuth()
export {db, auth}