document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', startCountdown);
});


function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let timeLeft = 10; // 

    let countdownTimer = setInterval(function() {
        countdownElement.innerHTML = `Redirigiendo en ${timeLeft} segundos...`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            location.href = 'form.html';
        }
    }, 1000);
}

