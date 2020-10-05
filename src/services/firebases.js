import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAzPXPITS2MOgRHD2tJvUBYL8lDErc0das",
    authDomain: "todolist-88608.firebaseapp.com",
    databaseURL: "https://todolist-88608.firebaseio.com",
    projectId: "todolist-88608",
    storageBucket: "todolist-88608.appspot.com",
    messagingSenderId: "1000430075421",
    appId: "1:1000430075421:web:fcaa4b7a1dcdf0a2de90f4",
    measurementId: "G-JNP6JZXN72"
});

const database = firebase.database();

export default database;