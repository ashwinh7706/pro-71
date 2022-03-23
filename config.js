import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCCEOaz44R0EhMo7q53s4wUmDRs_Rv0U6E",
    authDomain: "pro-71-ea94c.firebaseapp.com",
    projectId: "pro-71-ea94c",
    storageBucket: "pro-71-ea94c.appspot.com",
    messagingSenderId: "890128186401",
    appId: "1:890128186401:web:525f51b0159df1e2213760"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
