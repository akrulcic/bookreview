import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCf78FUzNYc8yq1KHIzyXOppg_7rbJAIZg",
    authDomain: "bookreview-b4954.firebaseapp.com",
    projectId: "bookreview-b4954",
    storageBucket: "bookreview-b4954.appspot.com",
    messagingSenderId: "799489578616",
    appId: "1:799489578616:web:ce50c15a6b7fb6d5903f8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();
  
  export {
    firebase,
    db,
    storage,
  };