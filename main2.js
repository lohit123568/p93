const firebaseConfig = {
    apiKey: "AIzaSyDoeX8ginIVcJTn2BGOtBDtrKU0qwtxubo",
    authDomain: "fun-chat-6f43f.firebaseapp.com",
    databaseURL: "https://fun-chat-6f43f-default-rtdb.firebaseio.com",
    projectId: "fun-chat-6f43f",
    storageBucket: "fun-chat-6f43f.appspot.com",
    messagingSenderId: "980658639123",
    appId: "1:980658639123:web:d18b45813dc825e9b84ae6"
  };
  
  // Initialize Firebase

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function logout(){
   localStorage.removeItem("user__name");
   window.location = "index.html";
}
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location ="index3.html";
}
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index3.html";
}