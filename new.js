 // add class navbarDark on navbar scroll
 const header = document.querySelector('.navbar');

 window.onscroll = function () {
     var top = window.scrollY;
     if (top >= 100) {
         header.classList.add('navbarDark');
     }
     else {
         header.classList.remove('navbarDark');
     }
 }
// form button 
const endButton = document.querySelector("#open-button");
const closeButton = document.querySelector(".btn btn-danger");
const formPopUp =  document.querySelector(".form-popup");

endButton.addEventListener("click", (e) =>{
    e.preventDefault();
    formPopUp.style.display="block";
});

closeButton.addEventListener("click", (e) =>{
    e.preventDefault();
    formPopUp.style.display="none";
});

