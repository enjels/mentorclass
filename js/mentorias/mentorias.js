
//função para exibir conteudo na tela formatado
const rendermentor = (mentores) =>{
    const info_content_1 = document.getElementById('info-content1')
    const info_content_2 = document.getElementById('info-content2')
    const info_content_3 = document.getElementById('info-content3')
    
    let contador = 1
    mentores.forEach(mentor => {
        contador++;
        let corlist = '';
        if (contador % 2 === 0) {
          corlist = 'cinza50';
        }else{
            corlist = 'cinza100'
        }
    
        info_content_1.innerHTML += `
          <p class="info-white ${corlist}">${mentor.nome}</p>
        `;
        info_content_2.innerHTML += `
          <p class="info-white ${corlist}">${mentor.email}</p>
        `;
        info_content_3.innerHTML += `
          <div class="info-white dflex ${corlist}">
            <img onclick="editarMentor(${mentor.id})" src="../../svg/editar.svg" alt="">
            <img onclick="deletarMentor(${mentor.id})" src="../../svg/delete.svg" alt="">
          </div>
        `;
      });
    }
    
     //recebe os dados da api
    const getmentores = async () => {
        const retorno = await fetch ('http://localhost:3000/mentores')
        const mentores = await retorno.json()

        rendermentor(mentores)
    }


    //retorna a pag novoMentor
    const novoMentoria = () => {
        window.location = "novaMentoria.html"
    }
    //vai a pag editarMentor
    const editarMentoria = (id)=> {
        window.location = `/html/mentores/editarmentor.html?id=${id}`
    }
    
    const deletarMentoria = async (id) => {
       await  fetch(`http://localhost:3000/mentores/${id}`, {
            method: 'DELETE'
        })
    }
    
    getmentores()

//funções do menu
//vai para pagina mentoias
const mentores = () => {
    window.location = "/html/mentores/mentores.html"
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