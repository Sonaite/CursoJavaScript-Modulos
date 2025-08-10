
/*let vetor = []
for(let posi=0; posi<3; posi++){
    vetor [posi] = posi;
    console.log(vetor.length)
  
}*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let respostas = [];
let contador = 0;

function perguntar() {
  if (contador < 3) {
    rl.question(`Digite a resposta número ${contador + 1}: `, (resposta) => {
      respostas.push(resposta);
      contador++;
      perguntar(); // chama de novo até fazer 3 perguntas
    });
  } else {
    console.log('Respostas recebidas:', respostas);
    rl.close();
  }
}

perguntar();

