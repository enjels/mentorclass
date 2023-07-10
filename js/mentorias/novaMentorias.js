const novametoria = async (titulomentorias) => {
    await fetch('http://localhost:3000/titulomentorias',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(titulomentorias)
    })
    window.location = "./mentorias.html"
}

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit',(event) => {
event.preventDefault()

    const nome = formulario.elements['nome'].value
    console.log(nome)
    const titulomentorias = {
            nome
    }

    novametoria(titulomentorias)

})

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