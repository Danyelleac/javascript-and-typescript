
const sum = (x,y)=>{
    if(typeof x !== 'number'
    || typeof y !== 'number'){
        throw('x e y precisam ser numeros.')
    }
    return x+y
}
try{
    console.log(sum(1,2))
    console.log(sum(3,'looo'))

}catch(err){
    console.log(err)
}
finally{
    console.log("eu sempre vou aparecer ")
}

const showHour= (date)=>{
    if(date && !(date instanceof Date)){
       throw new TypeError('não é instancia de Date')
    }
    if(!date){
        date = new Date ();
    }
    return date.toLocaleTimeString('pt-BR',{
        hour12:false
    })
}

try{
    const date = new Date('01-07-1970 18:12:12')
    const hour=showHour(new Date(date))//vai dar certo porque é uma instancia de date
    console.log(hour)

}catch(e){
    console.log(e)
}finally{
    console.log('bom dia')
}