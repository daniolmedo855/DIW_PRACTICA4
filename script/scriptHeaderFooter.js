document.addEventListener("DOMContentLoaded", ()=>{
    //header
    let botonHeader = document.querySelector("header>div>div>button");
    let menuHeader = document.querySelectorAll("header>div>a");

    botonHeader.addEventListener("click", ()=>{
        menuHeader.forEach(a => {
            if(a.style.display=="none"){
                a.style.display="block";
            }else{
                a.style.display="none";
            }
        })
        
    });

    //footer
    let botonFooter = document.querySelectorAll("footer>div>div:first-child>div>p");

    botonFooter.forEach(btn => {
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