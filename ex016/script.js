
let vetor = []
let maior = null // variável global
let menor = null
let soma = 0
let media =0
function adicionar(){
   let n = Number(document.getElementById('ntxt').value)
   let lista = document.getElementById('res')

    

    if(n > 100 || n === ''){
        window.alert("Número inválido! digite um número entre 1 e 100")
    }else if(vetor.includes(n)){
     window.alert("Esse valor ja  foi adicoinado")
    
    }else{
         vetor.push(n)
         let item = document.createElement('option')
         item.text = `Número ${n} foi adicionado`
         lista.appendChild(item)
          maior = Math.max(...vetor)
          menor = Math.min(...vetor)
          soma += n;

    }

     media = soma / vetor.length


}

function confirmar(){
    let info = document.getElementById('info')
    info.innerHTML = ''
    

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
     let p4 = document.createElement('p')
      let p5 = document.createElement('p')

    p1.textContent = `Quantidade adicionadas: ${vetor.length}`
    p2.textContent = `O maior valor é: ${maior}`

    p3.textContent =  `O menor valor é: ${menor}`
     p4.textContent =  `Soma de todos os valores: ${soma}`
       p5.textContent =  `A media dos valores digitados é : ${media}`
     

    info.appendChild(p1)
    info.appendChild(p2)
    info.appendChild(p3)
    info.appendChild(p4)
    info.appendChild(p5)
}
function limpar(){
        vetor = []          // limpa o array de números
    maior = null        // reseta o maior valor
    menor = null        // reseta o menor valor (se usar)
    soma = 0            // reseta a soma (se usar)
    media = 0
     document.getElementById('res').innerHTML = ''   // limpa lista <select>
    document.getElementById('info').innerHTML = ''  // limpa área de info
    document.getElementById('ntxt').value = ''      // limpa o campo input
   
}


