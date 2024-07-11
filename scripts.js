// HOVER DE ICONO NEGRO A BLANCO //

document.getElementById('boton-busqueda').addEventListener('mouseenter', function() {
    document.querySelector('.imagen-boton-busqueda').classList.add('blanco');
});

document.getElementById('boton-busqueda').addEventListener('mouseleave', function() {
    document.querySelector('.imagen-boton-busqueda').classList.remove('blanco');
});

// CAMBIO DE CARDS POR EL DROPDOWN //

document.addEventListener("DOMContentLoaded", function() {
    // Oculta todas las secciones de tarjetas al cargar la página
    document.getElementById("orden-alfabetico").style.display = "none";
    document.getElementById("wrap-cards-rock1").style.display = "none";
    document.getElementById("wrap-cards-rock2").style.display = "none";
    document.getElementById("wrap-cards-rock3").style.display = "none";
    document.getElementById("wrap-cards-hiphop1").style.display = "none";
    document.getElementById("wrap-cards-hiphop2").style.display = "none";
    document.getElementById("wrap-cards-hiphop3").style.display = "none";
    document.getElementById("wrap-cards-pop1").style.display = "none";
    document.getElementById("wrap-cards-pop2").style.display = "none";
    document.getElementById("wrap-cards-pop3").style.display = "none";

    document.getElementById("Selector").addEventListener("change", function() {
        // Obtén el valor del selector
        var genre = this.value;

        // Oculta todas las secciones de tarjetas
        document.getElementById("wrap-cards-genero1").style.display = "none";
        document.getElementById("wrap-cards-genero2").style.display = "none";
        document.getElementById("wrap-cards-genero3").style.display = "none";
        document.getElementById("wrap-cards-rock1").style.display = "none";
        document.getElementById("wrap-cards-rock2").style.display = "none";
        document.getElementById("wrap-cards-rock3").style.display = "none";
        document.getElementById("wrap-cards-hiphop1").style.display = "none";
        document.getElementById("wrap-cards-hiphop2").style.display = "none";
        document.getElementById("wrap-cards-hiphop3").style.display = "none";
        document.getElementById("wrap-cards-pop1").style.display = "none";
        document.getElementById("wrap-cards-pop2").style.display = "none";
        document.getElementById("wrap-cards-pop3").style.display = "none";

        // Muestra la sección de tarjetas correspondiente
        if (genre === "ROCK") {
            document.getElementById("orden-alfabetico").style.display = "flex";
            document.getElementById("ultimos-artistas").style.display = "none";
            document.getElementById("wrap-cards-rock1").style.display = "flex";
            document.getElementById("wrap-cards-rock2").style.display = "flex";
            document.getElementById("wrap-cards-rock3").style.display = "flex";
        } else if (genre === "HIP-HOP") {
            document.getElementById("orden-alfabetico").style.display = "flex";
            document.getElementById("ultimos-artistas").style.display = "none";
            document.getElementById("wrap-cards-hiphop1").style.display = "flex";
            document.getElementById("wrap-cards-hiphop2").style.display = "flex";
            document.getElementById("wrap-cards-hiphop3").style.display = "flex";
        } else if (genre === "POP") {
            document.getElementById("orden-alfabetico").style.display = "flex";
            document.getElementById("ultimos-artistas").style.display = "none";
            document.getElementById("wrap-cards-pop1").style.display = "flex";
            document.getElementById("wrap-cards-pop2").style.display = "flex";
            document.getElementById("wrap-cards-pop3").style.display = "flex";
        } else {
            document.getElementById("orden-alfabetico").style.display = "none";
            document.getElementById("ultimos-artistas").style.display = "flex";
            document.getElementById("wrap-cards-genero1").style.display = "flex";
            document.getElementById("wrap-cards-genero2").style.display = "flex";
            document.getElementById("wrap-cards-genero3").style.display = "flex";
        }
    });
});

// SEARCH BAR FUNCIONAL //

document.addEventListener("DOMContentLoaded", function() {
    // Añade el evento al botón de búsqueda
    document.querySelector(".search-button").addEventListener("click", function() {
        var searchQuery = document.getElementById("Search").value.toLowerCase();
        
        // Selecciona todas las tarjetas de artistas
        var artistCards = document.querySelectorAll(".card-artista");
        
        // Itera sobre todas las tarjetas de artistas
        artistCards.forEach(function(card) {
            var artistName = card.querySelector(".card-artista-nombre").innerText.toLowerCase();
            
            // Muestra u oculta la tarjeta según el resultado de la búsqueda
            if (artistName.includes(searchQuery)) {
                card.style.display = "block"; // Mostrar tarjeta

            } else {
                card.style.display = "none"; // Ocultar tarjeta
            }
        });
    });
});

// PERFIL DISCOGRAFIA //