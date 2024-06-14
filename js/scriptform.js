const respuestasCorrectas = {
    q1: "4",
    q2: "IFTS",
    q3: "Mate",
    q4: "Aries",
    q5: "Rosario",
    q6: "Gato-Chiky",
    q7: "Velez",
    q8: "Playa",
    q9: "Gato",
    q10: "Backtothefuture",
};

document.getElementById('cuestionarioform').addEventListener('submit', function(event) {
    event.preventDefault();
    let puntaje = 0;
    const respuestasUsuario = new FormData(event.target);
    
    respuestasUsuario.forEach((respuesta, pregunta) => {
        if (respuesta.toLowerCase() === respuestasCorrectas[pregunta].toLowerCase()) {
            puntaje += 1;
        }
    });

    let mensaje = '';
    if (puntaje === 10) {
        mensaje = '¡Felicitaciones! Obtuvo el máximo puntaje, eres un gran fan';
    } else if (puntaje >= 7) {
        mensaje = '¡Buen trabajo! Estuviste cerca de ser un gran fan';
    } else if (puntaje >= 5) {
        mensaje = '¡Aprobado! Podrias volver a mirar el blog';
    } else if (puntaje >= 3) {
        mensaje = 'Parece que nuestro blog no fue muy interesante, le erraste feo';
    } else {
        mensaje = 'No le pegaste a una, te recomendaria mirar nuestro blog con tiempo';
    }

    document.getElementById('resultado').textContent = `Puntaje total: ${puntaje}. ${mensaje}`;
    document.getElementById('resultado').style.display = 'block';

    
});