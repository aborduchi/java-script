var agora =new Date()
var diaSem = agora.getDay()

/*
condiçoes em <-switch->
domingo >0
segunda >1
teerca >2
quarta >3
quinta >4
sexta >5
sabado >6
*/
console.log(diaSem)

switch(diaSem){
case 0:
console.log('domingo')
break

case 1:
console.log('segunda')
break
case 2:
console.log('terça')
break

case 3:
console.log('Quarta')
break

case 4:
console.log('Quinta')
break

case 6:
console.log('Sexta')
break


default:
    mensagem - 'Fim de Semana';
}