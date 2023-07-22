const formulario = document.getElementById('formulario')
const buscarMentoria = async (id) => {
    const response = await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/mentorias/${id}`)
    const mentoria = response.json()
    return mentoria
}
const buscarMentorias = async () =>{
    const response = await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/mentorias/`)
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
carregarSelectMentoria()


const buscarMentor = async (id)=> {
    const resposta = await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/mentores/${id}`)
    const mentor = await resposta.json()
    return mentor
}

const buscarMentores = async ()=> {
    const resposta = await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/mentores`)
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
carregarSelectMentores()

const buscarSemana = async (id) => {
    const response = await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/semanas/${id}`)
    const semanas = await response.json()
    return semanas

}
const buscarSemanas = async () => {
    const response = await fetch('https://api-projeto-de-conclusao-do-modulo-1.onrender.com/semanas/')
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
carregarSelectDiasDaSemana()

const novaTurma = async (turmas) => {
    await fetch('https://api-projeto-de-conclusao-do-modulo-1.onrender.com/turmas',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(turmas)
    })
   window.location = "/html/turmas/turmas.html"
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
    novaTurma(turmas)
    
})

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

