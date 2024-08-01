



var navIcon = document.querySelector("#nav-icon4");

navIcon.addEventListener("click", ()=>{
    navIcon.classList.toggle("open");
});


var assessbtn = document.querySelector(".assess button");
var assesslvl = document.querySelector(".levels");

assessbtn.addEventListener("click",()=>{
    if(assessbtn.style.backgroundColor == "rgb(120, 120, 120)"){
        console.log("Already Assesed!");
    }else{
    assessbtn.style.backgroundColor = "#787878";
    assesslvl.classList.remove("nodisplay");
    }
});


var intbtn = document.querySelector(".int");
var lvlanaysis = document.querySelector(".level_analyse");

intbtn.addEventListener("click", ()=>{
    assesslvl.classList.add("nodisplay");
    lvlanaysis.classList.remove("nodisplay");
});

var signin = document.querySelector(".navbtn>.btn1");
var register = document.querySelector(".navbtn>.btn2");

signin.addEventListener("click",()=>{
   window.location.href = "./login/login.html";
});

register.addEventListener("click",()=>{
    window.location.href = "./Signup/signup.html";
 });


 
 var logo = document.querySelector("nav>img");

logo.addEventListener("click",()=>{
    window.location.href = "./index.html";
});