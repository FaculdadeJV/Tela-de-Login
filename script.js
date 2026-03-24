
const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao clicar no botão
    event.preventDefault();

    // Captura dos valores
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;
    const cargo = document.getElementById('cargo').value;

    // Lógica de Validação
    if (matricula === '' || senha === '' || cargo === '') {
        alert("Erro: Por favor, preencha todos os campos!");
    } else {
        alert(`Bem-vindo! \nMatrícula: ${matricula} \nCargo: ${cargo}`);
    }
});