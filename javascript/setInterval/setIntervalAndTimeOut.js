const hour = ()=>{
    let data = new Date()
    return data.toLocaleTimeString('pt-br',{
        hourt12:false
    })
}
const intervalFunction= () =>{
    console.log(hour());
}

const timer = setInterval(intervalFunction, 1000)//eu tambem poderia passar a function direto

const timeout = ()=>{
    clearInterval(timer)
}
setTimeout(timeout,5000)