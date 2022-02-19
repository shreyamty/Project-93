var firebaseConfig = {
      apiKey: "AIzaSyBu4kfr77jVGWz7nXZmsq2x8Qy5eFEhd28",
      authDomain: "kwitter-13-feb.firebaseapp.com",
      databaseURL: "https://kwitter-13-feb-default-rtdb.firebaseio.com",
      projectId: "kwitter-13-feb",
      storageBucket: "kwitter-13-feb.appspot.com",
      messagingSenderId: "655060313821",
      appId: "1:655060313821:web:0db33cf9621b85631e9d34"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
