//escreva uma função que recebe 2 numeros e retorne o maior deles

const higherNumber =(x,y)=>{
    const highestValueNumber= 0
    if(x>higherNumber){
        highestValueNumber=x;
    }
    if(y>higherNumber){
        highestValueNumber=y
    }
    return console.log("O maior numero é "+highestValueNumber);
}

//melhorando
const higherNumberRefactoring1 =(x,y)=>{
    if(x>y){
       return console.log("O maior numero é "+x);
    }
    if(y>x){
        return console.log("O maior numero é "+y);
    }
}

//melhorando mais 
const higherNumberRefactoring2 =(x,y)=>{
    if(x>y)return console.log("O maior numero é "+x)
        return console.log("O maior numero é "+y)
}

//melhorando mais 
const higherNumberRefactoring3 =(x,y)=>{
    return x>y?console.log("O maior numero é "+x): console.log("O maior numero é "+y)
}

//melhorando mais 
const higherNumberRefactoring4 =(x,y)=> x>y?console.log("O maior numero é "+x): console.log("O maior numero é "+y)