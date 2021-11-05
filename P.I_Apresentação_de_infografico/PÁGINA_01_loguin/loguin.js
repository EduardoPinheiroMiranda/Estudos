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
let alertauser = document.querySelector("#alerta_user")
let alertasenha = document.querySelector("#alerta_senha")

alerta_user.addEventListener('key', ()=>{
    if(alertauser){
        
    }
})