// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAW9qaAXXNaoXi1CFJ9BbKhboRNOqxJfOQ",
    authDomain: "tiktok-clone-8a748.firebaseapp.com",
    projectId: "tiktok-clone-8a748",
    storageBucket: "tiktok-clone-8a748.appspot.com",
    messagingSenderId: "643119569190",
    appId: "1:643119569190:web:ab69bddabb86a8da1d09e7",
    measurementId: "G-0W3QSQ1Z68"
  };

  import firebase from 'firebase'

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  export default db