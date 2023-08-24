// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo2nwfbnY-v7ERaJ3_tPbZMK4uPWRVib4",
  authDomain: "chat-app-a5db3.firebaseapp.com",
  projectId: "chat-app-a5db3",
  storageBucket: "chat-app-a5db3.appspot.com",
  messagingSenderId: "834431942626",
  appId: "1:834431942626:web:4f6ea3d93b3d82434ec3bb",
  measurementId: "G-C93DEMFQ4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db =  getFirestore(app);