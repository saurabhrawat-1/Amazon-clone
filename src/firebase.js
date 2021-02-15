import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZ7nNLw12S6LfbeWv1-b1TXQmqDLiCcM0",
  authDomain: "build-a87ba.firebaseapp.com",
  projectId: "build-a87ba",
  storageBucket: "build-a87ba.appspot.com",
  messagingSenderId: "207091015301",
  appId: "1:207091015301:web:2ee54d65d7cf2825ad53ec",
  measurementId: "G-QGZ6K6QCZL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
