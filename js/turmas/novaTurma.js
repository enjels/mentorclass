const formulario = document.getElementById('formulario')


const novaTurma = async () => {
    await fetch('http://localhost:3000/turmas',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentores)
    })
   window.location = "/html/turmas/turmas.html"
}
formulario.addEventListener('submit',async (event) => {
event.preventDefault()

    const turma = formulario.elements[''].value
    const mentor = formulario.elements[''].value
    const mentoria = formulario.elements[''].value
    const datadeinicio = formulario.elements[''].value
    const diadasemana = formulario.elements[''].value
    const horarioinicio = formulario.elements[''].value
    const horariofim = formulario.elements[''].value
    const encontros = formulario.elements[''].value


    const mentorObjeto = await buscarMentorias(mentor)
    const turmas = {
        turma,
        mentor,
        mentoria,
        datadeinicio,
        diadasemana,
        horarioinicio,
        horariofim,
        encontros
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

