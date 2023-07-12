const formulario = document.getElementById('formulario')
let titulomentoriasId = null
const buscarMentorias = async (id)=> {
    const resposta = await fetch(`http://localhost:3000/mentores/${id}`)
    const mentor = await resposta.json()
    return mentor
}

const buscarMentores = async ()=> {
    const resposta = await fetch(`http://localhost:3000/mentores`)
    const mentores = await resposta.json()
    return mentores
}

const carregarSelect = async ()=> {
    const mentores = await buscarMentores()
    const mentorSelect = document.getElementById('mentor')

    const opcaoVazia = new Option('Selecione um mentor...')
    mentorSelect.options.add(opcaoVazia)

    mentores.forEach(mentor => {
    const opcao = new Option(mentor.nome, mentor.id)
    mentorSelect.options.add(opcao)
    });
}

const getIdUrl = () => {
   const paramsString = window.location.search
   const params = new URLSearchParams(paramsString)
   titulomentoriasId = params.get('id')
}

const buscartitulomentorias = async () => {
   const resposta = await fetch(`http://localhost:3000/titulomentorias/${titulomentoriasId}`)
    const titulomentorias = await resposta.json()
    return titulomentorias
}

const editarMetoria = async (titulomentorias) => {
    await fetch(`http://localhost:3000/titulomentorias/${titulomentoriasId}`,{
        method: 'PUT',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(titulomentorias)
    })
    window.location = "./mentorias.html"
}
carregarDadosFormulario = async (titulomentorias) => {
   document.getElementById('nome').value = titulomentorias.tipo
   document.getElementById('mentor').value = titulomentorias.nome
}

const carregarDados = async () => {
   getIdUrl()
   const titulomentorias = await buscartitulomentorias()
   await carregarSelect()
   carregarDadosFormulario(titulomentorias)
}

formulario.addEventListener('submit', async(event) => {
event.preventDefault()

    const tipo = formulario.elements['nome'].value
    const mentor = formulario.elements['mentor'].value

    const mentorObjeto = await buscarMentorias(mentor)
    const titulomentorias = {
            tipo,
            nome: mentorObjeto.nome
    }

    editarMetoria(titulomentorias)

})
carregarDados()








//funções menu/navegar
const mentores = () => {
    window.location = "../mentores/mentores.html"
  }
  //vai para pagina mentoias
  const mentorias = () => {
     window.location = "./mentorias.html"
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