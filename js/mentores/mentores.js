
//função para exibir conteudo na tela formatado
const rendermentor = (mentores) =>{
const info_content_1 = document.getElementById('info-content1')
const info_content_2 = document.getElementById('info-content2')
const info_content_3 = document.getElementById('info-content3')

let contador = 0
  info_content_1.innerHTML = ''
  info_content_2.innerHTML = ''
  info_content_3.innerHTML = ''

mentores.forEach(mentores => {
    contador++;
    let corlist = '';
    if (contador % 2 === 0) {
      corlist = 'cinza100'
    }else{
        corlist = 'cinza50'
    }

    info_content_1.innerHTML += `
      <p class="info-white ${corlist}">${mentores.mentor}</p>
    `;
    info_content_2.innerHTML += `
      <p class="info-white ${corlist}">${mentores.email}</p>
    `;
    info_content_3.innerHTML += `
      <div class="info-white dflex ${corlist}">
        <img onclick="editarMentor(${mentores.id})" src="../../svg/editar.svg" alt="">
        <img onclick="deletarMentor(${mentores.id})" src="../../svg/delete.svg" alt="">
      </div>
    `;
  });
}

const btnPurpleMenu = () => {
  const purpleBTN =document.getElementById('mentores')
    purpleBTN.classList.toggle("btnstatic-purple")
}
btnPurpleMenu()


 //recebe os dados da api
const getmentores = async (textoPesquisa = null) => {
  let pesquisa = ''

  if (textoPesquisa){
    pesquisa = `?q=${textoPesquisa}`
  }

    const retorno = await fetch (`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/mentores${pesquisa}`)
    const mentores = await retorno.json()

    rendermentor(mentores)
}
getmentores()

const search = document.getElementById('search')
search.addEventListener('keyup', (e) =>{
  if(e.key === 'Enter'){
    const pesquisa = search.value
    getmentores(pesquisa)
  }
})
const lupa = document.getElementById('lupa')
lupa.addEventListener("click", (e) =>{
  const pesquisa = search.value
    getmentores(pesquisa)
})



//vai a pag editarMentor
const editarMentor = (id)=> {
    window.location = `/html/mentores/editarmentor.html?id=${id}`
}

const deletarMentor = async (id) => {
   await  fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/mentores/${id}`, {
        method: 'DELETE'
    })
}


//vai para pagina mentoias
const mentorias = () => {
   window.location = "/html/mentorias/mentorias.html"
 }
//vai para pagina turmas
const turmas = () => {
   window.location = "/html/turmas/turmas.html"
}
//vai para pagina alunos
const alunos = () => {
   window.location = "/html/alunos/alunos.html"
}
//retorna a pag novoMentor
const novoMentor = () => {
  window.location = "/html/mentores/novoMentor.html"
}