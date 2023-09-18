var lastScrollTop; // This Varibale will store the top position
body = document.querySelector('body')
header = document.querySelector('header'); // Get The header
main = document.querySelector('main')
window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    header.style.top='-75px';
    main.style.padding = '10px 0px'
    //set the value to the negetive of height of header 
  }
  
  else{
    header.style.top='0';
    main.style.padding = '75px 0px'
  }  
  if(body.className == "active"){
    header.style.top = "0"
  }
  lastScrollTop = scrollTop; //New Position Stored
});
const addFriend = document.querySelectorAll('.user');
addFriend.forEach(el => {
  var FoN = 1
  el.addEventListener('click', (e) => {
    if(FoN == 1){e.currentTarget.style.background='#0f5232';e.currentTarget.style.boxShadow='#0f5232 0px 8px 24px';FoN = 0}
    else{e.currentTarget.style.background='#afafaf70';e.currentTarget.style.boxShadow='#afafaf70 0px 8px 24px';FoN = 1}; // works correctly
  });
});