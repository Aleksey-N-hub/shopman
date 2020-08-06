import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMSj3Rlu_3BIMXlNDfTGxCkdujfkyAoa8",
  authDomain: "shopman-8ceae.firebaseapp.com",
  databaseURL: "https://shopman-8ceae.firebaseio.com",
  projectId: "shopman-8ceae",
  storageBucket: "shopman-8ceae.appspot.com",
  messagingSenderId: "817612421956",
  appId: "1:817612421956:web:87d82f3330d9e0ebeeb511",
  measurementId: "G-RK1EDNYB61",
});

const auth = firebase.auth();

export { auth, firebaseApp };
