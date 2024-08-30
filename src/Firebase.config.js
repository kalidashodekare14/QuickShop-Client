// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTD1sMI--YJ7j9IVuOrBJpo5CLlrV3-I",
  authDomain: "quickshop-4fa4e.firebaseapp.com",
  projectId: "quickshop-4fa4e",
  storageBucket: "quickshop-4fa4e.appspot.com",
  messagingSenderId: "600531240028",
  appId: "1:600531240028:web:2282faf6b493c58d3a5299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth