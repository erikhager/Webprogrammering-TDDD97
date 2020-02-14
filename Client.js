function test(e){
  console.log(e)
}

function checkpsw(){
  var psw1, psw2;
  psw1 = document.getElementById("psw1").value;
  psw2 = document.getElementById("psw2").value;
  document.getElementById("demo").innerHTML = psw1==psw2;
}
function signUp(){

  let signUpFormObject = {
    userName = document.getElementById("email")
    firstname = document.getElementById("FirstName")
    password = document.getElementById("password")
    familyName = document.getElementById("FamilyName")
    gender = document.getElementById("Gender")
    city = document.getElementById("City")
    country = document.getElementById("Country")
    email = document.getElementById("Email")
    password = document.getElementById("Password")
}



  var signUpForm;
  signUpForm = document.forms["signUpForm"].value;

  if (signUpForm == "") {
    alert("Name must be filled out");
    return false;}
  else {
    alert("Name is filled out");
