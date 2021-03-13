import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRATsF44Yz8y_nxKjjTAeaT_YFJ3CagUY",
  authDomain: "team-chat-7f2ce.firebaseapp.com",
  projectId: "team-chat-7f2ce",
  storageBucket: "team-chat-7f2ce.appspot.com",
  messagingSenderId: "167161247605",
  appId: "1:167161247605:web:abb9c116df69905534853c",
  measurementId: "G-L0VSJNZBTX",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
