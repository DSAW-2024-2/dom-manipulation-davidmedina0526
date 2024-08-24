window.onload = function () {
    
    const imagenes = [
        'assets/image_1.jpg',
        'assets/image_2.jpeg',
        'assets/image_3.jpeg'
    ];

    let posicionActual = 0;
    let botonAdelante = document.querySelector('.Adelante');
    let botonAtras = document.querySelector('.Atras');
    let imagen = document.querySelector('.Imagen');

    function pasarFoto() {
        if(posicionActual >= imagenes.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        actualizarImagen();
    }

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = imagenes.length - 1;
        } else {
            posicionActual--;
        }
        actualizarImagen();
    }

    function actualizarImagen () {
        imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`;
        botonAdelante.disabled = posicionActual === imagenes.length - 1;
        botonAtras.disabled = posicionActual === 0;

        if (posicionActual === 0) {
            botonAtras.style.display = 'none';
        } else {
            botonAtras.style.display = 'block'; //
        }
    
        if (posicionActual === imagenes.length - 1) {
            botonAdelante.style.display = 'none';
        } else {
            botonAdelante.style.display = 'block'; 
        }
    }

    function colorBoton(event) {
        if (event.target.tagName === 'BUTTON') {
            event.target.style.backgroundColor = '#60C1FB';
        }
    }

    function restaurarColorBoton(event) {
        if (event.target.tagName === 'BUTTON') {
            event.target.style.backgroundColor = '';
        }
    }

    botonAdelante.addEventListener('click', pasarFoto);
    botonAtras.addEventListener('click', retrocederFoto);
    botonAdelante.addEventListener('mouseover', colorBoton);
    botonAtras.addEventListener('mouseover', colorBoton);
    botonAdelante.addEventListener('mouseout', restaurarColorBoton);
    botonAtras.addEventListener('mouseout', restaurarColorBoton);

    actualizarImagen();
}