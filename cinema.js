let catalogo = require('./database/catalogo.json')


// ADICIONAR FILME
 
/* let adicionarFilme = () => catalogo.push(film)

adicionarFilme(film = {filme: 'Harry Potter 5',codigo: 5,duracao: 180,atores: ["eu"],anoDeLancamento: 1999,emCartaz: true})

console.log(catalogo) */


// FUNÇÃO ANTIGA

/*function adicionarFilme(filme, codigo, duracao, atores, anoDeLancamento, emCartaz) {
  let film = {
    filme, 
    codigo, 
    duracao, 
    atores, 
    anoDeLancamento, 
    emCartaz
}

catalogo.push(film)

}

adicionarFilme('Harry Potter 5', 5, 180, ["eu"], 1999, true)

console.log(catalogo)*/





// BUSCAR FILME

/* function buscarFilme(codigo){

  const filmeEncontrado = catalogo.find(function (filme){
      return filme.codigo == codigo;
  })

return filmeEncontrado

}
const filmeEn = buscarFilme(2)
 */





// ALTERAR STATUS DO FILME
/* 
function alterarStatusEmCartaz(codigo, buscarFilme){
  
  const filmeEncontrado = buscarFilme(codigo)
 
  filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true

}

alterarStatusEmCartaz(1, buscarFilme) */






// LISTAR FILMES

/* const imprimeFilme = (catalogo, index) => console.log(index + " - " + catalogo.filme)

function listarTodosOsFilmes(){
  for(let i = 0; i < catalogo.length; i++){
    imprimeFilme(catalogo[i], i)
  }
}

listarTodosOsFilmes() */


// FORMA RESUMIDA

const imprimeFilme = (catalogo, index) => console.log(index + " - " + catalogo.filme)

let listarTodosOsFilmes = () => catalogo.forEach(imprimeFilme)

listarTodosOsFilmes()

console.log(cinema)




//FILMES DE LONGA DURAÇÃO
/* function longaDuracao() {
  
    const resultado = catalogo.filter( filme => filme.duracao > 120)
    return resultado
  }

  const longaDuracao = listFilmesLongaDuracao


  console.table(listFilmesLongaDuracao()) */



//  FILMES EM CARTAZ
/* const filmesFiltrados = () => {
  const filmesEncontrados = catalogo.filter( catalogo => {
    return catalogo.duracao <= 120
  })

  return filmesEncontrados
}

console.table(filmesFiltrados()) */