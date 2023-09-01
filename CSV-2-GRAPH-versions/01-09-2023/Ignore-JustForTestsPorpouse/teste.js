function toggleFAB(fab){
	if(document.querySelector(fab).classList.contains('show')){
  		document.querySelector(fab).classList.remove('show');
	}
	else{
  		document.querySelector(fab).classList.add('show');
  	}
}
 
document.querySelector('.fab .main').addEventListener('click', function(){
	toggleFAB('.fab');

});
x = document.getElementById("some");
function esconder(){
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
	console.log("oi");
}

document.querySelectorAll('.fab ul li button').forEach((item)=>{
	item.addEventListener('click', function(){
		toggleFAB('.fab');
	});
});