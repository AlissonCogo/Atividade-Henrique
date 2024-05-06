function validarForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    var nomeRegex = /^[^\d]+$/;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var telefoneRegex = /^\d{2}\d{2}\d{4,5}\d{4}$/;

    if (!nomeRegex.test(nome)) {
        alert('Por favor, insira um nome válido sem números.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }

    if (!telefoneRegex.test(telefone)) {
        alert('Por favor, insira um telefone válido no formato DDDCelular.');
        return false;
    }

    return true;
}
