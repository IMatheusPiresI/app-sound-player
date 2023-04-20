import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiqebuXByWWKit5FuHpD2uEkTJhv8S0pA',
  authDomain: 'app-song-music.firebaseapp.com',
  projectId: 'app-song-music',
  storageBucket: 'app-song-music.appspot.com',
  messagingSenderId: '791295894613',
  appId: '1:791295894613:web:be04beab908da762f9a0dc',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { firebase, db };
