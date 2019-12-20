 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBta89QAKb0O72U41wBwHc0oainVfHSd_s",
    authDomain: "project-planner-24a9f.firebaseapp.com",
    databaseURL: "https://project-planner-24a9f.firebaseio.com",
    projectId: "project-planner-24a9f",
    storageBucket: "project-planner-24a9f.appspot.com",
    messagingSenderId: "595038409072",
    appId: "1:595038409072:web:9ff4b4b45bb281ea31bfb5",
    measurementId: "G-XTK8MZ3SQC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;