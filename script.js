function enviarMensagem() {
    // Obter os valores dos campos do formulário
    const nome = document.getElementById("nomeesobrenome").value;
    const email = document.getElementById("E-mail").value;
    const telefone = document.getElementById("Telefone").value;
    const mensagem = document.getElementById("mensagem").value;
  
    // Concatenar os valores em uma mensagem única
    const mensagemCompleta = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
  
    // Criar o link com a mensagem pré-definida
    const link = `https://wa.me/351931373069?text=${mensagemCompleta}`;
  
    // Redirecionar para o link
    window.location.href = link;
  }
  