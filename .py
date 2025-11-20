import sys

def main():
    print("--- Consulta de Média Salarial de Desenvolvedores ---")
    print("Este programa consulta a média salarial baseada na linguagem e região.")
    
    # Listas de validação (Tudo em minúsculo para facilitar comparação)
    linguagens_validas = [
        "java", "c", "php", "html", "python", 
        "javascript", "css", "c#", "q#", "swift", "perl"
    ]
    
    regioes_validas = [
        "norte", "nordeste", "centro-oeste", "sudeste", "sul"
    ]

    # 1. Inicializa a base de dados com 0.0
    base_de_dados = {
        lang: {reg: 0.0 for reg in regioes_validas} 
        for lang in linguagens_validas
    }

    # 2. Povoamento dos dados (DATA ENTRY)
    
    # --- JAVA ---
    base_de_dados["java"]["sul"] = (
        "\n    - Júnior: R$ 3.500 - R$ 5.000"
        "\n    - Pleno:  R$ 7.000 - R$ 9.500"
        "\n    - Sênior: R$ 11.000 - R$ 16.000"
    )
    base_de_dados["java"]["sudeste"] = (
        "\n    - Júnior: R$ 4.000 - R$ 5.500"
        "\n    - Pleno:  R$ 7.500 - R$ 10.500"
        "\n    - Sênior: R$ 12.000 - R$ 18.000+"
    )
    base_de_dados["java"]["norte"] = (
        "\n    - Júnior: R$ 2.200 - R$ 3.000"
        "\n    - Pleno:  R$ 4.500 - R$ 6.500"
        "\n    - Sênior: R$ 7.000 - R$ 10.000"
    )
    base_de_dados["java"]["nordeste"] = (
        "\n    - Júnior: R$ 2.500 - R$ 3.800"
        "\n    - Pleno:  R$ 5.000 - R$ 7.500"
        "\n    - Sênior: R$ 8.000 - R$ 12.000"
    )
    base_de_dados["java"]["centro-oeste"] = (
        "\n    - Júnior: R$ 3.500 - R$ 4.800"
        "\n    - Pleno:  R$ 6.500 - R$ 9.000"
        "\n    - Sênior: R$ 10.000 - R$ 15.000"
    )

    # --- C ---
    base_de_dados["c"]["norte"] = (
        "\n    - Júnior: R$ 3.500 - R$ 5.200"
        "\n    - Pleno:  R$ 6.500 - R$ 9.500"
        "\n    - Sênior: R$ 10.000 - R$ 16.000"
    )
    base_de_dados["c"]["sudeste"] = (
        "\n    - Júnior: R$ 4.200 - R$ 6.000"
        "\n    - Pleno:  R$ 8.000 - R$ 11.000"
        "\n    - Sênior: R$ 13.000 - R$ 20.000+"
    )
    base_de_dados["c"]["sul"] = (
        "\n    - Júnior: R$ 3.800 - R$ 5.500"
        "\n    - Pleno:  R$ 7.500 - R$ 10.000"
        "\n    - Sênior: R$ 12.000 - R$ 17.000"
    )
    base_de_dados["c"]["nordeste"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.200"
        "\n    - Pleno:  R$ 6.000 - R$ 8.500"
        "\n    - Sênior: R$ 9.000 - R$ 13.000"
    )
    base_de_dados["c"]["centro-oeste"] = (
        "\n    - Júnior: R$ 3.500 - R$ 4.500"
        "\n    - Pleno:  R$ 6.500 - R$ 8.500"
        "\n    - Sênior: R$ 10.000 - R$ 14.000"
    )

    # --- PHP ---
    base_de_dados["php"]["centro-oeste"] = (
        "\n    - Júnior: R$ 2.500 - R$ 3.500"
        "\n    - Pleno:  R$ 5.000 - R$ 7.500"
        "\n    - Sênior: R$ 8.000 - R$ 11.000"
    )
    base_de_dados["php"]["nordeste"] = (
        "\n    - Júnior: R$ 2.000 - R$ 3.000"
        "\n    - Pleno:  R$ 4.000 - R$ 6.500"
        "\n    - Sênior: R$ 7.000 - R$ 10.000"
    )
    base_de_dados["php"]["norte"] = (
        "\n    - Júnior: R$ 2.500 - R$ 3.500"
        "\n    - Pleno:  R$ 5.000 - R$ 7.500"
        "\n    - Sênior: R$ 8.000 - R$ 11.000"
    )
    base_de_dados["php"]["sudeste"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.500"
        "\n    - Pleno:  R$ 6.000 - R$ 9.000"
        "\n    - Sênior: R$ 10.000 - R$ 14.000"
    )
    base_de_dados["php"]["sul"] = (
        "\n    - Júnior: R$ 2.800 - R$ 4.000"
        "\n    - Pleno:  R$ 5.500 - R$ 8.500"
        "\n    - Sênior: R$ 9.000 - R$ 13.000"
    )

    # --- HTML ---
    base_de_dados["html"]["centro-oeste"] = (
        "\n    - Júnior: R$ 2.800 - R$ 4.000"
        "\n    - Pleno:  R$ 5.500 - R$ 8.000"
        "\n    - Sênior: R$ 9.000 - R$ 13.000"
    )
    base_de_dados["html"]["nordeste"] = (
        "\n    - Júnior: R$ 2.200 - R$ 3.200"
        "\n    - Pleno:  R$ 4.500 - R$ 6.800"
        "\n    - Sênior: R$ 7.500 - R$ 11.000"
    )
    base_de_dados["html"]["norte"] = (
        "\n    - Júnior: R$ 2.000 - R$ 2.800"
        "\n    - Pleno:  R$ 4.000 - R$ 6.200"
        "\n    - Sênior: R$ 7.000 - R$ 10.000"
    )
    base_de_dados["html"]["sudeste"] = (
        "\n    - Júnior: R$ 3.200 - R$ 4.600"
        "\n    - Pleno:  R$ 6.500 - R$ 9.200"
        "\n    - Sênior: R$ 11.000 - R$ 16.000+"
    )
    base_de_dados["html"]["sul"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.200"
        "\n    - Pleno:  R$ 6.000 - R$ 8.500"
        "\n    - Sênior: R$ 10.000 - R$ 14.500"
    )

    # --- PYTHON ---
    base_de_dados["python"]["centro-oeste"] = (
        "\n    - Júnior: R$ 4.200 - R$ 5.500"
        "\n    - Pleno:  R$ 8.500 - R$ 11.000"
        "\n    - Sênior: R$ 13.000 - R$ 16.500"
    )
    base_de_dados["python"]["nordeste"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.000"
        "\n    - Pleno:  R$ 6.500 - R$ 8.500"
        "\n    - Sênior: R$ 10.000 - R$ 13.500"
    )
    base_de_dados["python"]["norte"] = (
        "\n    - Júnior: R$ 3.200 - R$ 4.200"
        "\n    - Pleno:  R$ 7.000 - R$ 9.000"
        "\n    - Sênior: R$ 11.000 - R$ 14.000"
    )
    base_de_dados["python"]["sudeste"] = (
        "\n    - Júnior: R$ 4.500 - R$ 5.800"
        "\n    - Pleno:  R$ 9.000 - R$ 12.000"
        "\n    - Sênior: R$ 15.000 - R$ 20.000+"
    )
    base_de_dados["python"]["sul"] = (
        "\n    - Júnior: R$ 4.000 - R$ 5.200"
        "\n    - Pleno:  R$ 8.000 - R$ 10.500"
        "\n    - Sênior: R$ 13.500 - R$ 17.000"
    )

    # --- JAVASCRIPT ---
    base_de_dados["javascript"]["centro-oeste"] = (
        "\n    - Júnior: R$ 3.500 - R$ 4.500"
        "\n    - Pleno:  R$ 7.000 - R$ 9.000"
        "\n    - Sênior: R$ 11.000 - R$ 15.000"
    )
    base_de_dados["javascript"]["nordeste"] = (
        "\n    - Júnior: R$ 2.500 - R$ 3.500"
        "\n    - Pleno:  R$ 5.000 - R$ 7.500"
        "\n    - Sênior: R$ 8.500 - R$ 12.000"
    )
    base_de_dados["javascript"]["norte"] = (
        "\n    - Júnior: R$ 2.500 - R$ 3.200"
        "\n    - Pleno:  R$ 5.000 - R$ 7.000"
        "\n    - Sênior: R$ 8.000 - R$ 11.000"
    )
    base_de_dados["javascript"]["sudeste"] = (
        "\n    - Júnior: R$ 3.500 - R$ 5.200"
        "\n    - Pleno:  R$ 7.000 - R$ 10.500"
        "\n    - Sênior: R$ 12.000 - R$ 18.000+"
    )
    base_de_dados["javascript"]["sul"] = (
        "\n    - Júnior: R$ 3.200 - R$ 4.800"
        "\n    - Pleno:  R$ 6.500 - R$ 9.500"
        "\n    - Sênior: R$ 11.000 - R$ 16.000"
    )

    # --- CSS ---
    base_de_dados["css"]["centro-oeste"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.000"
        "\n    - Pleno:  R$ 5.800 - R$ 8.200"
        "\n    - Sênior: R$ 9.500 - R$ 12.500"
    )
    base_de_dados["css"]["nordeste"] = (
        "\n    - Júnior: R$ 2.200 - R$ 3.200"
        "\n    - Pleno:  R$ 4.500 - R$ 6.800"
        "\n    - Sênior: R$ 7.500 - R$ 10.500"
    )
    base_de_dados["css"]["norte"] = (
        "\n    - Júnior: R$ 2.000 - R$ 2.800"
        "\n    - Pleno:  R$ 4.000 - R$ 6.200"
        "\n    - Sênior: R$ 7.000 - R$ 9.500"
    )
    base_de_dados["css"]["sudeste"] = (
        "\n    - Júnior: R$ 3.200 - R$ 4.500"
        "\n    - Pleno:  R$ 6.500 - R$ 9.200"
        "\n    - Sênior: R$ 11.000 - R$ 15.000"
    )
    base_de_dados["css"]["sul"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.200"
        "\n    - Pleno:  R$ 6.000 - R$ 8.500"
        "\n    - Sênior: R$ 10.000 - R$ 13.500"
    )

    # --- C# ---
    base_de_dados["c#"]["centro-oeste"] = (
        "\n    - Júnior: R$ 3.800 - R$ 5.000"
        "\n    - Pleno:  R$ 7.500 - R$ 10.500"
        "\n    - Sênior: R$ 12.000 - R$ 16.000"
    )
    base_de_dados["c#"]["nordeste"] = (
        "\n    - Júnior: R$ 2.800 - R$ 3.800"
        "\n    - Pleno:  R$ 5.500 - R$ 7.800"
        "\n    - Sênior: R$ 9.000 - R$ 12.500"
    )
    base_de_dados["c#"]["norte"] = (
        "\n    - Júnior: R$ 2.500 - R$ 3.500"
        "\n    - Pleno:  R$ 5.000 - R$ 7.200"
        "\n    - Sênior: R$ 8.500 - R$ 11.500"
    )
    base_de_dados["c#"]["sudeste"] = (
        "\n    - Júnior: R$ 4.000 - R$ 5.500"
        "\n    - Pleno:  R$ 8.000 - R$ 11.500"
        "\n    - Sênior: R$ 13.000 - R$ 18.000+"
    )
    base_de_dados["c#"]["sul"] = (
        "\n    - Júnior: R$ 3.500 - R$ 4.800"
        "\n    - Pleno:  R$ 7.000 - R$ 9.500"
        "\n    - Sênior: R$ 11.000 - R$ 15.000"
    )

    # --- Q# ---
    base_de_dados["q#"]["centro-oeste"] = (
        "\n    - Júnior: R$ 10.500 (Início Carreira Federal)"
        "\n    - Pleno:  R$ 14.000 - R$ 18.000"
        "\n    - Sênior: R$ 22.000 (Final de Carreira)"
    )
    base_de_dados["q#"]["nordeste"] = (
        "\n    - Júnior: R$ 4.000 - R$ 6.000"
        "\n    - Pleno:  R$ 10.000 - R$ 14.000"
        "\n    - Sênior: R$ 12.000 - R$ 18.000"
    )
    base_de_dados["q#"]["norte"] = (
        "\n    - Júnior: R$ 10.500 (Início Carreira Federal)"
        "\n    - Pleno:  R$ 14.000 - R$ 18.000"
        "\n    - Sênior: R$ 22.000 (Final de Carreira)"
    )
    base_de_dados["q#"]["sudeste"] = (
        "\n    - Júnior: R$ 7.000 - R$ 9.500"
        "\n    - Pleno:  R$ 12.000 - R$ 16.000"
        "\n    - Sênior: R$ 20.000 - R$ 35.000+"
    )
    base_de_dados["q#"]["sul"] = (
        "\n    - Júnior: R$ 5.000 - R$ 7.500"
        "\n    - Pleno:  R$ 9.000 - R$ 13.000"
        "\n    - Sênior: R$ 15.000+"
    )

    # --- SWIFT ---
    base_de_dados["swift"]["centro-oeste"] = (
        "\n    - Júnior: R$ 4.000 - R$ 5.000"
        "\n    - Pleno:  R$ 7.500 - R$ 10.000"
        "\n    - Sênior: R$ 12.000 - R$ 15.500"
    )
    base_de_dados["swift"]["nordeste"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.200"
        "\n    - Pleno:  R$ 6.000 - R$ 8.500"
        "\n    - Sênior: R$ 10.000 - R$ 14.000"
    )
    base_de_dados["swift"]["norte"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.000"
        "\n    - Pleno:  R$ 6.000 - R$ 8.000"
        "\n    - Sênior: R$ 9.500 - R$ 13.000"
    )
    base_de_dados["swift"]["sudeste"] = (
        "\n    - Júnior: R$ 4.500 - R$ 6.000"
        "\n    - Pleno:  R$ 8.500 - R$ 12.000"
        "\n    - Sênior: R$ 14.000 - R$ 19.000+"
    )
    base_de_dados["swift"]["sul"] = (
        "\n    - Júnior: R$ 4.000 - R$ 5.500"
        "\n    - Pleno:  R$ 7.500 - R$ 10.500"
        "\n    - Sênior: R$ 12.000 - R$ 16.500"
    )

    # --- PERL ---
    base_de_dados["perl"]["centro-oeste"] = (
        "\n    - Júnior: R$ 4.200 - R$ 5.500"
        "\n    - Pleno:  R$ 8.000 - R$ 10.500"
        "\n    - Sênior: R$ 12.500 - R$ 16.000"
    )
    base_de_dados["perl"]["nordeste"] = (
        "\n    - Júnior: R$ 3.000 - R$ 4.000"
        "\n    - Pleno:  R$ 6.000 - R$ 8.000"
        "\n    - Sênior: R$ 9.500 - R$ 13.000"
    )
    base_de_dados["perl"]["norte"] = (
        "\n    - Júnior: R$ 3.000 - R$ 3.800"
        "\n    - Pleno:  R$ 5.500 - R$ 7.500"
        "\n    - Sênior: R$ 9.000 - R$ 12.000"
    )
    base_de_dados["perl"]["sudeste"] = (
        "\n    - Júnior: R$ 4.500 - R$ 6.000"
        "\n    - Pleno:  R$ 8.500 - R$ 11.500"
        "\n    - Sênior: R$ 13.000 - R$ 17.000+"
    )
    base_de_dados["perl"]["sul"] = (
        "\n    - Júnior: R$ 4.000 - R$ 5.200"
        "\n    - Pleno:  R$ 7.500 - R$ 10.000"
        "\n    - Sênior: R$ 11.500 - R$ 15.000"
    )
    
    # Função auxiliar para pegar input válido
    def obter_input_usuario(mensagem, lista_validacao):
        while True:
            entrada = input(mensagem).strip().lower()
            
            if entrada == 'javascripit':
                entrada = 'javascript'
                
            if entrada in lista_validacao:
                return entrada
            else:
                print(f"Opção inválida! Por favor, escolha entre: {', '.join(lista_validacao)}")

    # --- EXECUÇÃO DO MENU ---
    print("\nLinguagens disponíveis: " + ", ".join(linguagens_validas))
    linguagem_escolhida = obter_input_usuario(
        "Digite a linguagem de programação desejada: ", 
        linguagens_validas
    )

    print("\nRegiões disponíveis: " + ", ".join(regioes_validas))
    regiao_escolhida = obter_input_usuario(
        "Digite a região do Brasil desejada: ", 
        regioes_validas
    )

    media_salarial = base_de_dados[linguagem_escolhida][regiao_escolhida]

    print("\n" + "="*40)
    print(f"RESULTADO DA CONSULTA")
    print("="*40)
    print(f"Linguagem: {linguagem_escolhida.upper()}")
    print(f"Região:    {regiao_escolhida.upper()}")
    
    # Verifica PRIMEIRO se é string (texto com os salários)
    if isinstance(media_salarial, str):
        print(f"\nEstimativa Salarial:{media_salarial}")
    elif media_salarial == 0.0:
        print("\nAVISO: A média salarial para esta combinação ainda não foi cadastrada no sistema.")
    else:
        print(f"\nMédia Salarial Estimada: R$ {media_salarial:.2f}")
    print("="*40)

if __name__ == "__main__":
    main()