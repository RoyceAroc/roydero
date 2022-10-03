const firebaseConfig = {
    apiKey: "AIzaSyAmkQ9vEUl39bsokaxCefNte4gxIFdNoN0",
    authDomain: "roydero-32a7b.firebaseapp.com",
    projectId: "roydero-32a7b",
    storageBucket: "roydero",
    messagingSenderId: "666785329357",
    appId: "1:666785329357:web:1f00d88c83fe6fdfb7b984",
    measurementId: "G-88MKEJDB55"
};
  
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var user;
