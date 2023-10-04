var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  switch(document.title){
    case 'Login': document.getElementById("nextBtn").innerHTML = "Entrar"; break;
    case 'Registre-se': document.getElementById("nextBtn").innerHTML = "Registrar"; break;
  }
  if (n < (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Próximo";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return true;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  telRegex = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
  kedinRegex = /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {
      y[i].className = "invalid";
      valid = false;
    }
  }
  switch(document.title){
    case "Login": 
      if (!y[0].value.match(emailRegex)){
      valid = false; y[0].className = "invalid";};
      break
    case "Registre-se":
    switch(currentTab){
      case 0: 
        if (!y[0].value.match(emailRegex)){
          valid = false; y[0].className = "invalid";}
        if(!y[1].value.match(telRegex)){
          valid = false; y[1].className = "invalid";}
      ;break
      case 1:
        if (!y[0].value.match(kedinRegex)){
          valid = false; y[0].className = "invalid";}
      ;break
  };break
}
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}
function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
const foneMask = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}
const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  .replace(/^(\d)/, '+$1')
  .replace(/^(\+\d{2})(\d)/, '$1 ($2')
  .replace(/(\(\d{2})(\d)/, '$1) $2')
  .replace(/(\d{5})(\d{1,5})/, '$1-$2')
  .replace(/(-\d{4})\d+?$/, '$1');
  return value
}
function hide() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}