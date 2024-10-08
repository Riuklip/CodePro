export default function hamburgerMenu(e,menu,boton){
    const d=document;    
   
    
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
    }


