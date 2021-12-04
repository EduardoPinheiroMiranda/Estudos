/*---------------------------olho------------------------------*/ 
let olho = document.querySelector('.fa-eye')
    olho.addEventListener('click', ()=>{//arrow functiun
        let novasenha = document.querySelector('#senha')
            if(novasenha.getAttribute('type')=='password'){
                novasenha.setAttribute('type','text')
            }else{
                novasenha.setAttribute('type', 'password')
            }
    })
/*---------------------------validação de login------------------------------*/ 
let alerta = document.querySelector('#alerta')
let user_valid = document.querySelector('#usuario')
let senha_valid = document.querySelector('#senha')

function entrar(){
    
    let lista_validacao = []

    let uservalidacao = {
        nome_user: '',
        senha: '',

    }
        lista_validacao = JSON.parse(localStorage.getItem('lista_de_cadastro'))

        lista_validacao.forEach((item)=> {
            if(user_valid.value == item.nome_usuario && senha_valid.value == item.Senha){
                uservalidacao = {
                    nome_user: item.nome_usuario,
                    senha: item.Senha
                }
            }
        })

            if(user_valid.value.length == 0 || senha_valid.value.length == 0){
                alerta.innerHTML =`*usuario ou senha incorreto, verifique se tudo está certo.`
            }else if(user_valid.value=='ADIM' && senha_valid.value=='ADIM'){
                window.location.href ="PÁGINA03_materia/INTRODUÇÃO/sumario.html"
            }else if(user_valid.value == uservalidacao.nome_user && senha_valid.value == uservalidacao.senha){
                window.location.href ="PÁGINA03_materia/INTRODUÇÃO/sumario.html"
            }else{
                alerta.innerHTML =`*usuario ou senha incorreto, verifique se tudo está certo.`
            }
}