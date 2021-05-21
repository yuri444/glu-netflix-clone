import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyCuMMHfdzffq1aftAWRwg4HglmUOKx20t8",
    authDomain: "nitkliks.firebaseapp.com",
    projectId: "nitkliks",
    storageBucket: "nitkliks.appspot.com",
    messagingSenderId: "732654853448",
    appId: "1:732654853448:web:02bdf649de9bcdd46fa77d",
    measurementId: "G-KLJ6JZ04HC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;