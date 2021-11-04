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

let pnome = document.getElementById("pnome")
let pemail = document.querySelector("#pemail")
let pdata = document.querySelector("#pdata")
let pusuario = document.querySelector("#pusuario")
let psenha = document.querySelector("#psenha")
let pconfirmar_senha = document.querySelector("#pconfirmar_senha")

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <10){
        pnome.setAttribute('style','color: red')
    }else{
        pnome.setAttribute('style','color:white')
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 5 || email.value.indexOf('@') == -1){
        pemail.setAttribute('style','color:red')
    }else{
        pemail.setAttribute('style','color: white')
    }
})

data.addEventListener('keyup', ()=>{
    if(data.value <10000000){
        pdata.setAttribute('style', 'color:red')
    }else{
        pdata.setAttribute('style','color:white')
    }
})

user_name.addEventListener('keyup', ()=>{
    if(user_name.value.length < 5){
        pusuario.setAttribute('style','color:red')
    }else{
        pusuario.setAttribute('style','color: white')
    }
})



function confirmar(){


}