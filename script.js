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
const menuDesplegado = document.querySelector(".menu-desplegado");

menuHamburguesa.addEventListener("click", () => {
  menuHamburguesa.classList.toggle("cruz");
  menuDesplegado.classList.toggle("desplegar");
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

/*-------------------Parallax Portada-------------*/

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
    if(scroll>=0 && scroll<150){
        chica.style.opacity = scroll * 0.5;
        spideyCentral.style.opacity = scroll * 0.5;
        spideyNegro.style.opacity = scroll * 0.5;
        cuerdaDerecha.style.opacity = scroll * 0.8;
        cuerdaIzquierda.style.opacity = scroll * 0.8;;
}
    if(scroll>=150 && scroll<=350){
        cuerdaIzquierda.style.opacity=0;
        cuerdaDerecha.style.opacity=0;

        chica.style.left = scroll * 3 + "px";
        chica.style.top = scroll * 3 + "px";

        
        spideyCentral.style.left = scroll * 2 + "px";
        edificioIzq.style.top = scroll * 0.8 + "px";

        edificioDer.style.top = scroll * 0.85 + "px";

        
        spideyNegro.style.left = scroll * 3 + "px";
        spideyNegro.style.skew = scroll*0.1 +"deg";

    }
    
})
/*-------Cards chicas---------*/
// Obtener las cards
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
      
window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY;
    if(scroll>=1150){
  // Función para mostrar la card con un retraso
  function showCard(card, delay) {
    setTimeout(function () {
      card.style.opacity = 1;
    }, delay);
  }

  // Mostrar cada card con un retraso diferente
  showCard(card1, 500); // Card 1 aparece después de 500ms
  showCard(card2, 1000); // Card 2 aparece después de 1000ms
  showCard(card3, 1500); // Card 3 aparece después de 1500ms
}
  });


/*--------------------Tarjetas test--------*/
const test1 = document.getElementById("test1");
const test2 = document.getElementById("test2");
const test3 = document.getElementById("test3");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll >= 2200 && scroll < 2900) {
    // Mostrar cada card con un retraso diferente
    showTest1(test1, 200); // Card 1 aparece después de 200ms
    showTest2(test2, 400); // Card 2 aparece después de 600ms
    showTest3(test3, 600); // Card 3 aparece después de 800ms
  } else if (scroll >= 2900 || scroll<2200) {
    // Restablecer la posición y las transformaciones cuando el scroll supera los 2900 px
    resetTest1(test1);
    resetTest2(test2);
    resetTest3(test3);
  }

  function showTest1(test1, delay) {
    setTimeout(function () {
      test1.style.top = scroll * 0.001 + "px";
      test1.style.transform = `rotate(${scroll * 0.003}deg)`;
    }, delay);
  }

  function showTest2(test2, delay) {
    setTimeout(function () {
      test2.style.top = scroll * 0.006 + "px";
      test2.style.transform = `skew(${scroll * 0.003}deg) rotate(${scroll * 0.003}deg)`;
    }, delay);
  }

  function showTest3(test3, delay) {
    setTimeout(function () {
      test3.style.top = scroll * 0.01 + "px";
      test3.style.transform = `skew(${scroll * 0.003}deg) rotate(${scroll * 0.003}deg)`;
    }, delay);
  }

  // Funciones para restablecer las tarjetas a su posición y transformación inicial
  function resetTest1(test1) {
    test1.style.top = "-150px";
    test1.style.transform = "scale(1) rotate(0deg)";
  }

  function resetTest2(test2) {
    test2.style.top = "20px";
    test2.style.transform = "skew(0deg) rotate(0deg)";
  }

  function resetTest3(test3) {
    test3.style.top = "150px";
    test3.style.transform = "skew(0deg) rotate(0deg)";
  }
});
