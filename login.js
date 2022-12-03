const firebaseConfig = {
    apiKey: "AIzaSyBtzoafe62-4UFzVbTkbBfmUaKTHVCqiA0",
    authDomain: "agroporse.firebaseapp.com",
    databaseURL: "https://agroporse-default-rtdb.firebaseio.com",
    projectId: "agroporse",
    storageBucket: "agroporse.appspot.com",
    messagingSenderId: "158500537248",
    appId: "1:158500537248:web:6feb40dda2a8cb4831dac5",
    measurementId: "G-3CTTXS2QGV"
  };

  firebase.initializeApp(firebaseConfig);
  const logdb=firebase.database().ref('agroporse')
  document.getElementById('logdet').addEventListener('submit',submitdet)

  function submitdet(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var phone= document.getElementById('number').value;
    saveinfo(name,pass,phone);
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("agroporse").reset();
  }

const saveinfo = (name,pass,phone) =>{
    var newlogindet=logdb.push();

    newlogindet.set({
        name : name,
        pass : pass,
        phone : phone,
    });
}


