import cards from "./components/menu_cards.js";
import Menu_cards from "./data/menu_cards.js";

window.document.addEventListener("DOMContentLoaded", function(){
    let contenedor_menu = document.getElementById("menu-bebidas")
    Menu_cards.forEach(iterador => {
        let component = cards(iterador.imagen, iterador.nombre, iterador.descripcion, iterador.precio, iterador.boton)
        contenedor_menu.insertAdjacentHTML("beforeend", component)
    });
})