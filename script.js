const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});





const checkbox = document.getElementById('darkmode-toggle');

checkbox.addEventListener('change', function(){
    if(this.checked){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    }
})
