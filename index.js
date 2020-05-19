const firebase=require("firebase");
//const admin=require("firebase-admin");
const abc=require("watchmate-c5051-firebase-adminsdk-tgjns-e412e98a25.json");
(function(){

const firebaseConfig = {
  apiKey: "AIzaSyCMjpZsweFDIOKFvMhqOuPwPRSz9s-eMAQ",
  authDomain: "watchmate-c5051.firebaseapp.com",
  databaseURL: "https://watchmate-c5051.firebaseio.com",
  projectId: "watchmate-c5051",
  storageBucket: "watchmate-c5051.appspot.com",
  messagingSenderId: "277455359502",
  appId: "1:277455359502:web:2924124ef483d79c8c365f",
  measurementId: "G-WRRJTD0ZPW"
};
firebase.initializeApp(firebaseConfig);

var db=firebase.database();
const em=document.getElementById('email');
const pass=document.getElementById('psw');
const log=document.getElementById('btnlogin');
const reg=document.getElementById('reg');

log.addEventListener('click',e =>{
  const email=em.value;
  const pass=pass.value;
  const auth=firebase.auth();

  const promise=auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));

});

reg.addEventListener('click',e =>{
  const email=em.value;
  const pass=pass.value;
  const auth=firebase.auth();
  const promise=auth.createUserWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));

});

firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    console.log(firebaseUser);
  }
  else{
    console.log('not logged in');
  }

});

}());