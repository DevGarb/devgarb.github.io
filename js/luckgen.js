function gerarNumberAleatorio() {
  var numerosAleatorios = [];

  while (numerosAleatorios.length < 6) {
    var numeroAleatorio = Math.floor(Math.random() * 60) + 1;

    // Verifica se o número já foi gerado para evitar repetições
    if (
      numerosAleatorios.indexOf(numeroAleatorio) === -1 &&
      !saoConsecutivos(numerosAleatorios, numeroAleatorio)
    ) {
      numerosAleatorios.push(numeroAleatorio);
    }
  }

  // Ordena os números em ordem crescente
  numerosAleatorios.sort(function (a, b) {
    return a - b;
  });

  return numerosAleatorios;
}

function saoConsecutivos(array, numero) {
  // Verifica se o número gerado é sequencial ao último número gerado
  return array.length > 0 && (numero === array[array.length - 1] + 1 || numero === array[array.length - 1] - 1);
}

function geradorNumeros() {
  var numberSorteadoNaoSequencial = gerarNumberAleatorio();
  var numeroGerado = numberSorteadoNaoSequencial.join('-');
  document.getElementById('number').textContent = numeroGerado;
  document.getElementById('container-number').classList.remove('hide');
}

function infoNumber() {
  var infoLucky = document.getElementById('number').textContent;
  console.log('Número Gerado:', infoLucky);
}