export default function hamburgerMenu(e,menu,boton){
    const d=document;    
    if(e.target.matches(boton) || e.target.matches(".menu_button *")){
        d.querySelector(menu).classList.toggle("is-active");
        d.querySelector(boton).classList.toggle("is-active");
        
        
    }
    
}

