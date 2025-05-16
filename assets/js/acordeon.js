document.querySelectorAll('.pregunta-acordeon').forEach(button => {
    button.addEventListener('click', () => {

        button.classList.toggle('activo');
        const respuesta = button.nextElementSibling;
        respuesta.classList.toggle('mostrar');
    });
});