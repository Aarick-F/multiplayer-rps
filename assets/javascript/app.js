$(document).ready(() => {

  // FIREBASE CONFIG
  var config = {
    apiKey: "AIzaSyCo1ns1qRKoXw9i-qO4u1WZxr6--6uZ0jI",
    authDomain: "rock-paper-scissors-4446b.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-4446b.firebaseio.com",
    projectId: "rock-paper-scissors-4446b",
    storageBucket: "",
    messagingSenderId: "311542924590"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  database.ref().set({
    name: "test",
    please: "work"
  });

  database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function(err) {
    console.log("ERROR", err);
  })

});