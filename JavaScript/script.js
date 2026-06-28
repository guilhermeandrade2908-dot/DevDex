const pokedexLista = []; // ARRAY GLOBAL PARA ARMAZENAR OS OBJETOS POKÉMON

const botaoJornada = document.getElementById("btnJornada").addEventListener("click", iniciarJornada); // PEGAMOS O BOTÃO PELA  ID, ARMAZENAMOS NA VARIÁVEL E FAZEMOS A FUNÇÃO DE INICIAR JORNADA SER EXECUTADO AO CLICARMOS
const botaoCadastro = document.getElementById("btnCadastrar").addEventListener("click", cadastrarPokemon); // PEGAMOS O ID DO BOTÃO DE CADASTRO E O ARMAZENAMOS NA VARIÁVEL, FAZENDO A FUNÇÃO DE CADASTRO SER EXECUTADA AO CLICAR
const botaoListar = document.getElementById("btnListar").addEventListener("click", listarPokemon); // PEGAMOS O ID DO BOTÃO DE LISTAGEM E ARMAZENAMOS NA VARIÁVEL, FAZENDO A FUNÇÃO DE LISTAGEM SER EXECUTADA AO CLICAR
const executeBusca = document.getElementById("btnExecutarBusca").addEventListener("click", buscarPokemon); // PEGAMOS O ID DO BOTÃO DE BUSCA E ARMAZENAMOS NA VARIÁVEL, FAZENDO A FUNÇÃO DE BUSCA SER EXECUTADA AO CLICAR
const botaoSair = document.getElementById("btnSair").addEventListener("click", sairPokedex); // PEGAMOS O ID DO BOTÃO DE SAIR E ARMAZENAMOS NA VARIÁVEL, FAZENDO A FUNÇÃO DE SAIR SER EXECUTADA AO CLICAR

function iniciarJornada() { // ACIONA QUANDO CLICAMOS NO BOTÃO DE COMEÇAR JORNADA

    const nome = document.getElementById("nomeTreinador").value.trim(); // PEGA O VALOR DIGITADO NO INPUT
    const nomeUpperCase = nome.toUpperCase(); // TRANSFORMA O NOME DIGITADO EM UPPERCASE PARA O TITULO

    
    const pergunta = document.getElementById("pergunta"); // PEGA O H2 DA PERGUNTA PELO ID E SALVA NA VARIÁVEL
    const titulo = document.getElementById("title"); // PEGA O TÍTULO "POKÉDEX"
    const mensagem = document.getElementById("mensagem"); // VARIÁVEL RESPONSÁVEL POR ARMAZENAR A MENSAGEM QUE SERÁ MOSTRADA
    
    if (nome === "") { // ACIONA CASO O USUÁRIO NÃO DIGITE SEU NOME NO INPUT
        mensagem.innerText = "Digite o nome do treinador."; 
        return;
    }
     
    titulo.innerText = `POKÉDEX DE ${nomeUpperCase}`; // ALTERA O TÍTULO QUANDO O USUÁRIO DIGITAR O NOME NA ENTRADA
    pergunta.style.display = "none" // REMOVE A PERGUNTA QUANDO O USUÁRIO DIGITA SUA ENTRADA
    mensagem.innerText = `Seja bem-vindo, ${nome}! Sua Pokédex está pronta para uso.`; // MENSAGEM APARECE JUNTO DA ENTRADA E CLIQUE NO BOTÃO

}

function cadastrarPokemon() { // ACIONA A FUNÇÃO DE CADASTRO DE POKÉMON CASO O USUÁRIO CLIQUE NO BOTÃO
    
    const inputNome = document.getElementById("pokeNome"); // PEGA A ENTRADA DO NOME DO POKÉMON PELO ID
    const inputTipo = document.getElementById("pokeTipo"); // PEGA A ENTRADA DO TIPO DO POKÉMON PELO ID
    const inputNivel = document.getElementById("pokeNivel"); // PEGA A ENTRADA DO NÍVEL DO POKÉMON PELO ID

    const nomePokemon = inputNome.value.trim(); // VARIÁVEL QUE ARMAZENA A ENTRADA DO NOME
    const tipoPokemon = inputTipo.value.trim(); // VARIÁVEL QUE ARMAZENA A ENTRADA DO TIPO
    const nivelPokemon = inputNivel.value.trim(); // VARIÁVEL QUE ARMAZENA A ENTRADA DO NÍVEL

    if (nomePokemon === "" || tipoPokemon === "" || nivelPokemon === "") { // SE QUALQUER UMA DESSAS ENTRADAS ESTIVEREM SEM UMA ENTRADA, ACIONA ESSA MENSAGEM
        msgCadastro.style.color = "red";
        msgCadastro.innerText = "Por favor, preencha todos os campos!";
        return;
    }

    const novoPokemon = { // VARIÁVEL OBJETO QUE GUARDA OS VALORES DE ENTRADA REFERENTES AOS POKÉMON E OS GUARDA
        nome: nomePokemon, // RECEBE O NOME DO POKÉMON DIGITADO NA ENTRADA
        tipo: tipoPokemon, // RECEBE O TIPO DO POKÉMON DIGITADO NA ENTRADA
        nivel: Number(nivelPokemon) // RECEBE O NÍVEL DO POKÉMON DIGITADO NA ENTRADA
    };

    pokedexLista.push(novoPokemon); // PEGA OS VALORES QUE FORAM GUARDADOS NO OBJETO E LANÇA PARA O ARRAY GLOBAL. CADA NOVO VAOR VAI PARA O FIM DA LISTA

    msgCadastro.style.color = "green";
    msgCadastro.innerText = `${nomePokemon} foi adicionado com sucesso!`; // A MENSAGEM PEGA SOMENTE O VALOR DO NOME E SURGE QUANDO A FUNÇÃO É REALIZADA

    inputNome.value = ""; // LIMPA OS CAMPOS DE DIGITAÇÃO NO HTML AUTOMATICAMENTE (VALE O MESMO PARA OS QUE ESTÃO ABAIXO)
    inputTipo.value = "";
    inputNivel.value = "";
}

