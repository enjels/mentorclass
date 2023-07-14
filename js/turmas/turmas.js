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

  let contador = 1
  turmas.forEach(turmas => {
    contador++;
    let corlist = '';
    if (contador % 2 === 0) {
      corlist = 'cinza50';
    } else {
      corlist = 'cinza100'
    }

    info_content_1.innerHTML += `<p class="info-white ${corlist}">${turmas.turma}</p>`

    info_content_2.innerHTML += `<p class="info-white ${corlist}">${turmas.mentor}</p>`

    info_content_3.innerHTML += `<p class="info-white ${corlist}">${turmas.mentoria}</p>`

    info_content_4.innerHTML += `<p class="info-white ${corlist}">${turmas.datadeinicio}</p>`

    info_content_5.innerHTML += `<p class="info-white ${corlist}">${turmas.diadasemana}</p>`

    info_content_6.innerHTML += `<p class="info-white ${corlist}">${turmas.horario}</p>`

    info_content_7.innerHTML += `<p class="info-white ${corlist}">${turmas.encontros}</p>`

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


//recebe os dados da api
const getmentores = async () => {

  const retorno = await fetch('http://localhost:3000/turmas')
  const titulomentorias = await retorno.json()

  rendermentor(titulomentorias)
  btnPurpleMenu()
}

getmentores()

//retorna para pagina novoMentor
const novaTurma = () => {
  window.location = "./novaTurma.html"
}
//leva para pagagina editarMentor
const editarTurma = (id) => {
  window.location = `/html/mentores/editarmentor.html?id=${id}`
}

const deletarTurma = async (id) => {
  await fetch(`http://localhost:3000/mentores/${id}`, {
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