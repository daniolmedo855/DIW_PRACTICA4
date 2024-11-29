const url_string = window.location.href 
const url = new URL(url_string);
const id = url.searchParams.get("id");
const calzado = url.searchParams.get("calzado");

let img = document.querySelector("#editor>div>img")
let titulo = document.querySelector("#editor>div>div>div>h2");
let precio = document.querySelector("#editor>div>div>div>p");
let tallas = document.querySelector("#editor>div>div>div:nth-child(3)");
let colores = document.querySelector("#editor>div>div>div:nth-child(4)");

let descripcion = document.querySelector("#informacion>div>p");
let boton_pedir = document.querySelector("#informacion>div>button");

let pedidos = document.querySelector("#informacion>div:last-child>div");

let resenias = document.querySelector("#resenias>div>div");

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

let zapatilla;

if(calzado=="c"){
    zapatilla = casual.find(zapatilla => zapatilla.id == id);
} else {
    zapatilla = deportivo.find(zapatilla => zapatilla.id == id);
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

function random(){
    return parseInt(Math.random() * 14);
}


function imagen_random(){
    let genero ="";
    if((Math.random()*(2-1) +1)>1){
        genero = "men";
    }else{
        genero = "women";
    }
    let numero = parseInt(Math.random() * (80-1) + 1);
    let toRet= `https://randomuser.me/api/portraits/${genero}/${numero}.jpg`;
    return toRet;
}

function mostrar_comentarios(){
    for (let i = 0; i < 3; i++) {
        let n = random();
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let pCal = document.createElement("p");
        let pComen = document.createElement("p");
        pComen.textContent=comentarios[n].comentario;
        pCal.textContent=comentarios[n].calificacion;
        let h4 = document.createElement("h4");
        h4.textContent=comentarios[n].nombre
        let img = document.createElement("img");
        img.src=imagen_random();
        div.append(img);
        div2.append(pCal);
        div2.append(pComen);
        div2.append(h4);
        div.append(div2);
        resenias.append(div);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    img.src=zapatilla.img;
    titulo.textContent=zapatilla.titulo;
    precio.textContent=zapatilla.precio;

    descripcion.textContent=zapatilla.descripcion;

    pedidos.style.display="none";

    boton_pedir.addEventListener("click", ()=>{
        if(pedidos.style.display=="none"){
            pedidos.style.display="block";
        }else{
            pedidos.style.display="none";
        }
    })
    mostrar_comentarios();
    mostrar_tallas();
    mostrar_colores();
});