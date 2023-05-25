// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIZ4cEGqRMgIhYEnhl2vhO9OxCWR5tVow",
  authDomain: "realtor-call-list.firebaseapp.com",
  projectId: "realtor-call-list",
  storageBucket: "realtor-call-list.appspot.com",
  messagingSenderId: "1018874001785",
  appId: "1:1018874001785:web:27fa53610f5e20b2af17a8",
  measurementId: "G-83LDXL3FQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Init Services
const analytics = getAnalytics(app);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth}
