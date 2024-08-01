var moduleExpander = document.querySelector(".module1");
var moduleDetail = document.querySelectorAll(".ml1");

moduleExpander.addEventListener("click",()=>{
    moduleDetail.forEach((item)=>{
       item.classList.toggle("nodisplay");
       item.classList.toggle("fadein");
    });
       document.querySelector(".module1>img").classList.toggle("rotate");
});

document.querySelector(".iot").addEventListener("click",()=>{
    window.open('https://youtu.be/b7GC4Zr74M0?si=B-qfhvjIGki32LWZ');
});

document.querySelector(".webdev").addEventListener("click",()=>{
    window.open('https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=XruKlhf1ivSw5bDz');
});

document.querySelector(".ai").addEventListener("click",()=>{
    window.location.href = 'https://youtube.com/playlist?list=PLEiEAq2VkUULyr_ftxpHB6DumOq1Zz2hq&si=IBNznkXmDhBvc31B';
});


var logo = document.querySelector("nav>img");

logo.addEventListener("click",()=>{
    window.location.href = "../index.html";
});


var MI = document.querySelector(".MI");

MI.addEventListener("click",()=>{
    window.location.href = "../market-insight/index.html";
});