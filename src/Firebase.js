import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBtwj-YIuRLIUIPYK0y3zUh5j_YvTDT8jc",
	authDomain: "azecoder-contact-form.firebaseapp.com",
	projectId: "azecoder-contact-form",
	storageBucket: "azecoder-contact-form.appspot.com",
	messagingSenderId: "758098895301",
	appId: "1:758098895301:web:d176d913b626b81d476bac",
});

var db = firebaseApp.firestore();

export { db };
