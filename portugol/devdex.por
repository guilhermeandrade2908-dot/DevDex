programa {

  cadeia nomes[50]
  cadeia tipos[50]
  inteiro niveis[50]
  inteiro quantidade = 0

  funcao inicio() {
    cadeia nomeTreinador
    inteiro opcao = 0

    escreva("Qual é o seu nome, treinador? ")
    leia(nomeTreinador)

    escreva("\nBem-vindo, ", nomeTreinador, "!\n")
    escreva("\nSua Pokédex está pronta para uso.\n")

    enquanto(opcao != 4) {
        escreva("\n====================")
        escreva("\nPOKÉDEX DE ", nomeTreinador)
        escreva("\n====================")
        escreva("\n1 - Cadastrar Pokémon")
        escreva("\n2 - Listar Pokémon")
        escreva("\n3 - Buscar")
        escreva("\n4 - Sair")
        escreva("\nEscolha: ")
        leia(opcao)

        escolha(opcao) {
        caso 1:
              escreva("\nAbrindo cadastro...\n")
              cadeia nome
              cadeia tipo
              inteiro nivel

              escreva("Nome: ")
              leia(nome)

              escreva("Tipo: ")
              leia(tipo)

              escreva("Nível: ")
              leia(nivel)
              
              pare

        caso 2:
              escreva("\nConsultando Pokédex...\n")
              pare

        caso 3: 
              escreva("\nIniciando busca...\n")
              pare

        caso 4: 
              escreva("\nAté logo, ", nomeTreinador, "!\n")
              pare
        
        caso contrario:
              escreva("\nOpcão inválida!\n")
            
            }
        }
    }
}