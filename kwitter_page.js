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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebaseConfig.database().ref(room_name).push({
     name:user_name,
     like:0
    });

    document.getElementById("msg").value = "";
  }
