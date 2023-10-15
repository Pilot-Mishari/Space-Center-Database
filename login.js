import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
    import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCn8wM-YAtRvlJ9MnT6GYx0gTa0FU2IZZY",
      authDomain: "space-database-b2c03.firebaseapp.com",
      projectId: "space-database-b2c03",
      storageBucket: "space-database-b2c03.appspot.com",
      messagingSenderId: "655700595746",
      appId: "1:655700595746:web:89d825d81e3b93d61ea67b"
    };
  
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();
    const auth = getAuth(app);
    const dbref = ref(db)

    let email = document.getElementById('emailit');
    let pass = document.getElementById('passit');
    let name = document.getElementById('nameit');

    let AccessrUser = evt => {
        evt.preventDefault();
        signInWithEmailAndPassword(auth, emailit.value, passit.value)
        .then((credentials) => {
            console.log(credentials)
            alert("Success");
        })
        .catch((error)=>{
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
    }

    MainForm.addEventListener('submit', AccessrUser);