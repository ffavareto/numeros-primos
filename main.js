function primo(numero) {
  let divisores = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      divisores++;
    }
  }

  if (divisores == 2) {
    console.log('É primo')
  } else {
    console.log('Não é primo')
  }
}