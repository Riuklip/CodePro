const $puntos = document.querySelectorAll(".punto");
const $slides=document.querySelectorAll(".container_2")
export default function accion_puntos(evento,pulsar,contenedor) {
  const $contain=document.querySelector(contenedor);
  const elemento=document.querySelector(contenedor);
    var pulsado=evento.target;
  
     $puntos.forEach(Element => {
       if (pulsado.matches(pulsar)) {
        $puntos.forEach(element => {
          element.classList.remove("active");
          evento.target.classList.add("active")
        });




          if (pulsado.matches(".punto_1")) {
           $slides.forEach(element => {
             element.classList.remove("active");
             $slides[0].classList.add("active")
           });
            elemento.style.transform = `translateX(0%)`;
              console.log(1)
            }else if (pulsado.matches(".punto_2")){
             $slides.forEach(element => {
                 element.classList.remove("active");
                 $slides[1].classList.add("active")
                
               });
                console.log(2)
                elemento.style.transform = `translateX(-33.333%)`;
              }else if (pulsado.matches(".punto_3")){
           $slides.forEach(element => {
             element.classList.remove("active");
             $slides[2].classList.add("active")
            
           });
            console.log(3)
            elemento.style.transform = `translateX(-66.666%)`;
          }




        
       }
   });
  }