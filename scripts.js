// HOVER DE ICONO NEGRO A BLANCO //

document.getElementById('boton-busqueda').addEventListener('mouseenter', function() {
    document.querySelector('.imagen-boton-busqueda').classList.add('blanco');
});

document.getElementById('boton-busqueda').addEventListener('mouseleave', function() {
    document.querySelector('.imagen-boton-busqueda').classList.remove('blanco');
});