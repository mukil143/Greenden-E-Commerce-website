let navbtn=document.getElementById("sidenav-btn")//selecting the side nav btn

let sidenavbar=document.getElementById("sidenavbar")//selecting the side navbar 

let closebtn=document.getElementById("close-nav")//selecting the close btn


navbtn.addEventListener("click",function(){
    sidenavbar.style.transform="translateX(0px)";
})


closebtn.addEventListener("click",function(){
    sidenavbar.style.transform="translateX(380px)"
})