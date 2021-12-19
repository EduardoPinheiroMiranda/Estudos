/*--------------------------|olho na senhas|--------------------------*/
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
/*--------------------Validação dos campos e armazenamento----------------*/ 

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

let valida_nome 
let valida_email 
let valida_data 
let valida_user 
let valida_senha 
let valida_conf_senha

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <10 || typeof(nome.value)=='number'){
        alerta_nome.setAttribute('style','color: red')
        alerta_nome.innerHTML = `*Nome incompleto`
        valida_nome = 'false'
    }else{
        alerta_nome.setAttribute('style','color:white')
        alerta_nome.innerHTML=''
        valida_nome = 'true'
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 5 || email.value.indexOf('@') == -1){
        alerta_email.setAttribute('style','color:red')
        alerta_email.innerHTML = 'e-mail invalido'
        valida_email = 'false'
    }else{
        alerta_email.setAttribute('style','color: white')
        alerta_email.innerHTML = ''
        valida_email = 'true'
    }
})

data.addEventListener('keyup', ()=>{
    if(data.value <10000000){
        alerta_data.setAttribute('style', 'color:red')
        alerta_data.innerHTML = 'data invalida'
        valida_data = 'false'
    }else{
        alerta_data.setAttribute('style','color:white')
        alerta_data.innerHTML = ''
        valida_data = 'true'
    }
})

user_name.addEventListener('keyup', ()=>{
    if(user_name.value.length < 5){
        alerta_user.setAttribute('style','color:red')
        alerta_user.innerHTML = 'o minimo de caracteres é 5'
        valida_user = 'false'
    }else{
        alerta_user.setAttribute('style','color: white')
        alerta_user.innerHTML = ''
        valida_user = 'true'
    }
})

input_senha.addEventListener('keyup', ()=>{
    if(input_senha.value.length < 8){
        alerta_senha.setAttribute('style', 'color:red')
        alerta_senha.innerHTML = 'o minimo de caracteres é 8'
        valida_senha = 'false'
    }else{
        alerta_senha.setAttribute('style','color:white')
        alerta_senha.innerHTML = ''
        valida_senha = 'true'
    }
})

conf_senha.addEventListener('keyup', ()=>{
    if(conf_senha.value != input_senha.value){
        alerta_conf_senha.setAttribute('style','color: red')
        alerta_conf_senha.innerHTML = 'essa senha está diferênta da anterior'
        valida_conf_senha = 'false'
    }else{
        alerta_conf_senha.setAttribute('style','color: white')
        alerta_conf_senha.innerHTML = ''
        valida_conf_senha = 'true'
    }
})

function confirmar(){
    if(valida_nome=='true'&&valida_email=='true'&&valida_data=='true'&&valida_user=='true'&&valida_senha=='true'&&valida_conf_senha=='true'){
        let lista_de_cadastro = JSON.parse(localStorage.getItem('lista_de_cadastro') || '[]')

        lista_de_cadastro.push({
            nomo_completo: nome.value,
            Email: email.value,
            data_nascimento: data.value,
            nome_usuario: user_name.value,
            Senha: input_senha.value
        })
            localStorage.setItem('lista_de_cadastro', JSON.stringify(lista_de_cadastro))

                setTimeout(() => {
                    window.location.href="../Login_Assesso.html"
                },3000)
        alert("Cadastro realizado com sucesso")
    }else{
        alert('Ainda a campos que estão vazios ou não foram preenchidos corretamente ')
        
    }


}