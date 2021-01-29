import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1OAyJmrMxXzsZMczq3zN3u9cVJ0Z_ePo",
  authDomain: "linkdin-clone-yyt.firebaseapp.com",
  projectId: "linkdin-clone-yyt",
  storageBucket: "linkdin-clone-yyt.appspot.com",
  messagingSenderId: "335562556626",
  appId: "1:335562556626:web:8c16de2ac0bedf2859990b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