function listarPokemon() { // ACIONA A FUNÇÃO DE LISTAR OS POKÉMON JÁ CADASTRADOS

    const listaDiv = document.getElementById("listaPokemon"); // PEGA A DIV QUE GERA A LISTAGEM DE POKÉMON PELO ID
    listaDiv.innerHTML = ""; // LIMPA O CONTEÚDO ANTIGO

    if (pokedexLista.length === 0) { // SE NÃO HOUVER NENHUM ELEMENTO NO ARRAY GLOBAL, GERA ESSA MENSAGEM: 
        listaDiv.innerHTML = "<p style='color: red;'>Nenhum Pokémon cadastrado ainda!</p>";
        return;
    }

    pokedexLista.forEach((pokemon, index) => { // PERCORRE O ARRAY GLOBAL E GERA UMA ESTRUTURA PARA CADA UM DOS POKÉMON REGISTRADOS

        const cardPokemon = `<div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px;">
                                <strong>#${index + 1} - ${pokemon.nome}</strong><br>
                                <span>Tipo: ${pokemon.tipo}</span><br>
                                <span>Nivel: ${pokemon.nivel}</span>
                            </div>`; // TEMPLATE HTML PARA CADA UM DOS POKÉMON

                            listaDiv.innerHTML += cardPokemon; // CRIA UM CARD PARA O POKÉMON ATUAL, SEM APAGAR OS QUE JÁ FORAM RENDERIZADOS
    })
}

function buscarPokemon() { // ACIONA A FUNÇÃO DE BUSCAR O POKÉMON PELO NOME

    const termoBuscado = document.getElementById("buscaNome").value.trim(); // PEGA O VALOR DIGITADO NA ÁREA DE DIGITAÇÃO E ARMAZENA NA VARIÁVEL
    const resultadoBuscaDiv = document.getElementById("resultadoBusca"); // RECEBE O ID DA DIV QUE MOSTRA O RESULTADO

    if (termoBuscado === "") { // OCORRE CASO NÃO HÁ NENHUM VALOR DIGITADO
        resultadoBuscaDiv.innerHTML = "<p style='color: red;'>Digite um nome válido para buscar!</p>";
        return;
    }

    let encontrado = false; // VARIÁVEL UTILIZADA PARA APONTAR SE O VALOR FOI ENCONTRADO OU NÃO

    pokedexLista.forEach((pokemon) => { // PERCORRE O ARRAY GLOBAL ONDE OS POKÉMON ESTÃO SALVOS

        if (pokemon.nome.toLowerCase() === termoBuscado.toLowerCase()) { // CASO ENCONTRE ATRAVÉS DO NOME, GERA A ESTRUTURA ABAIXO COM OS TRÊS DADOS DO POKÉMON 
            const cardResultado = `<p style="color: green; font-weight: bold;">Pokémon Encontrado!</p>
                <div style="border: 2px solid green; padding: 10px; border-radius: 5px; background-color: #f0fff0;">
                    <strong>${pokemon.nome}</strong><br>
                    <span>Tipo: ${pokemon.tipo}</span><br>
                    <span>Nível: ${pokemon.nivel}</span>
                </div>`;

                resultadoBuscaDiv.innerHTML = cardResultado; // GERA O CARD DE RESULTADO NA TELA DO SITE
                encontrado = true; // ENCONTRADO SE TORNA TRUE
        }
    });

    if (!encontrado) { // CASO NÃO SEJA ENCONTRADO, GERA ESSA MENSAGEM
        resultadoBuscaDiv.innerHTML = "<p style='color: red;'>Pokémon não encontrado.</p>";
    }
}

function sairPokedex() { // ACIONA A FUNÇÃO DE SAIR DA POKÉDEX

    const confirmar = confirm("Tem certeza que deseja sair e zerar sua Pokédex?"); // MENSAGEM DE CONFIRMAÇÃO PARA O USUÁRIO

    if (confirmar) { // SE O USUÁRIO CONFIRMAR, APAGA TUDO E RESETA O SITE

        pokedexLista.length = 0; // MUDA O TAMANHO DO ARRAY, APAGANDO OS OBJETOS ANTERIORES

        // FAZ TUDO VOLTAR AO ESTADO ANTERIOR:
        document.getElementById("listaPokemon").innerHTML = "";
        document.getElementById("resultadoBusca").innerHTML = "";
        document.getElementById("buscaNome").value = "";
        
        document.getElementById("title").innerText = "POKÉDEX";
        document.getElementById("nomeTreinador").value = "";
        document.getElementById("mensagem").innerText = "Você saiu da Pokédex. Digite seu nome para iniciar uma nova jornada!";
        document.getElementById("msgCadastro").innerText = "";
        
        document.getElementById("pergunta").style.display = "block";
    }

}