import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAihGCgV5Ik15KdY7yiGLu3QghlRLWzABk",
    authDomain: "hackchat-c00b3.firebaseapp.com",
    projectId: "hackchat-c00b3",
    storageBucket: "hackchat-c00b3.appspot.com",
    messagingSenderId: "927784783363",
    appId: "1:927784783363:web:733bc15df622e9943b8836",
    measurementId: "G-LJSYG27VFF"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }