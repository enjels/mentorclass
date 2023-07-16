
//função para exibir conteudo na tela formatado
const renderAlunos = (alunos) =>{
    const info_content_1 = document.getElementById('info-content1')
    const info_content_2 = document.getElementById('info-content2')
    const info_content_3 = document.getElementById('info-content3')

    let contador = 1
    alunos.forEach(alunos => {
        contador++;
        let corlist = '';
        if (contador % 2 === 0) {
          corlist = 'cinza50';
        }else{
            corlist = 'cinza100'
        }

        info_content_1.innerHTML += `
          <p class="info-white ${corlist}">${alunos.aluno}</p>
        `;
        info_content_2.innerHTML += `
          <p class="info-white ${corlist}">${alunos.email}</p>
        `;
        info_content_3.innerHTML += `
          <div class="info-white dflex ${corlist}">
            <img onclick="editarAluno(${alunos.id})" src="../../svg/editar.svg" alt="">
            <img onclick="deletarAluno(${alunos.id})" src="../../svg/delete.svg" alt="">
          </div>
        `;
      });
    }

    const btnPurpleMenu = () => {
      const purpleBTN =document.getElementById('alunos')
        purpleBTN.classList.toggle("btnstatic-purple")
    }

     //recebe os dados da api
    const getAlunos = async () => {

        const retorno = await fetch ('http://localhost:3000/alunos')
        const alunos = await retorno.json()

        renderAlunos(alunos)
        btnPurpleMenu()
    }


    getAlunos()
    
    //retorna a pag novoMentor
    const novoAluno = () => {
        window.location = "/html/alunos/novoAluno.html"
    }
    //vai a pag editarMentor
    const editarAluno = (id)=> {
        window.location = `/html/alunos/editaraluno.html?id=${id}`
    }

    const deletarAluno = async (id) => {
       await  fetch(`http://localhost:3000/alunos/${id}`, {
            method: 'DELETE'
        })
    }
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