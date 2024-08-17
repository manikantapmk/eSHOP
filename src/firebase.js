import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBWUEfwVXZKxAX7pdz_3My2AOmHbRhhy7A",
    authDomain: "eshop-82bdd.firebaseapp.com",
    projectId: "eshop-82bdd",
    storageBucket: "eshop-82bdd.appspot.com",
    messagingSenderId: "415302006429",
    appId: "1:415302006429:web:5590e16afe9e17b5c20674",
    measurementId: "G-6XWMS4MHSJ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

  export { db, auth };


