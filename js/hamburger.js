export default function hamburgerMenu(e,menu,boton){
    const d=document;    
    const $navel=d.querySelectorAll(".nav_elem")
    
    var pulsado=e.target.classList;
    if(e.target.matches(boton) || e.target.matches(".menu_button *")){
        d.querySelector(menu).classList.toggle("is-active");
        d.querySelector(boton).classList.toggle("is-active");
        console.log(d.querySelector(boton).classList);
        let botonClass= d.querySelector(boton).classList
        console.log(botonClass.contains("is-active"))
         if (botonClass.contains("is-active")){
            disableScroll()
         }else{
             
            enableScroll()
            };
         }
        
         function disableScroll() {
            d.body.classList.add("desactiva_scroll");
            console.log("Scroll desactivado")
        }
        
        function enableScroll() {
            d.body.classList.remove("desactiva_scroll");
          
        }
        console.log(pulsado)
       
            
            if (pulsado.contains("nav_elem")) {
                d.querySelector(menu).classList.remove("is-active");
                d.querySelector(boton).classList.remove("is-active");
                d.body.classList.remove("desactiva_scroll");
            }

      


    }


