function inserirNome(){
    let nomeUsuario = prompt("informe seu nome:");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();