function gerarNumerosAleatoriosNaoSequenciais() {
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

function generatePassword() {
  // Substitua esta função com a sua lógica de geração de senha, utilizando os números gerados
  var numerosSorteadosNaoSequenciais = gerarNumerosAleatoriosNaoSequenciais();
  var senhaGerada = numerosSorteadosNaoSequenciais.join('-'); // Exemplo simples de como a senha pode ser gerada
  document.getElementById('password').textContent = senhaGerada;
  document.getElementById('container-password').classList.remove('hide');
}

function copyPassword() {
  // Substitua esta função com a lógica para copiar a senha para a área de transferência, se necessário
  var senhaCopiada = document.getElementById('password').textContent;
  console.log('Senha copiada:', senhaCopiada);
  // Lógica para copiar a senha para a área de transferência
}