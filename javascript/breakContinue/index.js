const array = [1,2,3,4,5,6];

for(let num of array){
    if(num === 2){
        continue;//quando ele encontrar o numero dois, ele não vai mostra-lo ele vai continuar para o próximo 
    }
    if(num === 5){
        break;//quando ele encontrar o numero cinco, ele ai parar
    }
}