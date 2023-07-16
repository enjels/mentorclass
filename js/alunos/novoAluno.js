const formulario = document.getElementById('formulario')

const novoAluno = async (alunos) => {
    await fetch('http://localhost:3000/alunos',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(alunos)
    })
   window.location = "/html/alunos/alunos.html"
}

formulario.addEventListener('submit', async (event) => {
    event.preventDefault()

    const aluno = formulario.elements['nome'].value
    const email = formulario.elements['email'].value
    const turma = formulario.elements['turma'].value

    const alunos = {
    aluno,
    email,
    turma
}
    novoAluno(alunos)


})
//vai a pag editarMentor
const editarAluno = (id)=> {
    window.location = `/html/mentores/editarmentor.html?id=${id}`
}

const deletarAluno = async (id) => {
   await  fetch(`http://localhost:3000/alunos/${id}`, {
        method: 'DELETE'
    })
}
//leva a pagina mentores
const mentores = () => {
    window.location = "/html/mentores/mentores.html"
  }
//leva a pagina mentoias
const mentorias = () => {
   window.location = "/html/mentorias/mentorias.html"
 }
//leva a pagina turmas
const turmas = () => {
   window.location = "/html/turmas/turmas.html"
}
//retorna a pag novoMentor
const alunos = () => {
    window.location = "/html/alunos/alunos.html"
}
conm