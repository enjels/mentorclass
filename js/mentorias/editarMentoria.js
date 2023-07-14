const formulario = document.getElementById('formulario')
let mentoriasId = null
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

    mentores.forEach(mentores => {
    const opcao = new Option(mentores.mentor, mentores.id)
    mentorSelect.options.add(opcao)
    });
}

const getIdUrl = () => {
   const paramsString = window.location.search
   const params = new URLSearchParams(paramsString)
   mentoriasId = params.get('id')
}

const buscartitulomentorias = async () => {
   const resposta = await fetch(`http://localhost:3000/mentorias/${mentoriasId}`)
    const titulomentorias = await resposta.json()
    return titulomentorias
}

const editarMetoria = async (mentorias) => {
    await fetch(`http://localhost:3000/mentorias/${mentoriasId}`,{
        method: 'PUT',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentorias)
    })
    window.location = "../mentorias/mentorias.html"
}
carregarDadosFormulario = async (mentorias) => {
   document.getElementById('nome').value = mentorias.mentoria
   document.getElementById('mentor').value = mentorias.mentor
   document.getElementById('chk').cheked = mentorias.checkbox
   const content_chk = document.getElementById('content-chk')
   if (mentorias.checkbox == true) {
    content_chk.innerHTML = `<input onclick="check()" type="checkbox" value="True" checked name="chk" id="chk" />
    <label for="chk" class="switch">
    <span class="slider"></span>
    </label>
    <p id="inativo">Ativo</p>`
   }else if(mentorias.checkbox == false) {
    content_chk.innerHTML = `<input onclick="check()" type="checkbox" name="chk" id="chk" />
    <label for="chk" class="switch">
    <span class="slider"></span>
    </label>
    <p id="inativo">Inativo</p>`
   }

}

const check = async ()=> {
    const checkbox = formulario.elements['chk'].checked
    const inativo = document.getElementById('inativo')
    console.log(checkbox)
    if(checkbox == true){
        inativo.innerText = "Ativo"
    }else if(checkbox == false){
        inativo.innerText = "inativo"
    }

}

check()
const carregarDados = async () => {
   getIdUrl()
   const titulomentorias = await buscartitulomentorias()
   await carregarSelect()
   carregarDadosFormulario(titulomentorias)
}

formulario.addEventListener('submit', async(event) => {
event.preventDefault()

    const mentoria = formulario.elements['nome'].value
    const mentor = formulario.elements['mentor'].value
    const checkbox = formulario.elements['chk'].checked

    const mentorObjeto = await buscarMentorias(mentor)
    const titulomentorias = {
            mentoria,
            mentor: mentorObjeto.mentor,
            checkbox
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