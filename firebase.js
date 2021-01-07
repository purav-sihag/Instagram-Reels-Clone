import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPEnJ8VFPZ0pLVEIQzVC6Qdgtu_9uN8p4",
  authDomain: "reelsclonebypurav.firebaseapp.com",
  projectId: "reelsclonebypurav",
  storageBucket: "reelsclonebypurav.appspot.com",
  messagingSenderId: "115531574883",
  appId: "1:115531574883:web:a52a2cc99c418a9da01256",
  measurementId: "G-QWB0Z8WMWC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;