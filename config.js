import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA0Okp-I7lnSuyGTvs8uq5ywxEHktvyxGA",
    authDomain: "schoolbase-2f8ef.firebaseapp.com",
    databaseURL: "https://schoolbase-2f8ef-default-rtdb.firebaseio.com",
    projectId: "schoolbase-2f8ef",
    storageBucket: "schoolbase-2f8ef.appspot.com",
    messagingSenderId: "1040469769487",
    appId: "1:1040469769487:web:5fcd1a5bf48941634c127a"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.database()

  