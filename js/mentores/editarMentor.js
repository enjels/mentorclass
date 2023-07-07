let mentoresId = null
//recupera o ID do mentor que foi enviado no parametro da URL
const getIdUrl = () => {
    const parameString = window.location.search
    // URLSearchParams define metodos para buscar parametros da URL
    const parameters = URLSearchParams(parameString)
    // params.get('o_nome_do_campo_que_esta_na_url)'
    // ou seja, ao utulizar o .get eu posso recuperar um determinado campo
    mentoresId = parameters.get('Id')
}
// recuperar mentor
const buscarMentores = async () => {
    const retorno = await fetch(`http://localhost:3000/mentores/${mentoresId}`)
    const mentores = retorno.json()
    return mentores
}

const editarMentores = async (mentores) => {
    await fetch(`http://localhost:3000/noticias/${nmentoresId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mentores)
    })
    // Redireciono o usuario para a tela de listagem
    window.location = "/html/mentores/mentores.html"
}
const carregarDadosFormulario = async (mentores) => {
    document.getElementById('nome').value = mentores.nome
    document.getElementById('email').value = mentores.email
}

const  formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    const mentores ={
        nome,
        email
    }
    editarMentores(mentores)
})

// Ao entrar na página, a funcão carregarDados é chamada
const carregarDados = async () => {
    //recupera o ID
    getIdUrl()
    // Buscar noticias
    const mentores = await buscarMentores()
    // Coloca os dados no formulario
    carregarDadosFormulario(mentores)

}
carregarDados()

//retorna a pag mentores
const voltar = () => {
    window.location = "/html/mentores/mentores.html"
}