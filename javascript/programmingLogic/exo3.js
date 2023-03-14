// escreva uma função que recebe o numero n
//retorno o seguinte:
//Nº divisivel por 3=
//N« divisivel por 5 =
//Nº divisivel por 3 e 5 =
//Nº não é divisivel por 3 e 5 = retorna o próprio número
//Checar se o numero é realmente um numero
//use a função com nº de 0 a 100

const testNumber=(number)=>{
    if(!isNaN(number)){
        if(number>=0 && number<=100){
        if(number%3 === 0 && number%5 === 0){
            console.log("FizzBuzz")
        }else if(number%3 === 0){
            console.log("Fizz")
        }else if(number%5 === 0){
            console.log("Buzz")
        }else if(number){
            console.log(number)
        }
    }else{
        console.log("aceito apenas numeros de 0 a 100")
    }
    }else{
        console.log("Não é um numero, digite um numero")
    }
    
}

//melhorado chat GPT
const testNumber1 = (number) => {
    const num = Number(number);
    if (isNaN(num)) {
      console.log("Não é um número, digite um número");
      return;
    }
    if (num < 0 || num > 100) {
      console.log("Apenas números de 0 a 100 são aceitos");
      return;
    }
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
      return;
    }
    if (num % 3 === 0) {
      console.log("Fizz");
      return;
    }
    if (num % 5 === 0) {
      console.log("Buzz");
      return;
    }
    console.log(num);
  };


  //melhorando mais 
  const testNumber2 = (number) => {
    if (isNaN(number)) return console.log('Não é um número, digite um número');
    if (number < 0 || number > 100) return console.log("Apenas números de 0 a 100 são aceitos");
    if (number % 3 === 0 && number % 5 === 0) return console.log("FizzBuzz");
    if (number % 3 === 0) return console.log("Fizz");
    if (number % 5 === 0) return console.log("Buzz");
    return number;
    }

  testNumber2(5)