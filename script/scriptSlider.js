const deportivo=[{
    id:1,
    img:"../img/deportivo/deportivo (1).webp",
    titulo:"Cloudtilt",
    precio: "170,00 €",
    marca:"On Running",
    categoria:"hombre",
    colores:{
        azul:"../img/deportivo/deportivo (1).webp",
        blanco:"../img/deportivo/deportivo (1)_blanco.webp",
        negro:"../img/deportivo/deportivo (1)_negro.webp"
    }
},{
    id:2,
    img:"../img/deportivo/deportivo (2).webp",
    titulo:"TTNM EVO",
    precio: "220,00 €",
    marca:"Hugo BOSS",
    categoria:"hombre",
    colores:{
        negro:"../img/deportivo/deportivo (2).webp",
        marron:"../img/deportivo/deportivo (2)_marron.webp"
    }
},{
    id:3,
    img:"../img/deportivo/deportivo (3).webp",
    titulo:"JONAH RUN",
    precio: "220,00 €",
    marca:"Hugo BOSS",
    categoria:"hombre",
    colores:{
        negro:"../img/deportivo/deportivo (3).webp"
    }
},{
    id:4,
    img:"../img/deportivo/deportivo (4).webp",
    titulo:"AIR FORCE 1",
    precio: "120,00 €",
    marca:"Nike",
    categoria:"hombre",
    colores:{
        negro:"../img/deportivo/deportivo (4).webp",
        blanco:"../img/deportivo/deportivo (4)_blanco.webp",
        verde:"../img/deportivo/deportivo (4)_verde.webp"
    }
},{
    id:5,
    img:"../img/deportivo/deportivo (5).webp",
    titulo:"AIR MAX 90",
    precio: "150,00 €",
    marca:"Nike",
    categoria:"hombre",
    colores:{
        negro:"../img/deportivo/deportivo (5).webp",
        blanco:"../img/deportivo/deportivo (5)_blanco.webp",
        amarillo:"../img/deportivo/deportivo (5)_amarillo.webp"
    }
},{
    id:6,
    img:"../img/deportivo/deportivo (6).webp",
    titulo:"AIR MAX 95",
    precio: "190,00 €",
    marca:"Nike",
    categoria:"mujer",
    colores:{
        azul:"../img/deportivo/deportivo (6).webp",
        negro:"../img/deportivo/deportivo (6)_negro.webp",        
    }
},{
    id:7,
    img:"../img/deportivo/deportivo (7).webp",
    titulo:"AIR MAX DN",
    precio: "135,00 €",
    marca:"Nike",
    categoria:"mujer",
    colores:{
        naranja:"../img/deportivo/deportivo (7).webp",
        blanco:"../img/deportivo/deportivo (7)_blanco.webp",        
    }
    },{
        id:8,
        img:"../img/deportivo/deportivo (8).webp",
        titulo:"PEGASUS TRAIL",
        precio: "160,00 €",
        marca:"Nike",
        categoria:"mujer",
        colores:{
            negro:"../img/deportivo/deportivo (8).webp",
            azul:"../img/deportivo/deportivo (8)_azul.webp"
        }
    },{
        id:9,
        img:"../img/deportivo/deportivo (9).webp",
        titulo:"ADIDAS SAMBA",
        precio: "90,00 €",
        marca:"Adidas",
        categoria:"mujer",
        colores:{
            blanco:"../img/deportivo/deportivo (9).webp",
            verde:"../img/deportivo/deportivo (9)_verde.webp"
        }
    },{
        id:10,
        img:"../img/deportivo/deportivo (10).webp",
        titulo:"New Balance 530",
        precio: "120,00 €",
        marca:"New Balance",
        categoria:"mujer",
        colores:{
            blanco:"../img/deportivo/deportivo (10).webp",
            verde:"../img/deportivo/deportivo (10)_verde.webp"
        }
    },{
        id:11,
        img:"../img/deportivo/deportivo (11).webp",
        titulo:"CAMPUS 00s",
        precio: "95,00 €",
        marca:"Adidas",
        categoria:"niño",
        colores:{
            negro:"../img/deportivo/deportivo (11).webp",
            azul:"../img/deportivo/deportivo (11)_azul.webp"
        }
    },{
        id:12,
        img:"../img/deportivo/deportivo (12).webp",
        titulo:"HANDBALL SPEZIAL",
        precio: "85,00 €",
        marca:"Adidas",
        categoria:"niño",
        colores:{
            negro:"../img/deportivo/deportivo (12).webp",
            azul:"../img/deportivo/deportivo (12)_azul.webp"
        }
    },{
        id:13,
        img:"../img/deportivo/deportivo (13).webp",
        titulo:"DUNK LOW",
        precio: "85,00 €",
        marca:"Nike",
        categoria:"niño",
        colores:{
            azul:"../img/deportivo/deportivo (13).webp"
        }
    },{
        id:14,
        img:"../img/deportivo/deportivo (14).webp",
        titulo:"AIR FORCE 1 ´07",
        precio: "105,00 €",
        marca:"Nike",
        categoria:"niño",
        colores:{
            blanco:"../img/deportivo/deportivo (14).webp"
        }
    },{
        id:15,
        img:"../img/deportivo/deportivo (15).webp",
        titulo:"AIR MAX 90 ´07",
        precio: "75,00 €",
        marca:"Nike",
        categoria:"niño",
        colores:{
            negro:"../img/deportivo/deportivo (15).webp",
            azul:"../img/deportivo/deportivo (15)_azul.webp"
        }
    }];

document.addEventListener("DOMContentLoaded", ()=>{
    let div_deportivo = document.querySelector("#deportivo");
    let div_casual = document.querySelector("#casual");
    let div_personalizar = document.querySelector("#personalizar");

    let slidder = document.createElement("div");
    let flecha = document.createElement("button");

    let array_deportivo_hombre = deportivo.filter(zapatilla=>{zapatilla.categoria=="hombre"});
    let array_deportivo_mujer = deportivo.filter(zapatilla=>{zapatilla.categoria=="mujer"});
    let array_deportivo_nino = deportivo.filter(zapatilla=>{zapatilla.categoria=="niño"});

    let div_hombre = document.createElement("div");
    let div_mujer = document.createElement("div");
    let div_nino = document.createElement("div");

    array_deportivo_hombre.forEach(zapatilla => {
        let caja = document.createElement("div");

        caja.innerHTML = `
        <img src="${zapatilla.img}" alt="${zapatilla.titulo}">
        <div>
            <h4>${zapatilla.titulo}</h4>
            <button></button>
            <button></button>
        </div>
        `;
    });

    
});
