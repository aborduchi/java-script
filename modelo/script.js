
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
    window.alert ('Erro verifique os dados e tente novamente')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano -Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked){
        gênero = 'homem'
        if (idade >= 0 && idade < 10){if
            //criança
            img.setAttribute('src', 'fotobebem.jpg')
            //jovem
        }else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'jovemm20.jpg')
        }else if (idade < 50){
             img.setAttribute('src', 'adultoh.jpg')
            //Adulto
           
        }else{
            //idoso
            img.setAttribute('src', 'fotoidoso.jpg')
        }

       }else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
        img.setAttribute('src', 'fotobebef.jpg')
        }else if (idade < 21){
            //Jovem
        
            img.setAttribute('src', 'fotojovemf.jpg')
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'adultom.jpg')
        }else{
            //idosa
            img.setAttribute('src', 'mulheridosa.jpg')
        }

       }
       res.style.textAlign= ' center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)

    }
}