let usuario = document.getElementById('usuario')
let senha = document.getElementeById('senha')
let alerta = document.getElementById('alerta')

function confirmar(){
    if(senha.value == "1234"){
        alert("certo")
    }else{
        alert("errado")
    }
}