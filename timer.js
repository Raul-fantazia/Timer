


function criarHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

let segundos = 0;
let timer;

// inicia a contagem no cronometro
function iniciar() {
  timer = setInterval(function() {
    segundos++;
    const relogio = document.querySelector('.relogio');
    relogio.innerHTML = criarHoraDosSegundos(segundos);
  }, 1000);
}

// pausa a contagem 

function pausar () {
    clearInterval(timer);

}

// zera a contagem 

function zerar () {
    clearInterval(timer);
    segundos = 0;
    const relogio = document.querySelector('.relogio');
    relogio.innerHTML = '00:00:00';

}