function updateClock() {
    // Obtener la hora actual en la zona horaria de Buenos Aires
    var now = new Date().toLocaleString('en-US', {timeZone: 'America/Argentina/Buenos_Aires'});
    now = new Date(now);

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Obtener el día de la semana, el número del día y el año
    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var dayOfWeek = days[now.getDay()];
    var dayOfMonth = now.getDate();
    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var month = monthNames[now.getMonth()];
    var year = now.getFullYear();

    // Añade ceros a la izquierda si es necesario
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Actualiza el contenido de los elementos span para la hora
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Muestra la fecha en el formato deseado
    document.getElementById('date').innerText = `${dayOfWeek} ${dayOfMonth} de ${month} de ${year}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializa el reloj al cargar la página
updateClock();