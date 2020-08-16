import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCidZK05OCMKCdaX6zVcF8xuqegA1d4Hu0",
    authDomain: "twitter-clone-7cb4c.firebaseapp.com",
    databaseURL: "https://twitter-clone-7cb4c.firebaseio.com",
    projectId: "twitter-clone-7cb4c",
    storageBucket: "twitter-clone-7cb4c.appspot.com",
    messagingSenderId: "664674328740",
    appId: "1:664674328740:web:cc726faccea833fb678631",
    measurementId: "G-QVSSX112P0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;