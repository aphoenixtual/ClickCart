import firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl6NubWDEIvxkedUCII7ZEVmykjnX2tSc",
  authDomain: "ecommerce-2b5d6.firebaseapp.com",
  databaseURL: "https://ecommerce-2b5d6.firebaseio.com",
  projectId: "ecommerce-2b5d6",
  storageBucket: "ecommerce-2b5d6.appspot.com",
  messagingSenderId: "858958831601",
  appId: "1:858958831601:web:8abe73df36358db95b6e50"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
