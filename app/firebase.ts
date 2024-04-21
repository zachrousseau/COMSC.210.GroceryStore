// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkEiScS3QUqfAui8URpkEngt85_ahopDM",
  authDomain: "grocerystore-38806.firebaseapp.com",
  projectId: "grocerystore-38806",
  storageBucket: "grocerystore-38806.appspot.com",
  messagingSenderId: "207254493702",
  appId: "1:207254493702:web:8584cd47e962f517318187",
  measurementId: "G-CH3DWTVX45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage }