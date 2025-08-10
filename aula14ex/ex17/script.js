function tabuada(){
    let num = document.getElementById('num').value
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = '';


     if(num.length  == 0 ){
        window.alert('Por favor, digite um número válido');
              
}else{

for(let i = 1; i <= 10 ; i++){
 let tab = num * i;

 resultado.innerHTML += `${num} x ${i} = ${tab} <br>`;


}

}
}

// outra forma

/*function tabuada(){
    let num = document.getElementById('num').value 
    let tabuada = document.getElementById('tab')

    if(num.lenght == 0){
        window.alert('Digite um número')
    }else{

            tab.innerHTML = '';
       let c = 1;
    while( c <= 10){
      let item = document.createElement('option')
     
      item.text = `${num} x ${c} = ${num*c}`
      tabuada.appendChild(item)
       c++

    }

    }
   
    
}*/
