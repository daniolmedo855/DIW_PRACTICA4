document.addEventListener("DOMContentLoaded", ()=>{
    let boton = document.querySelectorAll("footer>div>div:first-child>div>p");

    boton.forEach(btn => {
        btn.style.cursor="pointer";
        let lista = btn.parentElement.querySelector("div");

        lista.style.display="none";

        btn.addEventListener("click", ()=>{
            if(lista.style.display=="none"){
                lista.style.display="inline-block";
            }else{
                lista.style.display="none";
            }
        });
    })

    
});