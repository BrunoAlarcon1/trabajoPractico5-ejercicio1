
const iniciarJuego = () => {
  numeroSorteado = Math.floor(Math.random() * 10);
  const mostrarConsigna = document.querySelector("h3");
  const mostrarInput = document.querySelector(".input-container");
  const botonIniciar = document.querySelector("button");
  const seccion = document.querySelector(".contenedor");
  console.log(numeroSorteado);
  console.log(botonEnviar);
  botonIniciar.remove();
  console.log(mostrarInput);
  mostrarInput.classList.remove("d-none");
  mostrarInput.classList.add("mt-3", "d-block", "mx-auto");

  mostrarConsigna.classList.remove("d-none");
  seccion.appendChild(botonEnviar);
  botonEnviar.classList.add("btn", "btn-primary", "mt-3", "d-block", "mx-auto");
};



const comprobarNumero = ()=>{

}

let numeroSorteado = 0;
const botonEnviar = document.createElement("button");
botonEnviar.innerText = "Enviar";
botonEnviar.onclick = function (){
    const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroUsuario)
    if(numeroUsuario===numeroSorteado){
        alert(`Felicidades adivinaste! El numero era el ${numeroSorteado}`);
    }else if (numeroUsuario>numeroSorteado){
        alert(`El numero que ingresaste es mayor al numero sorteado`);
    }else{
        alert(`El numero que ingresaste es menor al numero sorteado`);

    }

}
