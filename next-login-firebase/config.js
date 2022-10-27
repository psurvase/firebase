import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIIxDbvoICSHuUbgOU-jD3PQFMyhEE2ds",
    authDomain: "next-login-firebase-293d3.firebaseapp.com",
    projectId: "next-login-firebase-293d3",
    storageBucket: "next-login-firebase-293d3.appspot.com",
    messagingSenderId: "310121350185",
    appId: "1:310121350185:web:b83dca3e31c60ebb814838"
  };

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}