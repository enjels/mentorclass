//função para exibir conteudo na tela formatado
const rendermentor = (turmas) => {
  const info_content_1 = document.getElementById('info-content1')
  const info_content_2 = document.getElementById('info-content2')
  const info_content_3 = document.getElementById('info-content3')
  const info_content_4 = document.getElementById('info-content4')
  const info_content_5 = document.getElementById('info-content5')
  const info_content_6 = document.getElementById('info-content6')
  const info_content_7 = document.getElementById('info-content7')
  const info_content_8 = document.getElementById('info-content8')

  let contador = 0
  info_content_1.innerHTML = ''
  info_content_2.innerHTML = ''
  info_content_3.innerHTML = ''
  info_content_4.innerHTML = ''
  info_content_5.innerHTML = ''
  info_content_6.innerHTML = ''
  info_content_7.innerHTML = ''
  info_content_8.innerHTML = ''
  turmas.forEach(turmas => {
    contador++;
    let corlist = '';
    if (contador % 2 === 0) {
      corlist = 'cinza100'
    } else {
      corlist = 'cinza50'
    }

    let casa = info_content_1.innerHTML += `<p class="info-white ${corlist}">${turmas.turma}</p>`

    info_content_2.innerHTML += `<p class="info-white ${corlist}">${turmas.mentor}</p>`

    info_content_3.innerHTML += `<p class="info-white ${corlist}">${turmas.mentoria}</p>`

    info_content_4.innerHTML += `<p class="info-white ${corlist}">${turmas.datadeinicio}</p>`

    info_content_5.innerHTML += `<p class="info-white ${corlist}">${turmas.diadasemana}</p>`

    info_content_6.innerHTML += `<p class="info-white ${corlist}">${turmas.horarioinicio}h-${turmas.horariofim}h</p>`

    info_content_7.innerHTML += `<p class="info-white ${corlist}">${turmas.encontros}/10</p>`

    info_content_8.innerHTML += `
          <div class="info-white dflex ${corlist}">
            <img onclick="editarTurma(${turmas.id})" src="../../svg/editar.svg" alt="">
            <img onclick="deletarTurma(${turmas.id})" src="../../svg/delete.svg" alt="">
          </div>
        `;
  });
}

const btnPurpleMenu = () => {
  const purpleBTN = document.getElementById('turmas')
  purpleBTN.classList.toggle("btnstatic-purple")
}
btnPurpleMenu()

//recebe os dados da api
const getTurmas = async (textoPesquisa = null) => {
  let pesquisa = ''

  if (textoPesquisa){
    pesquisa = `?q=${textoPesquisa}`
  }

  const retorno = await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/turmas${pesquisa}`)
  const titulomentorias = await retorno.json()

  rendermentor(titulomentorias)

}
getTurmas()

const search = document.getElementById('search')
search.addEventListener('keyup', (e) =>{
  if(e.key === 'Enter'){
    const pesquisa = search.value
    getTurmas(pesquisa)
  }
})
const lupa = document.getElementById('lupa')
lupa.addEventListener("click", (e) =>{
  const pesquisa = search.value
    getTurmas(pesquisa)
})

getTurmas()

//retorna para pagina novoMentor
const novaTurma = () => {
  window.location = "./novaTurma.html"
}
//leva para pagagina editarMentor
const editarTurma = (id) => {
  window.location = `/html/turmas/editarTurma.html?id=${id}`
}

const deletarTurma = async (id) => {
  await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/turmas/${id}`, {
    method: 'DELETE'
  })
}

//funções menu/navegar
const mentores = () => {
  window.location = "../mentores/mentores.html"
}
//leva para pagina mentorias
const mentorias = () => {
  window.location = "/html/mentorias/mentorias.html"
}
//leva para pagina alunos
const alunos = () => {
  window.location = "/html/alunos/alunos.html"
}