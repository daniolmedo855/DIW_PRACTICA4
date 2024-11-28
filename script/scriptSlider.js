const contadores = new Map();    

function limpiar(elemento){
    elemento.innerHTML="";
}

function mostrar_buscador(array){
    let buscador = document.querySelector("#buscador");

    if(buscador.querySelector("div") != null){
        buscador.querySelector("div").remove();
    }

    let lista = document.createElement("div");
    let ul = document.createElement("ul");
    array.forEach(zapatilla => {
        let li = document.createElement("li");
        li.innerHTML = `<img src="${zapatilla.img}"><p>${zapatilla.titulo}</p><p>${zapatilla.precio}</p>`;
        li.addEventListener("click", ()=>{
            window.location.href = "../html/compra.html?id="+zapatilla.id;
        })
        
        ul.append(li);
    });
    
    lista.append(ul);
    buscador.append(lista);
}

function posicion(n, length) {
    return (n + length) % length;
}
    
function mostrar_caja(section, div, array, titulo) {
    if (!contadores.has(div)) {
        contadores.set(div, 0);
    }

    const contador = contadores.get(div);

    div.innerHTML = `
        <h3>${titulo}</h3>
        <div class="slider-content">
            <button class="btn-anterior">&#10094;</button>
            <div class="slider-images">
                <div>
                    <img src="${array[posicion(contador, array.length)].img}">
                    <div>
                        <h4>${array[posicion(contador, array.length)].titulo}</h4>
                        <a href="../html/compra.html?id=${array[posicion(contador , array.length)].id}"><img src="../img/iconos/comprar.png"></a>
                    </div>
                </div>
                <div>
                    <img src="${array[posicion(contador + 1, array.length)].img}">
                    <div>
                        <h4>${array[posicion(contador + 1, array.length)].titulo}</h4>
                        <a href="../html/compra.html?id=${array[posicion(contador + 1, array.length)].id}"><img src="../img/iconos/comprar.png"></a>
                    </div>
                </div>
                <div>
                    <img src="${array[posicion(contador + 2, array.length)].img}">
                    <div>
                        <h4>${array[posicion(contador + 2, array.length)].titulo}</h4>
                        <a href="../html/compra.html?id=${array[posicion(contador + 2, array.length)].id}"><img src="../img/iconos/comprar.png"></a>
                    </div>
                </div>
            </div>
            <button class="btn-siguiente">&#10095;</button>
        </div>
    `;

    const btnAnterior = div.querySelector(".btn-anterior");
    const btnSiguiente = div.querySelector(".btn-siguiente");

    btnAnterior.addEventListener("click", () => {
        const contadorActual = contadores.get(div);
        contadores.set(div, contadorActual - 1);
        actualizar_slider(div, array);
    });

    btnSiguiente.addEventListener("click", () => {
        const contadorActual = contadores.get(div);
        contadores.set(div, contadorActual + 1);
        actualizar_slider(div, array);
    });

    section.appendChild(div);
}

function actualizar_slider(div, array) {
    const contador = contadores.get(div);
    const sliderImages = div.querySelector(".slider-images");
    sliderImages.innerHTML = `
        <div>
            <img src="${array[posicion(contador, array.length)].img}">
            <div>
                <h4>${array[posicion(contador, array.length)].titulo}</h4>
                <a href="../html/compra.html?id=${array[posicion(contador , array.length)].id}"><img src="../img/iconos/comprar.png"></a>
            </div>
        </div>
        <div>
            <img src="${array[posicion(contador + 1, array.length)].img}">
            <div>
                <h4>${array[posicion(contador + 1, array.length)].titulo}</h4>
                <a href="../html/compra.html?id=${array[posicion(contador + 1, array.length)].id}"><img src="../img/iconos/comprar.png"></a>
            </div>
        </div>
        <div>
            <img src="${array[posicion(contador + 2, array.length)].img}">
            <div>
                <h4>${array[posicion(contador + 2, array.length)].titulo}</h4>
                <a href="../html/compra.html?id=${array[posicion(contador + 2, array.length)].id}"><img src="../img/iconos/comprar.png"></a>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", ()=>{
    /*BUSCADOR*/
    let buscador = document.querySelector("#buscador");

        buscador.addEventListener("input", (e)=>{
            let texto = e.target.value.trim().toLowerCase();
            if(texto!=""){
                let array_busqueda = deportivo.filter(zapatilla=>zapatilla.titulo.toLowerCase().includes(texto));
                mostrar_buscador(array_busqueda);
            } else {
                limpiar(buscador.querySelector("div"));
            }
                
        });

    
 
    /*SLIDDER*/
    let div_deportivo = document.querySelector("#deportivo");
    let div_casual = document.querySelector("#casual");

    let array_deportivo_hombre = deportivo.filter(zapatilla=>zapatilla.categoria=="hombre")
    let array_deportivo_mujer = deportivo.filter(zapatilla=>zapatilla.categoria=="mujer");
    let array_deportivo_nino = deportivo.filter(zapatilla=>zapatilla.categoria=="niño");

    let array_casual_hombre = casual.filter(zapatilla=>zapatilla.categoria=="hombre")
    let array_casual_mujer = casual.filter(zapatilla=>zapatilla.categoria=="mujer");
    let array_casual_nino = casual.filter(zapatilla=>zapatilla.categoria=="niño");

    let div_deportivo_hombre = document.createElement("div");
    let div_deportivo_mujer = document.createElement("div");
    let div_deportivo_nino = document.createElement("div");

    let div_casual_hombre = document.createElement("div");
    let div_casual_mujer = document.createElement("div");
    let div_casual_nino = document.createElement("div");

    let titulo_hombre = "Hombre";
    let titulo_mujer = "Mujer";
    let titulo_nino = "Niño";

    mostrar_caja(div_deportivo, div_deportivo_hombre, array_deportivo_hombre, titulo_hombre);
    mostrar_caja(div_deportivo, div_deportivo_mujer, array_deportivo_mujer, titulo_mujer);
    mostrar_caja(div_deportivo, div_deportivo_nino, array_deportivo_nino, titulo_nino);

    mostrar_caja(div_casual, div_casual_hombre, array_casual_hombre, titulo_hombre);
    mostrar_caja(div_casual, div_casual_mujer, array_casual_mujer, titulo_mujer);
    mostrar_caja(div_casual, div_casual_nino, array_casual_nino, titulo_nino);
});