programa {
  funcao inicio() {
    cadeia nomeTreinador
    inteiro ocao = 0

    escreva("Qual é o seu nome, treinador? ")
    leia(nomeTreinador)

    escreva("\nBem-vindo, ", nomeTreinador, "!\n")
    escreva("Sua jornada como treinador Pokémon vai começar...")

    enquanto(opcao != 4) {
        escreva("\n=== DEVDEX ===\n")
        escreva("Cadastrar [1]\n")
        escreva("Listar [2]\n")
        escreva("Buscar [3]\n")
        escreva("Sair [4]\n")
        escreva("Escolha: ")
        leia(opcao)

        escolha(opcao) {
        caso 1:
              escreva("Cadastrar Pokémon\n")
              pare

        caso 2:
              escreva("Listar Pokémon\n")
              pare

        caso 3: 
              escreva("Buscar Pokémon\n")
              pare

        caso 4: 
              escreva("Encerrando...\n")
              pare
        
        caso contrario:
              escreva("Opcão inválida!\n")
            
            }
        }
    }
}