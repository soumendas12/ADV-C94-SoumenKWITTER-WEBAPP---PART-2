const firebaseConfig = {
    apiKey: "AIzaSyDGnOJfa0lY2BS6GBuG2UDCgMJ_AOTNIys",
    authDomain: "social-website-2fec7.firebaseapp.com",
    databaseURL: "https://social-website-2fec7-default-rtdb.firebaseio.com",
    projectId: "social-website-2fec7",
    storageBucket: "social-website-2fec7.appspot.com",
    messagingSenderId: "828451297660",
    appId: "1:828451297660:web:3ff0819bca60e81b8c6cf9"
  };
  

  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  
    });});}
getData();
