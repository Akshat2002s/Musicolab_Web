import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyDa896MLvxxD8UNg1R_EGIcnRyONg5-jLM",
    authDomain: "musicolab-9da36.firebaseapp.com",
    databaseURL: "https://musicolab-9da36.firebaseio.com",
    projectId: "musicolab-9da36",
    storageBucket: "musicolab-9da36.appspot.com",
    messagingSenderId: "62357008369",
    appId: "1:62357008369:web:d993f0ecb99464077d5e50",
    measurementId: "G-BVTP9MMZ6B"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;