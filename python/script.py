pokedex = []
opcao = 0

nomeTreinador = input("Qual é o seu nome, treinador? ")

print(f"\nBem-vindo, {nomeTreinador}!\n")
print("\nSua Pokédex está pronta para uso.\n")

while opcao != 4:
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
            nome = input("Nome: ")
            tipo = input("Tipo: ")
            nivel = int(input("Nível: "))

            novo_pokemon = {
                "nome": nome,
                "tipo": tipo,
                "nivel": nivel
            }

            pokedex.append(novo_pokemon)
            print(f"\n{nome} cadastrado com sucesso!")

        case 2:
            print("\nConsultando Pokédex...\n")
            
            if len(pokedex) == 0:
                print("Nenhum Pokémon cadastrado ainda.")
            else:
                for pokemon in pokedex:
                    print(f"Nome: {pokemon['nome']}")
                    print(f"Tipo: {pokemon['tipo']}")
                    print(f"Nível: {pokemon['nivel']}")
                    print("-" * 20)

        case 3:
            print("\nIniciando busca...\n")
            
            encontrado = False

            busca = input("Digite o nome do Pokémon que deseja encontrar: ")

            for pokemon in pokedex:
                if pokemon["nome"] == busca:
                    print("\nPokémon encontrado!")
                    print(f"\nNome: {pokemon['nome']}")
                    print(f"\nTipo: {pokemon['tipo']}")
                    print(f"\nNível: {pokemon['nivel']}")

                    encontrado = True
                    break

            if not encontrado:
                print("\nPokémon não encontrado.")
       
        case 4: 
            print(f"Até logo, {nomeTreinador}!\n")
        
        case _:
            print("\nOpção inválida! Digite uma das disponíveis.\n")

        



