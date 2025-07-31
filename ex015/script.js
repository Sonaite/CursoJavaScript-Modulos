function verificar(){
    var data = new Date() //pegar a data
    var ano = data.getFullYear() //pegar ano
    var anoForm = document.getElementById('txtano') //pegar o ano digitado no formulário
    var res = document.querySelector('div#res')

    if(anoForm.value.length == 0 || Number (anoForm.value) > ano){
        window.alert('[WRROR] verifique os dados e tente novamente')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(anoForm.value)
        
       var genero = ''

       var img = document.createElement('img')  // isso é o memso que criar a tag img e por o id como foto
       img.setAttribute('id' , 'foto')



       if(fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src' , 'imagem/criançaH.jpg')

        }else if(idade < 21){
            //jovem
            img.setAttribute('src' , 'imagem/jovemmenino.jpg')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src' , 'imagem/homem.jpg')

        }else{
            //idoso
            img.setAttribute('src' , 'imagem/idoso.jpg')
        }
       }else if(fsex[1].checked){
        genero = 'mulher'

         if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src' , 'imagem/criançaM.jpg')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src' , 'imagem/jovemMulher.jpg')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src' , 'imagem/mulher.jpg')

        }else{
            //idosa
            img.setAttribute('src' , 'imagem/idosa.jpg')
        }
       }
       res.style.textAlign= 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}