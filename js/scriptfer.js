// punto 2 

var cambioFoto = document.getElementById('cambioFoto');

cambioFoto.addEventListener('mouseover', function() {

    cambioFoto.src = 'Fotos/fernando/blogs.jpg';
});

cambioFoto.addEventListener('mouseout', function() {

    cambioFoto.src = 'Fotos/fernando/mathias-rosenthal---fotolia-com.jpg';
});



// punto 3 


function currentTime() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var sc = date.getSeconds();
    var numeroDia = date.getDay()
    var nombreDia = obtenerDia(numeroDia); 
    var numeroMes = date.getMonth();
    var nombreMes = obtenerMes(numeroMes); 
    var numeroA = date.getFullYear(); 

    var ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;
    hh = hh ? hh : 12; 

    
    hh = (hh<10) ? "0"+ hh : hh;
    mm = (mm<10) ? "0"+ mm : mm;
    sc = (sc<10) ? "0"+ sc : sc;

    var mensaje1 = nombreDia + '\n' + numeroDia + '\n' + 'de ' + nombreMes + ' de ' + numeroA; 
    var mensaje2 = hh + ':' + mm + ':' + sc + ' ' + ampm;

    var watch = document.querySelector('#reloj'); 
    watch.innerHTML = mensaje1 +'<br>'+ '<br>' + mensaje2 ; 
}

setInterval(currentTime, 1000); 



function obtenerDia(numeroDeDia) {
    const diasDeLaSemana =['Domingo','Lunes','Martes','Mercoles','Jueves','Viernes','Sabado']
    const nombreDeDia = diasDeLaSemana[numeroDeDia];
    return nombreDeDia; 
} 

function obtenerMes(numeroDeMes) {
    const mesDelAno = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const nombreDeMes = mesDelAno[numeroDeMes]; 
    return nombreDeMes; 
}

// camvbio de fondo de reloj y color de fuente

var reloj = document.getElementById('reloj')

reloj.addEventListener('mouseover', function(){
    reloj.style.backgroundColor = 'yellow';
    reloj.style.color ='gray'
});

reloj.addEventListener('mouseout', function(){
    reloj.style.backgroundColor = '#4DB6AC';
    reloj.style.color ='black'
});


//bonustrack : comfirmacion de redireccionamineto

var youtubeLink = document.getElementById('youtube');
var linkedinLink = document.getElementById('linkedin');
var facebookLink = document.getElementById('facebook');
var instagramLink = document.getElementById('instagram');

if (youtubeLink) {
    youtubeLink.addEventListener("click", function(event) {
        event.preventDefault();
        const userConfirmed = confirm('Quieres redirigir a youtube?')
        if(userConfirmed) {
            window.location.href =youtubeLink.href;
        }
    });
}


if (linkedinLink) {
    linkedinLink.addEventListener("click", function(event) {
        event.preventDefault();
        const userConfirmed = confirm('Quieres redirigir a youtube?')
        if(userConfirmed) {
            window.location.href =linkedinLink.href;
        }
    });
}

if (facebookLink) {
    facebookLink.addEventListener("click", function(event) {
        event.preventDefault();
        const userConfirmed = confirm('Quieres redirigir a youtube?')
        if(userConfirmed) {
            window.location.href =facebookLink.href;
        }
    });
}

if (instagramLink) {
    instagramLink.addEventListener("click", function(event) {
        event.preventDefault();
        const userConfirmed = confirm('Quieres redirigir a youtube?')
        if(userConfirmed) {
            window.location.href = instagramLink.href;
        }
    });
}
