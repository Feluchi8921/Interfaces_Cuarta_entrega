document.addEventListener("DOMContentLoaded", function () {
    // Simular una carga de 5 segundos
    setTimeout(function () {
        // Ocultar el loader
        document.getElementById("loaderContainer").style.display = "none";
        // Mostrar el contenido principal
        document.getElementById("content").style.display = "block";
    }, 5000);

    // Actualizar el porcentaje de carga cada segundo
    let progress = 0;
    const interval = setInterval(function () {
        progress += 20;
        document.getElementById("loader").style.borderBottomColor = "#3498db";
        document.getElementById("loaderText").innerText = `Cargando... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 1000);
});

/*----------Duende--------------*/
document.addEventListener("DOMContentLoaded", function () {
    const duende = document.querySelector(".duende");
    
    window.addEventListener("scroll", function () {
        const scrollValue = window.scrollY;
        const speed = 0.3;

        // Se detiene el movimiento a los 800px de scroll
        if (scrollValue <= 800) {
            duende.style.transform = `translateY(${scrollValue * speed}px)`;
        }
    });
});

/*----------------Menu hamburguesa cruz-----------------*/
const menuHamburguesa = document.querySelector(".menu-hamburguesa");

menuHamburguesa.addEventListener("click", () => {
  menuHamburguesa.classList.toggle("cruz");
});

/*------------------------Menu achicable------------*/
const menuAchicar = document.querySelectorAll(".menuAchicar");
const achicarMenuHamburguesa = document.querySelectorAll(".achicarMenuHamburguesa");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    menuAchicar.forEach(element => {
      element.classList.add("achicar");
    });
  } else {
    menuAchicar.forEach(element => {
      element.classList.remove("achicar");
    });
  }
});

/*-------------------Parallax-------------*/

const spidey = document.querySelector("#spidey");
const edificioIzq = document.querySelector("#edificioIzq");
const edificio = document.querySelector("#edificio");
const edificioDer = document.querySelector("#edificioDer");
const chica = document.querySelector("#chica");
const spideyNegro = document.querySelector("#spideyNegro");
const spideyCentral = document.querySelector("#spideyCentral");
const cuerdaDerecha = document.querySelector("#cuerdaDerecha");
const cuerdaIzquierda = document.querySelector("#cuerdaIzquierda");

chica.style.opacity=0;
spideyCentral.style.opacity=0;
spideyNegro.style.opacity=0;
cuerdaDerecha.style.opacity=0;
cuerdaIzquierda.style.opacity=0;

cuerdaIzquierda.style.opacity=0;
cuerdaDerecha.style.opacity=0;

window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY;
    if(scroll>=0 && scroll<200){
        chica.style.opacity = scroll * 0.5;
        spideyCentral.style.opacity = scroll * 0.5;
        spideyNegro.style.opacity = scroll * 0.5;
        cuerdaDerecha.style.opacity = scroll * 0.8;
        cuerdaIzquierda.style.opacity = scroll * 0.8;
    }
    if(scroll>=200 && scroll<=350){
        cuerdaIzquierda.style.opacity=0;
        cuerdaDerecha.style.opacity=0;

        chica.style.left = scroll * 3 + "px";
        chica.style.top = scroll * 3 + "px";

        
        spideyCentral.style.left = scroll * 2 + "px";

        
        spideyNegro.style.left = scroll * 3 + "px";
        spideyNegro.style.skew = scroll*0.1 +"deg";

    }
    
})
