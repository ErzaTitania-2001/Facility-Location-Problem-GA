// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firecred = {
  apiKey: "AIzaSyBizYJrbjBGBLJL0iGot6LHhjvrvy3V0Kw",
  authDomain: "threeares-d827e.firebaseapp.com",
  projectId: "threeares-d827e",
  storageBucket: "threeares-d827e.appspot.com",
  messagingSenderId: "756769274929",
  appId: "1:756769274929:web:696a7b54438858c8892910",
  measurementId: "G-B1E2LQWBK1"
};

// Initialize Firebase
const app = initializeApp(firecred);
// const auth= firebase.initializeApp(firecred);
const auth = getAuth(app);
console.log(auth)
const db = getFirestore(app);

export { auth, app, db };