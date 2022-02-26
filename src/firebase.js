import firebase from 'firebase'



const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCfCCnPdLdRBpmIcU9-TY9x_RgGYydvU8Q",
    authDomain: "reactfirechat-7969d.firebaseapp.com",
    projectId: "reactfirechat-7969d",
    storageBucket: "reactfirechat-7969d.appspot.com",
    messagingSenderId: "1066193054108",
    appId: "1:1066193054108:web:03d17e41cfaf976baac059",
    measurementId: "G-H0130D93DB"
 
})


const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db , auth }