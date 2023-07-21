const formulario = document.getElementById('formulario');
let alunosId = null

const getIdUrl = () => {
    const paraString = window.location.search
    const params = new URLSearchParams(paraString)
    alunosId = params.get('id')
}

const buscarAlunosid = async () => {
    const response = await  fetch(`http://localhost:3000/alunos/${alunosId}`)
    const alunos = await response.json()
    return alunos
}

const buscarAluno = async () => {
    const response = await  fetch(`http://localhost:3000/alunos`)
    const alunos = await response.json()
    return alunos
}

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
    editarAlunos(alunos)


})

const carregarDadosFormulario = async (alunos) => {
    document.getElementById('nome').value = alunos.aluno
    document.getElementById('email').value = alunos.email
    document.getElementById('turma').options.value = alunos.email
}

const editarAlunos = async (alunos) => {
    await fetch(`http://localhost:3000/alunos/${alunosId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alunos)
    })
    // Redireciono o usuario para a tela de listagem
    window.location = "/html/alunos/alunos.html"

}
// Ao entrar na página, a funcão carregarDados é chamada
const carregarDados = async () => {
    //recupera o ID
    getIdUrl()
    // Buscar noticias
    const alunos = await buscarAlunosid()
    // Coloca os dados no formulario
    carregarDadosFormulario(alunos)

}

// inicia a aplicação
carregarDados()

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