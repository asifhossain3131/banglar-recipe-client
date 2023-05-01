// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiFfhTM8nHkmwUv1SfF7UWH5vKKyUxGpU",
  authDomain: "chef-recipe-abecf.firebaseapp.com",
  projectId: "chef-recipe-abecf",
  storageBucket: "chef-recipe-abecf.appspot.com",
  messagingSenderId: "718566483732",
  appId: "1:718566483732:web:b471ab9750ecc054de4401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app