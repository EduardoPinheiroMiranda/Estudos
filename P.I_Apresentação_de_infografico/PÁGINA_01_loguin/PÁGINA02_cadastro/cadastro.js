let senha = document.querySelector('#ver_senha')
    senha.addEventListener('click', ()=>{//arrow functiun
        let novasenha = document.querySelector('#input_senha')
            if(novasenha.getAttribute('type')=='password'){
                novasenha.setAttribute('type','text')
            }else{
                novasenha.setAttribute('type', 'password')
            }
    })

    let confirmar_senha = document.querySelector('#ver_conf_senha')
    confirmar_senha.addEventListener('click', ()=>{//arrow functiun
        let conf_senha = document.querySelector('#conf_senha')
            if(conf_senha.getAttribute('type')=='password'){
                conf_senha.setAttribute('type','text')
            }else{
                conf_senha.setAttribute('type', 'password')
            }
    })
/*--------------------------|olho na senhas|--------------------------*/

let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let data = document.querySelector("#data")
let user_name = document.querySelector("#user_name")
let input_senha = document.getElementById("input_senha")
let conf_senha = document.querySelector("#conf_senha")

let alerta_nome = document.querySelector("#alerta_nome")
let alerta_email = document.querySelector("#alerta_email")
let alerta_data = document.querySelector("#alerta_data")
let alerta_user = document.querySelector("#alerta_user")
let alerta_senha = document.querySelector("#alerta_senha")
let alerta_conf_senha =document.querySelector("#alerta_conf_senha")

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <10){
        alerta_nome.setAttribute('style','color: red')
        alerta_nome.innerHTML = `*Nome incompleto`
    }else{
        alerta_nome.setAttribute('style','color:white')
        alerta_nome.innerHTML=''
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 5 || email.value.indexOf('@') == -1){
        alerta_email.setAttribute('style','color:red')
        alerta_email.innerHTML = 'e-mail invalido'
    }else{
        alerta_email.setAttribute('style','color: white')
        alerta_email.innerHTML = ''
    }
})

data.addEventListener('keyup', ()=>{
    if(data.value <10000000){
        alerta_data.setAttribute('style', 'color:red')
        alerta_data.innerHTML = 'data invalida'
    }else{
        alerta_data.setAttribute('style','color:white')
        alerta_data.innerHTML = ''
    }
})

user_name.addEventListener('keyup', ()=>{
    if(user_name.value.length < 5){
        alerta_user.setAttribute('style','color:red')
        alerta_user.innerHTML = 'o minimo de caracteres é 5'
    }else{
        alerta_user.setAttribute('style','color: white')
        alerta_user.innerHTML = ''
    }
})

input_senha.addEventListener('keyup', ()=>{
    if(input_senha.value.length < 8){
        alerta_senha.setAttribute('style', 'color:red')
        alerta_senha.innerHTML = 'o minimo de caracteres é 8'
    }else{
        alerta_senha.setAttribute('style','color:white')
        alerta_senha.innerHTML = ''
    }
})

conf_senha.addEventListener('keyup', ()=>{
    if(conf_senha.value != input_senha.value){
        alerta_conf_senha.setAttribute('style','color: red')
        alerta_conf_senha.innerHTML = 'essa senha está diferênta da anterior'
    }else{
        alerta_conf_senha.setAttribute('style','color: white')
        alerta_conf_senha.innerHTML = ''
    }
})

function confirmar(){


}