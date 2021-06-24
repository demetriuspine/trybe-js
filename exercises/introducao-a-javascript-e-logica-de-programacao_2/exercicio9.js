//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let novaArray = [];
for (index = 1; index <= 25; index += 1) {
  novaArray.push(index)
}
arrayDiv = [] 
for (indexDiv = 0; indexDiv < novaArray.length; indexDiv += 1) {
  arrayDiv.push(novaArray[indexDiv]/2)
}
console.log(arrayDiv);