const formulario = document.getElementById('formulario')
let turmasId = null
const buscarMentoria = async (id) => {
    const response = await fetch(`http://localhost:3000/mentorias/${id}`)
    const mentoria = response.json()
    return mentoria
}
const buscarMentorias = async () =>{
    const response = await fetch(`http://localhost:3000/mentorias/`)
    const mentorias = response.json()
    return mentorias
}

const carregarSelectMentoria = async ()=> {
    const mentorias = await buscarMentorias()
    const mentoriaSelect = document.getElementById('mentoria')

    const opcaoVazia = new Option('Selecione uma mentoria...')
    mentoriaSelect.options.add(opcaoVazia)

    mentorias.forEach(mentorias => {
    const opcao = new Option(mentorias.mentoria, mentorias.id)
    mentoriaSelect.options.add(opcao)
    });
}


const buscarMentor = async (id)=> {
    const resposta = await fetch(`http://localhost:3000/mentores/${id}`)
    const mentor = await resposta.json()
    return mentor
}

const buscarMentores = async ()=> {
    const resposta = await fetch(`http://localhost:3000/mentores`)
    const mentores = await resposta.json()
    return mentores
}

const carregarSelectMentores = async ()=> {
    const mentores = await buscarMentores()
    const mentorSelect = document.getElementById('mentor')

    const opcaoVazia = new Option('Selecione um mentor...')
    mentorSelect.options.add(opcaoVazia)

    mentores.forEach(mentores => {
    const opcao = new Option(mentores.mentor ,mentores.id)
    mentorSelect.options.add(opcao)
    });
}


const buscarSemana = async (id) => {
    const response = await fetch(`http://localhost:3000/semanas/${id}`)
    const semanas = await response.json()
    return semanas

}
const buscarSemanas = async () => {
    const response = await fetch('http://localhost:3000/semanas/')
    const buscarSemanas = await response.json()
    return buscarSemanas
}
const carregarSelectDiasDaSemana = async ()=> {
    const semana = await buscarSemanas()
    const semanaSelect = document.getElementById('dia-da-semana')

    const opcaoVazia = new Option('Selecione um dia da semana...')
    semanaSelect.options.add(opcaoVazia)

    semana.forEach(semanas => {
    const opcao = new Option(semanas.semana, semanas.id)
    semanaSelect.options.add(opcao)
    });
}


const getIdUrl = () => {
    const paramsString = window.location.search
    const params = new URLSearchParams(paramsString)
    turmasId = params.get('id')
 }

 const buscarTurmas = async () => {
    const resposta = await fetch(`http://localhost:3000/turmas/${turmasId}`)
     const turmas = await resposta.json()
     return turmas
 }

const editarTurma = async (turmas) => {
    await fetch(`http://localhost:3000/turmas/${turmasId}`,{
        method: 'PUT',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(turmas)
    })
   window.location = "/html/turmas/turmas.html"
}

const carregarDadosFormulario = async (turmas) => {
    document.getElementById('turma').value = turmas.turma
    document.getElementById('mentor').value = turmas.mentor
    document.getElementById('mentoria').value = turmas.mentoria
    document.getElementById('data-de-inicio').value = turmas.datadeinicio
    document.getElementById('dia-da-semana').value = turmas.diadasemana
    document.getElementById('start-time').value = turmas.horarioinicio
    document.getElementById('end-time').value = turmas.horariofim
    document.getElementById('encontro').value = turmas.encontros
    document.getElementById('link-aula').value = turmas.link
}

formulario.addEventListener('submit',async (event) => {
event.preventDefault()

    const turma = formulario.elements['turma'].value
    const mentor = formulario.elements['mentor'].value
    const mentoria = formulario.elements['mentoria'].value
    const datadeinicio = formulario.elements['data-de-inicio'].value
    const diadasemana = formulario.elements['dia-da-semana'].value
    const horarioinicio = formulario.elements['start-time'].value
    const horariofim = formulario.elements['end-time'].value
    const encontros = formulario.elements['encontro'].value
    const link = formulario.elements['link-aula'].value

    const mentorObjeto = await buscarMentor(mentor)
    const mentoriaObjeto = await buscarMentoria(mentoria)
    const diadasemanaObjeto = await buscarSemana(diadasemana)
    const turmas = {
        turma,
        mentor:mentorObjeto.mentor,
        mentoria:mentoriaObjeto.mentoria,
        datadeinicio,
        diadasemana:diadasemanaObjeto.semana,
        horarioinicio,
        horariofim,
        encontros,
        link
    }
    editarTurma(turmas)

})

const carregarDados = async () => {
    getIdUrl()

    await carregarSelectMentoria()
    await carregarSelectMentores()
    await carregarSelectDiasDaSemana()

    const turmas = await buscarTurmas()
    carregarDadosFormulario(turmas)
}
carregarDados()

//funções menu/navegar
const mentores = () => {
    window.location = "/html/mentores/mentores.html"
}
//vai para pagina mentoias
const mentorias = () => {
    window.location = "/html/mentorias/mentorias.html"
}
//vai para pagina turmas
const turmas = () => {
    window.location = "/html/turmas/turmas.html"
}
//leva para pagina alunos
const alunos = () => {
    window.location = "/html/alunos/alunos.html"
}

