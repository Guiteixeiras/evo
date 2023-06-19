
var parceiro = "*Parceiro*";

// Listener para o botão de envio do formulário
document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();
  
    // Obter os dados do formulário
    const nome = document.querySelector("#nome").value;
    const cpfCnpj = document.querySelector("#cpf-cnpj").value;
    const rua = document.querySelector("#rua").value;
    const numero = document.querySelector("#numero").value;
    const compl = document.querySelector("#compl").value;
    const bairro = document.querySelector("#bairro").value;
    const cep = document.querySelector("#cep").value;
    const cidade = document.querySelector("#cidade").value;
    const uf = document.querySelector("#uf").value;
    const celular = document.querySelector("#celular").value;
    const telefone = document.querySelector("#telefone").value;
    const email = document.querySelector("#email").value;
  
    // Formatando o texto para enviar via WhatsApp
    let  textToSend = `assunto: ${parceiro}\n\nNome Completo / Razão Social: ${nome}\n`;
    textToSend += `CPF / CNPJ: ${cpfCnpj}\n`;
    textToSend += `Rua: ${rua}\n`;
    textToSend += `Número: ${numero}\n`;
    textToSend += `Complemento: ${compl}\n`;
    textToSend += `Bairro: ${bairro}\n`;
    textToSend += `CEP: ${cep}\n`;
    textToSend += `Cidade: ${cidade}\n`;
    textToSend += `UF: ${uf}\n`;
    textToSend += `Telefone Celular: ${celular}\n`;
    textToSend += `Telefone Residencial: ${telefone}\n`;
    textToSend += `E-mail: ${email}\n`;
  
    // Definir o número do seu WhatsApp
    const PHONE_NUMBER = "5565984633273";
  
    // Montar a URL do WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(textToSend)}`;
  
    // Abrir o aplicativo do WhatsApp
    window.open(url, "_blank");
  
    // Limpar os dados do formulário
    document.getElementById("form").reset();
  });
  
  
  
  
  
  
  