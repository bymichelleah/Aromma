function cards (imagen, estrella, cantidad, descripcion, precio, corazon  ){
        let Bebidas_cards = 
        `<article class="card">
            <img class="img-card" src="./assets/img/${imagen}.png" alt="bebidas">
            <div class="contenido-card">
                <div class="cantidad">
                    <img src="./assets/img/${estrella}.png" alt="">
                    <p>${cantidad}</p>
                </div>
                <div class="datos">
                    <h3>${descripcion}</h3>
                    <div class="datos-extras">
                        <p>${precio}</p>
                        <img src="./assets/img/${corazon}.png" alt="">
                    </div>
                </div>
            </div>
        </article>`;

        return Bebidas_cards;
}

export default cards