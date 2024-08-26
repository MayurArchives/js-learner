var button =  document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);
button.addEventListener("click",function(){
    console.log("Button is Click!");
    
});
