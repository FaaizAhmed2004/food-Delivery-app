// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIUFLm_qVVI4oktHkvlBuUy2Eyeivl9VA",
  authDomain: "food-delivery-6dee8.firebaseapp.com",
  projectId: "food-delivery-6dee8",
  storageBucket: "food-delivery-6dee8.appspot.com",
  messagingSenderId: "48449272211",
  appId: "1:48449272211:web:86865b34eb4eaa212b5066",
  measurementId: "G-GEK8HTFR1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);

//Ensure DOM is loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  // Login function
  window.login = function(e) {
    e.preventDefault();
    var obj = {
      email: email.value,
      password: password.value,
    };

  signInWithEmailAndPassword(obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Logged in successfully");
  var userId = user.uid;
  localStorage.setItem("uid", userId);
  console.log(userId);
        window.location.replace('../index/adminpanel.html');
      })
      .catch((error) => {
        alert("Login error: " + error.message);
      });

    console.log(obj);
  };
});
