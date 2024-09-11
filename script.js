var popupbutton=document.getElementById("popup-button");
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})


var cancelbyt=document.getElementById("cancelbyt");
cancelbyt.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})


var popupbutton2=document.getElementById("popup-button2");
var popupoverlay2=document.querySelector(".popup-overlay2");
var popupbox2=document.querySelector(".popup-box2");

popupbutton2.addEventListener("click",function(){
    popupoverlay2.style.display="block";
    popupbox2.style.display="block";
})
var cancelbyt2=document.getElementById("cancelbyt2");
cancelbyt2.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay2.style.display="none";
    popupbox2.style.display="none";

})

var popupbutton3=document.getElementById("popup-button3");
var popupoverlay3=document.querySelector(".popup-overlay3");
var popupbox3=document.querySelector(".popup-box3");

popupbutton3.addEventListener("click",function(){
    popupoverlay3.style.display="block";
    popupbox3.style.display="block";
})
var cancelbyt3=document.getElementById("cancelbyt3");
cancelbyt3.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay3.style.display="none";
    popupbox3.style.display="none";

})


var popupbutton4=document.getElementById("popup-button4");
var popupoverlay4=document.querySelector(".popup-overlay4");
var popupbox4=document.querySelector(".popup-box4");

popupbutton4.addEventListener("click",function(){
    popupoverlay4.style.display="block";
    popupbox4.style.display="block";
})
var cancelbyt4=document.getElementById("cancelbyt4");
cancelbyt4.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay4.style.display="none";
    popupbox4.style.display="none";

})