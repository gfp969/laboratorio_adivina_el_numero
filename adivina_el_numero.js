//Adivina el numero
const numeroAleatorio = Math.floor(Math.random()*100)+1;

function AdivinarNumero() {
    const barraNumero = parseInt(document.getElementById('Barra').value);
    
    if (barraNumero === numeroAleatorio) {
        document.getElementById('resultado').textContent = 'Acertaste el numero correcto: '+numeroAleatorio;
    } else if (barraNumero < numeroAleatorio) {
        document.getElementById('resultado').textContent = 'El numero es mayor :/';
    } else {
        document.getElementById('resultado').textContent = 'El numero es menor :/';
    }
}

function reiniciarJuego() {
    location.reload();
  }
