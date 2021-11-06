let olho = document.querySelector('.fa-eye')
    olho.addEventListener('click', ()=>{//arrow functiun
        let novasenha = document.querySelector('#senha')
            if(novasenha.getAttribute('type')=='password'){
                novasenha.setAttribute('type','text')
            }else{
                novasenha.setAttribute('type', 'password')
            }
    })
/*---------------------------olho------------------------------*/ 
let alertauser = document.querySelector('#alerta_user')
let alertasenha = document.querySelector('#alerta_senha')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')


function entrar(){
    
    let lista_validacao = []
    let uservalidacao = {
        nome_user: '',
        Senha: ''
    }
        lista_validacao= JSON.parse(localStorage.getItem('lista_de_cadastro'))
        console.log(lista_validacao)

        lista_validacao.forEach((item)=> {
            if(usuario.value == item.nome_usuario && senha.value == item.senha){
                uservalidacao = {
                    nome_user: item.nome_usuario,
                    senha: item.senha
                }
            }
        })
        console.log(uservalidacao)
}