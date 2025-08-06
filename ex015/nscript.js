
const clicar = document.getElementById('burg')
const secao = document.getElementById('secao')

clicar.addEventListener('click' ,  function(){
    if(secao.style.display === 'none' || secao.style.display === ''){
            secao.style.display = 'block'; // mostra a section     
    }else{
           secao.style.display = 'none';  // esconde a section
 
    }
})

let contador = 0;

const conta = document.getElementById('conta');
const clique = document.getElementById('clique');
const zera = document.getElementById('zera');



clique.addEventListener('click', function() {
    contador++;
    conta.innerHTML = `Clicou ${contador} vezes`;
});

zera.addEventListener('click', function() {
    contador = 0;
    conta.innerHTML = `Clicou ${contador} vezes`;
});

