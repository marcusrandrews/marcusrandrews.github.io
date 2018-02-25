// recaptcha
function recaptcha_callback(){
  alert("callback working");
  $('.button').prop("disabled", false);
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBazlSZG6CwuByfO8WsX2GlwDSSoHZG8E0",
  authDomain: "actplasticrepairs.firebaseapp.com",
  databaseURL: "https://actplasticrepairs.firebaseio.com",
  projectId: "actplasticrepairs",
  storageBucket: "actplasticrepairs.appspot.com",
  messagingSenderId: "622844724339"
};
firebase.initializeApp(config);

// reference message collection
var messagesRef = firebase.database().ref('messages')

// listen for for Submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

// submit form
function submitForm(e){
  e.preventDefault()
  // get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var address = getInputVal('address');
  var details = getInputVal('details');

  // Calls function
  saveMessage(name, email, phone, address, details)


  // confirmation
  window.alert('Your message has been sent!')
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// save the message to firebasejs
// this is just sending an object to our database
function saveMessage(name, email, phone, address, details){
  var newMessageRef = messagesRef.push()
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    addres: address,
    details: details
  })
}
