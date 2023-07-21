const formulario = document.getElementById('formulario')

const buscarTurma = async(id) => {
    const resposta = await fetch(`http://localhost:3000/turmas/${id}`)
    const turma = resposta.json()
    return turma
}

const buscarTurmas = async() => {
    const reposta = await fetch(`http://localhost:3000/turmas`)
    const turmas = reposta.json()
    return turmas
}

const carregarSelect = async ()=> {
    const turmas = await buscarTurmas()
    const turmasSelect = document.getElementById('turma')

    const opcaoVazia = new Option('Selecione um mentor...')
    turmasSelect.options.add(opcaoVazia)

    turmas.forEach(turmas => {
    const opcao = new Option(turmas.turma, turmas.id)
    turmasSelect.options.add(opcao)
    });
}
carregarSelect()

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
    const turmaObjeto = await buscarTurma(turma)
    const alunos = {
    aluno,
    email,
    turma: turmaObjeto.turma
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