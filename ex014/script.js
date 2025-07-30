function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
   

    var data = new Date()
    var horaAtual = data.getHours()
  

  

    msg.innerHTML = `Agora são exatamente ${horaAtual} horas`

    if(horaAtual >= 0 && horaAtual < 12){
      img.src = 'img/manha.jpg'
     document.body.style.background = '#e2cd9f'

    }else if(horaAtual >= 12 && horaAtual < 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f88'
        

    }else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'

    }

}
