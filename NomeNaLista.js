function VerificarEntrada() {
    nomeConvidado = document.getElementById('nome').value;
    ConvidadosStanley = ['Anne', 'Kenne', 'Laine', 'Kevin']
    if (ConvidadosStanley.includes(nomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerHTML = 'VOCÊ PODE ENTRAR!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerHTML = 'VOCÊ NÃO PODE ENTRAR!'
    }
}