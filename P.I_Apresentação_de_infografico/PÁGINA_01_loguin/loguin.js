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