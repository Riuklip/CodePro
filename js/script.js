import hamburgerMenu from "./hamburger.js";
import alternarjs from "./alternar.js";
import carrusel from "./desplazar_carrusel.js";
import accion_puntos  from "./acciones_puntos.js";

const d=document;

d.addEventListener("click",(e)=>{
    hamburgerMenu(e,".hidden_menu",".menu_button");
    accion_puntos(e,".punto",".container_gen_2");
})
window.addEventListener("scroll", function(){

    var navigation=document.querySelector("header");
    // var header=document.querySelector(".inicio_sn");

    navigation.classList.toggle("sticky",window.scrollY>0);

    // header.classList.toggle("translate",window.scrollY>0);
    

});

d.addEventListener("DOMContentLoaded",()=>{
alternarjs("#h2_1","#h2_2");

setTimeout(() => {
    carrusel(1);
}, 5000);
})


