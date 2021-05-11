var firebaseConfig = {
      apiKey: "AIzaSyCTG98xEuN1x1hLvz5J828tccOaQfq33i4",
      authDomain: "kwitter-20e90.firebaseapp.com",
      databaseURL: "https://kwitter-20e90-default-rtdb.firebaseio.com",
      projectId: "kwitter-20e90",
      storageBucket: "kwitter-20e90.appspot.com",
      messagingSenderId: "1025031016103",
      appId: "1:1025031016103:web:a0475c0c44567bb22bd582"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" +Room_names +"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom(){
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose:"room name"     
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

