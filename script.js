const pantalla = document.querySelector(".pantallaN");
const botontes = document.querySelectorAll(".ope");

botontes.forEach(boton=>{
    boton.addEventListener("click", ()=>{
        const botonApretado = boton.textContent

        if (boton.id === "borrar"){
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "quitar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent ="0"
            }
            else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual" ){
            try {
                pantalla.textContent = eval (pantalla.textContent);
            } catch{
                pantalla.textContent = "Error"
            }
            return;
        }


        if (pantalla.textContent==="0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonApretado;
        }
        else{
            pantalla.textContent += botonApretado;
        }

    })
})