const pokedexLista = []; // ARRAY GLOBAL PARA ARMAZENAR OS OBJETOS POKÉMON

const botaoJornada = document.getElementById("btnJornada").addEventListener("click", iniciarJornada); // PEGAMOS O BOTÃO PELA  ID, ARMAZENAMOS NA VARIÁVEL E FAZEMOS A FUNÇÃO DE INICIAR JORNADA SER EXECUTADO AO CLICARMOS
const botaoCadastro = document.getElementById("btnCadastrar").addEventListener("click", cadastrarPokemon); // PEGAMOS O ID DO BOTÃO DE CADASTRO E O ARMAZENAMOS NA VARIÁVEL, FAZENDO A FUNÇÃO DE CADASTRO SER EXECUTADA AO CLICAR
const botaoListar = document.getElementById("btnListar").addEventListener("click", listarPokemon); // PEGAMOS O ID DO BOTÃO DE LISTAGEM E ARMAZENAMOS NA VARIÁVEL, FAZENDO A FUNÇÃO DE LISTAGEM SER EXECUTADA AO CLICAR

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

    const listaDiv = document.getElementById("listaPokemon"); // PEGA A DIV QUE GERÁ A LISTAGEM DE POKÉMON PELO ID
    listaDiv.innerHTML = ""; // LIMPA O CONTEÚDO ANTIGO

    if (pokedexLista.length === 0) { // SE NÃO HOUVER NENHUM ELEMENTO NO ARRAY GLOBAL, GERÁ ESSA MENSAGEM: 
        listaDiv.innerHTML = "<p style='color: red;'>Nenhum Pokémon cadastrado ainda!</p>";
        return;
    }

    pokedexLista.forEach((pokemon, index) => { // PERCORRE O ARRAY GLOBAL E GERÁ UMA ESTRUTURA PARA CADA UM DOS POKÉMON REGISTRADOS

        const cardPokemon = `<div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px;">
                                <strong>#${index + 1} - ${pokemon.nome}</strong><br>
                                <span>Tipo: ${pokemon.tipo}</span><br>
                                <span>Nivel: ${pokemon.nivel}</span>
                            </div>`; // TEMPLATE HTML PARA CADA UM DOS POKÉMON

                            listaDiv.innerHTML += cardPokemon; // CRIA UM CARD PARA O POKÉMON ATUAL, SEM APAGAR OS QUE JÁ FORAM RENDERIZADOS
    })
}