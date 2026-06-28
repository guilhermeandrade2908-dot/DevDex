// Array Global para guardar os Pokémon
const pokedexLista = [];

// Ouvintes de Evento (Gatilhos de Clique)
document.getElementById("btnJornada").addEventListener("click", iniciarJornada);
document.getElementById("btnCadastrar").addEventListener("click", salvarPokemon);
document.getElementById("btnExecutarBusca").addEventListener("click", buscarPokemon);
document.getElementById("btnSair").addEventListener("click", sairSistema);

// Ouvintes de clique do Menu para alternar as Telas
document.getElementById("btnAbaCadastrar").addEventListener("click", () => alternarAba("areaCadastro"));
document.getElementById("btnAbaListar").addEventListener("click", () => {
    listarPokemon(); // Atualiza a lista antes de mostrar a tela
    alternarAba("areaLista");
});
document.getElementById("btnAbaBuscar").addEventListener("click", () => alternarAba("areaBusca"));


// 1. Iniciar Jornada (Login do Treinador)
function iniciarJornada() {
   
    const nome = document.getElementById("nomeTreinador").value.trim();
    
    if (nome === "") {
       
        alert("Por favor, insira seu nome de treinador!");
        return;
    }
    
    // Altera cabeçalho e esconde a caixinha de input do login
    document.getElementById("title").innerText = `POKÉDEX DE ${nome.toUpperCase()}`;
    document.getElementById("mensagem").innerText = "Use os botões do painel inferior para navegar.";
    document.getElementById("pergunta").style.display = "none";
    
    // Libera o menu de botões físicos e abre direto no cadastro
    document.getElementById("menuPokedex").style.display = "grid";
    alternarAba("areaCadastro");
}


// 2. Função Alternar Abas (Esconde as inativas e mostra a selecionada)
function alternarAba(idAbaDesejada) {
    
    const abas = document.querySelectorAll('.aba-conteudo');
    abas.forEach(aba => aba.style.display = "none");

    const abaAlvo = document.getElementById(idAbaDesejada);
    
    if (abaAlvo) {
        abaAlvo.style.display = "block";
    }
}


// 3. Cadastrar Pokémon
function salvarPokemon() {
    
    const nome = document.getElementById("pokeNome").value.trim();
    const tipo = document.getElementById("pokeTipo").value.trim();
    const nivel = document.getElementById("pokeNivel").value.trim();
    const msg = document.getElementById("msgCadastro");

    if (nome === "" || tipo === "" || nivel === "") {
        
        msg.style.color = "red";
        msg.innerText = "Preencha todos os campos!";
        return;
    }

    // Cria o objeto e empurra para a nossa pokedexLista (o seu array global)
    const novoPokemon = { nome: nome, tipo: tipo, nivel: nivel };
    pokedexLista.push(novoPokemon);

    msg.style.color = "green";
    msg.innerText = `${nome} cadastrado com sucesso!`;

    // Limpa o formulário
    document.getElementById("pokeNome").value = "";
    document.getElementById("pokeTipo").value = "";
    document.getElementById("pokeNivel").value = "";
}


// 4. Listar Pokémon
function listarPokemon() {
    
    const listaDiv = document.getElementById("listaPokemon");
    listaDiv.innerHTML = "";

    if (pokedexLista.length === 0) {
        
        listaDiv.innerHTML = "<p style='color: red;'>Nenhum Pokémon cadastrado ainda!</p>";
        return;
    }

    pokedexLista.forEach((pokemon, index) => {
        // Renderiza os cards um por um acumulando com +=
        const cardPokemon = `
            <div style="padding: 10px; margin: 10px 0; border-radius: 5px;">
                <strong>#${index + 1} - ${pokemon.nome}</strong><br>
                <span>Tipo: ${pokemon.tipo}</span><br>
                <span>Nivel: ${pokemon.nivel}</span>
            </div>`;
        
            listaDiv.innerHTML += cardPokemon;
    });
}


// 5. Buscar Pokémon por Nome
function buscarPokemon() {
    
    const termoBuscado = document.getElementById("buscaNome").value.trim();
    
    const resultadoBuscaDiv = document.getElementById("resultadoBusca");

    resultadoBuscaDiv.innerHTML = "";

    if (termoBuscado === "") {
        
        resultadoBuscaDiv.innerHTML = "<p style='color: red;'>Digite um nome para buscar!</p>";
        return;
    }

    let encontrado = false;

    pokedexLista.forEach((pokemon) => {
        // Ignora maiúsculas/minúsculas de ambos os lados
        if (pokemon.nome.toLowerCase() === termoBuscado.toLowerCase()) {
            
            const cardResultado = `<p style="color: green; font-weight: bold;">Pokémon Encontrado!</p>
                                   <div style="padding: 10px; border-radius: 5px; background-color: #f0fff0;">
                                        <strong>${pokemon.nome}</strong><br>
                                        <span>Tipo: ${pokemon.tipo}</span><br>
                                        <span>Nível: ${pokemon.nivel}</span>
                                    </div>`;

            resultadoBuscaDiv.innerHTML = cardResultado;
            encontrado = true;
        }
    });

    if (!encontrado) {
        
        resultadoBuscaDiv.innerHTML = "<p style='color: red;'>Pokémon não encontrado.</p>";
    }
}


// 6. Sair do Sistema (Reset Completo)
function sairSistema() {
    
    const confirmar = confirm("Tem certeza que deseja sair e zerar sua Pokédex?");
    
    if (confirmar) {
        
        pokedexLista.length = 0; // Esvazia o array de forma segura

        // Limpa resquícios visuais de dados antigos
        document.getElementById("listaPokemon").innerHTML = "";
        document.getElementById("resultadoBusca").innerHTML = "";
        document.getElementById("buscaNome").value = "";
        
        if (document.getElementById("msgCadastro")) {
            document.getElementById("msgCadastro").innerText = "";
        }
        
        // Retorna os textos do estado inicial de fábrica
        document.getElementById("title").innerText = "POKÉDEX";
        document.getElementById("nomeTreinador").value = "";
        document.getElementById("mensagem").innerText = "Digite seu nome para iniciar sua jornada de mestre pokémon!";
        
        // Controla as exibições elásticas das divs
        document.getElementById("menuPokedex").style.display = "none";
        alternarAba(""); 
        document.getElementById("pergunta").style.display = "block";
    }
}