export default function alternarjs(saludo1,saludo2){
    const d=document;
    setInterval(() => {

        d.querySelector(saludo1).classList.toggle("shown");
        d.querySelector(saludo2).classList.toggle("hidden")
        d.querySelector(saludo2).classList.toggle("shown");
        d.querySelector(saludo1).classList.toggle("hidden")
    }, 3000);





}