const url_string = window.location.href 
const url = new URL(url_string);
const id = url.searchParams.get("id");

let img = document.querySelector("#editor>div>img")
let titulo = document.querySelector("#editor>div>div>div>h2");
let precio = document.querySelector("#editor>div>div>div>p");
let tallas = document.querySelector("#editor>div>div>div:nth-child(3)");
let colores = document.querySelector("#editor>div>div>div:nth-child(4)");

let descripcion = document.querySelector("#informacion>div>p");

let blanco = document.createElement("div");
blanco.classList.add("blanco");
let negro = document.createElement("div");
negro.classList.add("negro");
let azul = document.createElement("div");
azul.classList.add("azul");
let marron = document.createElement("div");
marron.classList.add("marron");
let gris = document.createElement("div");
gris.classList.add("gris");
let naranja = document.createElement("div");
naranja.classList.add("naranja");

let zapatilla = deportivo.find(zapatilla => zapatilla.id == id);

if(zapatilla==null){
    zapatilla = casual.find(zapatilla => zapatilla.id == id);
}

let array_tallas=[];

function mostrar_tallas(){
    for(let i=38;i<43;i++){
        let talla = document.createElement("button");
        talla.textContent=i;
        
        talla.addEventListener("click", ()=>{
            pulsar_talla(talla);
        });

        array_tallas.push(talla);

        tallas.append(talla);
    }
}

function pulsar_talla(talla){
    array_tallas.forEach(talla => {
        talla.classList.remove("seleccionado");
    });
    talla.classList.add("seleccionado");
}

function mostrar_colores(){
    let color_div = document.createElement("div");
    for (const color in zapatilla.colores) {
        color_div.classList.add("colores");
        let color_boton = document.createElement("button");
        color_boton.classList.add(color);

        color_div.append(color_boton);

        color_boton.addEventListener("click", ()=>{
            img.src=zapatilla.colores[color];    
        });
    }
    colores.append(color_div);
}

document.addEventListener("DOMContentLoaded", ()=>{
    img.src=zapatilla.img;
    titulo.textContent=zapatilla.titulo;
    precio.textContent=zapatilla.precio;

    descripcion.textContent=zapatilla.descripcion;

    mostrar_tallas();
    mostrar_colores();
});