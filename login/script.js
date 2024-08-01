var signup = document.querySelector(".signup");
var login = document.querySelector(".login");
var form1 = document.querySelector(".form1");
var form2 = document.querySelector(".form2");


signup.addEventListener("click",()=>{
    login.classList.remove("fadein");
     signup.classList.remove("btn2");
     login.classList.remove("btn1");

     signup.classList.add("fadein");
     signup.classList.add("btn1");
     login.classList.add("btn2");

     form1.classList.add("nodisplay");
     form2.classList.add("fadein");
     form2.classList.remove("nodisplay");
});

login.addEventListener("click",()=>{
    signup.classList.remove("fadein");
    signup.classList.remove("btn1");
    login.classList.remove("btn2");
    
    login.classList.add("fadein");
    login.classList.add("btn1");
    signup.classList.add("btn2");

    form2.classList.add("nodisplay");
    form1.classList.add("fadein");
    form1.classList.remove("nodisplay")
});


