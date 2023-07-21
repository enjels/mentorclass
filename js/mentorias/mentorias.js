
//função para exibir conteudo na tela formatado
const rendermentor = (mentorias) => {
  const info_content_1 = document.getElementById('info-content1')
  const info_content_2 = document.getElementById('info-content2')
  const info_content_3 = document.getElementById('info-content3')
  const info_content_4 = document.getElementById('info-content4')

  let contador = 1
    info_content_1.innerHTML = ''
    info_content_2.innerHTML = ''
    info_content_3.innerHTML = ''
    info_content_4.innerHTML = ''
  mentorias.forEach(mentorias => {
    contador++;
    let corlist = '';
    if (contador % 2 === 0) {
      corlist = 'cinza100'
    } else {
      corlist = 'cinza50'
    }

    info_content_1.innerHTML += `
          <p class="info-white ${corlist}">${mentorias.mentoria}</p>
        `;
    info_content_2.innerHTML += `
          <p class="info-white ${corlist}">${mentorias.mentor}</p>
        `;

    // const inativo = document.getElementById('inativo')
    if (mentorias.checkbox == true) {
      info_content_3.innerHTML += `<p class="info-white ${corlist}"><span class="ativocheked">Ativo</span></p>`
    } else if (mentorias.checkbox == false) {
      info_content_3.innerHTML += `<p class="info-white ${corlist}"><span class="inativocheked">Inativo</span></p>`
    }
    info_content_4.innerHTML += `
          <div class="info-white dflex ${corlist}">
            <img onclick="editarMentoria(${mentorias.id})" src="../../svg/editar.svg" alt="">
            <img onclick="deletarMentoria(${mentorias.id})" src="../../svg/delete.svg" alt="">
          </div>
        `;
  });
}

const btnPurpleMenu = () => {
  const purpleBTN = document.getElementById('mentorias')
  purpleBTN.classList.toggle("btnstatic-purple")
}
btnPurpleMenu()

//recebe os dados da api
const getmentorias = async (textoPesquisa = null) => {
  let pesquisa = ''
  if (textoPesquisa){
    pesquisa = `?q=${textoPesquisa}`
  }

  const retorno = await fetch(`http://localhost:3000/mentorias${pesquisa}`)
  const titulomentorias = await retorno.json()

  rendermentor(titulomentorias)

}
getmentorias()

const search = document.getElementById('search')
search.addEventListener('keyup', (e) =>{
  if(e.key === 'Enter'){
    const pesquisa = search.value
    getmentorias(pesquisa)
  }
})
const lupa = document.getElementById('lupa')
lupa.addEventListener("click", (e) =>{
  const pesquisa = search.value
    getmentorias(pesquisa)
})

//retorna a pag novoMentor
const novoMentoria = () => {
  window.location = "novaMentoria.html"
}
//vai a pag editarMentor
const editarMentoria = (id) => {
  window.location = `/html/mentorias/editarMentoria.html?id=${id}`
}

const deletarMentoria = async (id) => {
  await fetch(`http://localhost:3000/mentorias/${id}`, {
    method: 'DELETE'
  })
}




const btnPurple = () => {
  const purpleBTN = document.getElementById('mentores')
  purpleBTN.classList.toggle("btnstatic-purple")
}


//funções do menu
//vai para pagina mentoias
const mentores = () => {
  window.location = "/html/mentores/mentores.html"
}
//vai para pagina turmas
const turmas = () => {
  window.location = "/html/turmas/turmas.html"
}
//vai para pagina alunos
const alunos = () => {
  window.location = "/html/alunos/alunos.html"
}
//vai apra pagina nova mentoria
const novaMentoria = () => {
  window.location = "/html/mentorias/novaMentoria.html"
}