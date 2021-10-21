function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "inline"){
        campo.style.display = "none"
    }else{
        campo.style.display = "inline"
    }
}

projeto1 = {
    titulo: 'Calculadora',
    descricao: 'Projeo desenvolvido utilizando javascript, html e css de uma calculadora de média simples.',
    foto: 'calculadora.png'
}

projeto2 = {
    titulo: 'Conversor',
    descricao: 'Descrição do conversor',
    foto: 'conversor.png'
}

let projetos = [projeto1 , projeto2]

let projetoAtual = 0

function ProximoProjeto(){
    if(projetoAtual < 1){
        projetoAtual++
    }else{
        projetoAtual = 0
    }    

    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual].titulo

    descriçao = document.querySelector(".texto-corpo")
    descriçao.innerHTML = projetos[projetoAtual].descricao

    imagem = document.querySelector(".foto-perfil")
    imagem.src= "img/" + projetos[projetoAtual].foto
}    