import firebase from 'firebase';
import firestore from "firebase/firestore/"
const app = firebase.initializeApp({

    apiKey: "AIzaSyBz8LlpGGchi65ilPq9rEI49X3pqWaCZOM",
    authDomain: "tienda-react-e469a.firebaseapp.com",
    projectId: "tienda-react-e469a",
    storageBucket: "tienda-react-e469a.appspot.com",
    messagingSenderId: "1052722331248",
    appId: "1:1052722331248:web:b79bd3018337a2ddaa3eb5"

 });

 export  const getFirebase = () => app  

export const getFirestore = () => firebase.firestore(app)