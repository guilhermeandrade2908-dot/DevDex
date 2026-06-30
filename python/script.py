nomes = []
tipos = []
niveis = []
quantidade = 0
opcao = 0

nomeTreinador = input("Qual é o seu nome, treinador? ")

print(f"\nBem-vindo, {nomeTreinador}!\n")
print("\nSua Pokédex está pronta para uso.\n")

while(opcao != 4):
    print("\n====================")
    print(f"\nPOKÉDEX DE {nomeTreinador.upper()}")
    print("\n====================")
    print("\n1 - Cadastrar Pokémon")
    print("\n2 - Listar Pokémon")
    print("\n3 - Buscar")
    print("\n4 - Sair")
    opcao = int(input("\nEscolha: "))

    match opcao:
        case 1:
            print("\nAbrindo cadastro...\n")
        case 2:
            print("\nConsultando Pokédex...\n")
        case 3:
            print("\nIniciando busca...\n")
        case 4: 
            print(f"Até logo, {nomeTreinador}!\n")
        case _:
            print("\nOpção inválida! Digite uma das disponíveis.\n")




