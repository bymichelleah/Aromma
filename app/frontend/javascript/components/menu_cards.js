function cards (imagen, nombre, descripcion, precio, boton){
    let Menu_cards = 
    `<article class="card">
        <div class="imagen-card">
            <img src="../assets/img/${imagen}.png" alt="">
        </div>
        <div class="contenido-card">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <div class="contenido-datos">
                <p>${precio}</p>
                <a href="">${boton}</a>
            </div>
        </div>
    </article>`

    return Menu_cards;
}

export default cards;