
var firebaseConfig = {
      apiKey: "AIzaSyClUZqYsUUPC2ch6nNTDTdixg4dqkMj-eo",
      authDomain: "letschat-web-app---1-d8df8.firebaseapp.com",
      projectId: "letschat-web-app---1-d8df8",
      storageBucket: "letschat-web-app---1-d8df8.appspot.com",
      messagingSenderId: "137998263846",
      appId: "1:137998263846:web:132cf8350eb5e3f90ae8e7"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
