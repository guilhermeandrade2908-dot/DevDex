const botao = document.getElementById("btnJornada"); // PEGAMOS O ID DO BOTÃO PELA VARIÁVEL

botao.addEventListener("click", iniciarJornada); // ESCUTA O CLIQUE DO USUÁRIO  

function iniciarJornada() {

    const nome = document.getElementById("nomeTreinador").value.trim(); // PEGA O VALOR DIGITADO NO INPUT
    const nomeUpperCase = nome.toUpperCase(); // TRANSFORMA O NOME DIGITADO EM UPPERCASE PARA O TITULO

    const pergunta = document.getElementById("pergunta"); // PEGA O H2 DA PERGUNTA PELO ID E SALVA NA VARIÁVEL
    
    const titulo = document.getElementById("title"); // PEGA O TÍTULO "POKÉDEX"
    const mensagem = document.getElementById("mensagem"); // VARIÁVEL RESPONSÁVEL POR ARMAZENAR A MENSAGEM QUE SERÁ MOSTRADA
    if (nome === "") { // ACIONA CASO O USUÁRIO NÃO DIGITE NADA
        mensagem.innerText = "Digite o nome do treinador."; 
        return;
    }
    
    titulo.innerText = `POKÉDEX DE ${nomeUpperCase}`; // ALTERA O TÍTULO QUANDO O USUÁRIO DIGITAR O NOME NA ENTRADA
    
    pergunta.style.display = "none" // REMOVE A PERGUNTA QUANDO O USUÁRIO DIGITA SUA ENTRADA
   
    mensagem.innerText = `Seja bem-vindo, ${nome}! Sua Pokédex está pronta para uso.`; // MENSAGEM APARECE JUNTO DA ENTRADA E CLIQUE NO BOTÃO

}