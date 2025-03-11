import cards from "./components/bebidas_cards.js";
import Bebidas_cards from "./data/bebidas_cards.js";

window.document.addEventListener("DOMContentLoaded", function(){
    let contenedor_bebidas = document.getElementById("bebidas-favoritas")
    Bebidas_cards.forEach(iterador => {
        let component = cards(iterador.imagen, iterador.estrella, iterador.cantidad, iterador.descripcion, iterador.precio, iterador.corazon)
        contenedor_bebidas.insertAdjacentHTML("beforeend", component)
    });
})