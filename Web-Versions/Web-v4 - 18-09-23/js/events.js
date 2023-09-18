var lastScrollTop; // This Varibale will store the top position
body = document.querySelector('body')
header = document.querySelector('header'); // Get The header
eventlist = document.querySelector('.events-list')
window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    header.style.top='-75px';
    eventlist.style.margin = '0 0 0 0'
    //set the value to the negetive of height of header 
  }
  
  else{
    header.style.top='0';
    eventlist.style.margin = '75px 0 0 0'
  }  
  if(body.className == "active"){
    header.style.top = "0"
  }
  lastScrollTop = scrollTop; //New Position Stored
});