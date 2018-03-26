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

  $("#create-game-start").on("click", function() {
    player1 = $("#create-game-nickname").val();
    if(player1.length === 0) {
      console.log("Give me a nickname, nerd");
    } else {
      database.ref("rooms").push(
        {
          seed: getSeed(),
          player1: player1,
          player1Choice: "",
          player2: "",
          player2Choice: ""
        }
      );
    }
    $("#create-game-nickname").text("");
  });

  database.ref("rooms").on("value", function(snapshot) {
    let data = snapshot.val();
    console.log(data);
  }, function(err) {
    console.log("ERROR", err);
  });

  function getSeed() {
    return Math.floor(Math.random() * 999999);
  }

});