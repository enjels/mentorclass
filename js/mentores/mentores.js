
//função para exibir conteudo na tela formatado
const rendermentor = (mentores) =>{
const info_content_1 = document.getElementById('info-content1')
const info_content_2 = document.getElementById('info-content2')
const info_content_3 = document.getElementById('info-content3')

let contador = 1
mentores.forEach(mentores => {
    contador++;
    let corlist = '';
    if (contador % 2 === 0) {
      corlist = 'cinza50';
    }else{
        corlist = 'cinza100'
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
  let texto = ''

  if (textoPesquisa){
    texto = `?q=${textoPesquisa}`
  }
    const retorno = await fetch (`http://localhost:3000/mentores${texto}`)
    const mentores = await retorno.json()

    rendermentor(mentores)
}

const pesquisa = document.getElementById('pesquisa')
pesquisa.addEventListener('keyup', (e) =>{
  if(e.key === 'Enter'){
    const texto = pesquisa.value
    getmentores(texto)
  }
})
getmentores()

//retorna a pag novoMentor
const novoMentor = () => {
    window.location = "novoMentor.html"
}
//vai a pag editarMentor
const editarMentor = (id)=> {
    window.location = `/html/mentores/editarmentor.html?id=${id}`
}

const deletarMentor = async (id) => {
   await  fetch(`http://localhost:3000/mentores/${id}`, {
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