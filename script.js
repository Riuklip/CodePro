window.addEventListener("scroll", function(){

    var navigation=document.querySelector("header");
    var header=document.querySelector(".sect_bienv");

    navigation.classList.toggle("sticky",window.scrollY>0);

    header.classList.toggle("translate",window.scrollY>0);
    

});
var desarrolladores= [
    {nombre:"Brandon",
    img:"Terrorist.ico",
    telefono:"56655810",
    email:"brandonr00016",
    desc:"Estudiante de tercer año de la carrera de Ingeniería en Telecomunicaciones y Electrónica",
    },
    {nombre:"Elí Carlos",
    img:"Terrorist 2.ico",
    telefono:"56096338",
    email:"eliclpere",
    desc:"Estudiante de tercer año de la carrera de Ingeniería en Telecomunicaciones y Electrónica",
    }
];

const $template_devs=document.getElementById("templ_devs").content;
const $cont_devs=document.querySelector("#contenido_dev");
const $fragm_devs=document.createDocumentFragment();

desarrolladores.forEach(el => {

    $template_devs.querySelector("img").setAttribute("src",el.img);
    $template_devs.querySelector("img").setAttribute("alt",el.nombre);
    $template_devs.querySelector("h3").textContent=el.nombre;
    $template_devs.querySelector("p").textContent=el.desc;
    $template_devs.querySelector("h4").textContent=el.telefono;
    $template_devs.querySelector("a").textContent=el.email;
    $template_devs.querySelector("a").setAttribute("href","mailto:"+el.email+"@gmail.com");



    let $clon = document.importNode($template_devs,true);
    $fragm_devs.appendChild($clon);
});

$cont_devs.appendChild($fragm_devs);
