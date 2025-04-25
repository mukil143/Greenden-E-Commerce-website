

let navbtn = document.getElementById("sidenav-btn")//selecting the side nav btn

let sidenavbar = document.getElementById("sidenavbar")//selecting the side navbar 

let closebtn = document.getElementById("close-nav")//selecting the close btn


navbtn.addEventListener("click", function () {
    sidenavbar.style.transform = "translateX(0px)";
})


closebtn.addEventListener("click", function () {
    sidenavbar.style.transform = "translateX(380px)"
})


let search = document.getElementById("search-input")//selecting the search input field

let container=document.getElementById("product-container")//selecting the product container

let productnamelist=container.querySelectorAll("h1")//selecting all the products in the cotainer
console.log(productnamelist)//logging the products in the container


search.addEventListener("keyup",function(){
    let enterdtext=search.value.toLowerCase();//getting the value of the search input field

    for(count=0;count<productnamelist.length;count=count+1){
        if(productnamelist[count].textContent.toLowerCase().indexOf(enterdtext)<0){
            productnamelist[count].parentNode.style.display="none"//removing the product from the container if does not match the search input field
        }
        else{
            productnamelist[count].parentNode.style.display="block"
            //displaying the product in the container if it matches th search 
            console.log(productnamelist[count].parentNode)
        }
    }
});


   