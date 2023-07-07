
//função para exibir conteudo na tela formatado
const rendermentor = (mentores) =>{
const info_content_1 = document.getElementById('info-content1')
const info_content_2 = document.getElementById('info-content2')
const info_content_3 = document.getElementById('info-content3')

    mentores.forEach(mentores =>{
        info_content_1.innerHTML = info_content_1.innerHTML + `
        <p class="info-white">${mentores.nome}</p>
        `
        info_content_2.innerHTML = info_content_2.innerHTML + `
        <p class="info-white">${mentores.email}</p>
        `
        info_content_3.innerHTML = info_content_3.innerHTML + `
        <div class="info-white dflex ">
        <img onclick="editarMentor(${mentores.id})" src="../../svg/editar.svg" alt="">
        <img onclick="deletarMentor(${mentores.id})" src="../../svg/delete.svg" alt="">
        </div>
        `
    })
}
 //recebe os dados da api
const getmentores = async () => {
    const retorno = await fetch ('http://localhost:3000/mentores')
    const mentores = await retorno.json()

    rendermentor(mentores)
}


//retorna ao login
const voltar = () => {
    window.location = "../../index.html"
}
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

// const deletarNoticia =() => [
//     deletarNoticias()
// ]

getmentores()