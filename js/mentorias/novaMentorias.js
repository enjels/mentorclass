const novomentor = async (mentores) => {
    await fetch('http://localhost:3000/mentores',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentores)
    })
   window.location = "/html/mentores/mentores.html"
}

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', async (event) => {
event.preventDefault()

    const nome = formulario.elements['nome'].value
    const email = formulario.elements['email'].value
    console.log(email)
    const mentores = {
            nome,
            email,
            titulo
    }

    novomentor(mentores)

})

//retorna a pag mentores
const voltar = () => {
    window.location = "/html/mentorias/mentorias.html"
}
