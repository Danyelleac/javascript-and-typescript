const paragraphs = document.querySelector('.paragraphs')//vai pegar o prmeiro paragrafo
const paragraphsList = document.querySelectorAll('p')// cria uma NodeList com todos os paragrafos
const estilosBody = getComputedStyle(document.body)//pegar o estilo(tudo de css) do body
const backgroundColorBody = estilosBody.backgroundColor//pegar a background color do body


for(let p of ps){
    console.log(p)
}