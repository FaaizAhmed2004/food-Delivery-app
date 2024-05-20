/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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
const auth = getAuth(app);
const db = getFirestore(app);*/

window.signup = function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const copassword = document.getElementById("copassword").value;

  if (password !== copassword) {
    alert("Passwords do not match");
    return;
  }

  createUserWithEmailAndPassword( email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save additional user info to Firestore
      return setDoc(doc(db, "users", user.uid), {
        fullname: fullname,
        contact: contact,
        address: address,
        email: email

      });
    })

    .then(() => {
      alert("Signup successful");
      var userId = user.uid;
      localStorage.setItem("uid", userId);
      console.log(userId);  
      window.location.replace('../index/adminpanel.html');
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
}
