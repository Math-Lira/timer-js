function relogio() {
  const relogio = document.querySelector('.relogio');

let secunds = 0;
let timer;

//=== função de criar hora de segundos===\\
function getTimeFromSecunds(secunds) {
  const data = new Date(secunds * 1000);

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

//=== função de iniciar relogio ===\\
function iniciaRelogio() {
  timer = setInterval(function() {
    secunds++;
    relogio.innerHTML = getTimeFromSecunds(secunds);
  }, 1000)
}

document.addEventListener('click', function(event){
  const elemento = event.target;
  
  if(elemento.classList.contains('iniciar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }

  if(elemento.classList.contains('pausar')){
    clearInterval(timer);
    relogio.classList.add('pausado');
  }
  
  if(elemento.classList.contains('zerar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    secunds = 0;
  }
});
}

relogio();