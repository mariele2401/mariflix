function inserirNome(){
    let nomeUsuario = promtp("informe seu nome:");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome()