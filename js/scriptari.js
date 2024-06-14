document.addEventListener("DOMContentLoaded", function () {
    const imagen = document.getElementById("imagen-cambiable");
  
    const imagenOriginal = imagen.src;
  
    const nuevaImagen = "Fotos/arianne/moto.jpg";
  
    imagen.onmouseover = function () {
      imagen.src = nuevaImagen;
    };
  
    imagen.onmouseout = function () {
      imagen.src = imagenOriginal;
    };
  });
  const reloj = document.getElementById("reloj");
  
  function actualizarReloj() {
    const fecha = new Date();
  
    const diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const mes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
  
    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mesNombre = mes[fecha.getMonth()];
    const año = fecha.getFullYear();
  
    let horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    let periodo = "AM";
  
    if (horas >= 12) {
      periodo = "PM";
      if (horas > 12) {
        horas -= 12;
      }
    }
    const ceroDelante = (n) => (n < 10 ? "0" + n : n);
  
    const textoReloj = `${diaSemana} ${dia} de ${mesNombre} de ${año}<br>${ceroDelante(
      horas
    )}:${ceroDelante(minutos)}:${ceroDelante(segundos)} ${periodo}`;
  
    reloj.innerHTML = textoReloj;
  }
  setInterval(actualizarReloj, 1000);
  actualizarReloj();