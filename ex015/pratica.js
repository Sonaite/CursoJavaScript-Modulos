function calcularMedia(numeros) {
  if (numeros.length === 0) return 0; // Evita dividir por zero

  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  let media = soma / numeros.length;
  return media;
}
