

function contar(){

     let inicio = document.getElementById('ini').value
let fim = document.getElementById('fim').value
let passo = document.getElementById('pas').value
let msg = document.getElementById('msg')

// Convertendo para número
      inicio = Number(inicio)
      fim = Number(fim)
      passo = Number(passo)

      // Verificação simples
      if(passo <= 0){
        alert("Passo inválido! Considerando passo = 1")
        
      }else if(fim <=0){
          alert("Denina um valor maior que 0 para fim")
      }else if(inicio <= 0){
          alert('defina um valor para inicio, valores positivo diferente de 0')
      }

      msg.innerHTML = "Contando: <br>"

 if(inicio < fim){
        // Contagem crescente
        for(let i = inicio; i <= fim; i += passo){
          msg.innerHTML += `${i} \u{1f449} `
        }
      } else {
        // Contagem regressiva
        for(let i = inicio; i >= fim; i -= passo){
          msg.innerHTML += `${i} 👉 `
        }
      }

      msg.innerHTML += "\u{1f436}"
    }
  


 

