var firebaseConfig = {
  apiKey: "AIzaSyBDmpIWJ57U5k8NSfmxSi_iFMGLqpbI-sk",
  authDomain: "lets-chat-web-app-21757.firebaseapp.com",
  projectId: "lets-chat-web-app-21757",
  storageBucket: "lets-chat-web-app-21757.appspot.com",
  messagingSenderId: "972517762149",
  appId: "1:972517762149:web:6cda3bd288ae30bb78d28c",
  measurementId: "G-967793ZK9E"
};

firebaseConfig.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



  function addRoom()
  {
   room_name = document.getElementById("room_name").value;
   firebaseConfig.database().ref("/").child(room_name).update({
    purpose : "adding room name"
   });
   localStorage.setItem("room_name", room);
   window.location = "kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class=='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();

  function redirectToRoomName(name)
  {
    console.log(name)
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  