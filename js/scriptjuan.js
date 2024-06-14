function cambiarImagen(elemento) {
    elemento.src = "Fotos/Juan_Manuel/yodespues.jpg";
}

function restaurarImagen(elemento) {
    elemento.src = 'Fotos/Juan_Manuel/yo.jpeg';
}

function actualizarReloj() {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const ahora = new Date();
    const horaBuenosAires = new Date(ahora.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));

    const diaSemana = dias[horaBuenosAires.getDay()];
    const dia = horaBuenosAires.getDate();
    const mes = meses[horaBuenosAires.getMonth()];
    const año = horaBuenosAires.getFullYear();
    let horas = horaBuenosAires.getHours();
    const minutos = String(horaBuenosAires.getMinutes()).padStart(2, '0');
    const segundos = String(horaBuenosAires.getSeconds()).padStart(2, '0');
    const ampm = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12;
    horas = horas ? horas : 12; // El 0 debe ser 12

    const strHora = `${String(horas).padStart(2, '0')}:${minutos}:${segundos} ${ampm}`;
    const strFecha = `${diaSemana} ${dia} de ${mes} de ${año}`;

    document.getElementById('reloj').textContent = `${strFecha}\n${strHora}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Actualizar el reloj inmediatamente al cargar la página
actualizarReloj();