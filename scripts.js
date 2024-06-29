// HOVER SHOW/HIDE CON EL BOTON DE NOTICIAS //

document.getElementById('boton-noticias').addEventListener('mouseenter', function() {
    document.querySelector('.noticias-hover').classList.add('show');
});

document.getElementById('id-noticias-hover').addEventListener('mouseenter', function() {
    document.querySelector('.noticias-hover').classList.add('show');
});

document.getElementById('boton-noticias').addEventListener('mouseleave', function() {
    document.querySelector('.noticias-hover').classList.remove('show');
});

document.getElementById('id-noticias-hover').addEventListener('mouseleave', function() {
    document.querySelector('.noticias-hover').classList.remove('show');
});

// HOVER DE ICONO NEGRO A BLANCO //

document.getElementById('boton-busqueda').addEventListener('mouseenter', function() {
    document.querySelector('.imagen-boton-busqueda').classList.add('blanco');
});

document.getElementById('boton-busqueda').addEventListener('mouseleave', function() {
    document.querySelector('.imagen-boton-busqueda').classList.remove('blanco');
});