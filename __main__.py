from __init__ import carregar_dados, ConsultaErro, criar_app, Blueprint


def __main_legacy():
    print("--- Consulta de Média Salarial de Desenvolvedores ---")
    print("Este programa consulta a média salarial baseada na linguagem e região.")

    caminho_arquivo = "dados.json"

    try:
        base_de_dados = carregar_dados(caminho_arquivo)
    except ConsultaErro as e:
        raise SystemExit(e)

    linguagens_validas = list(base_de_dados.keys())
    regioes_validas = ["norte", "nordeste", "centro-oeste", "sudeste", "sul"]

    def obter_input_usuario(mensagem: str, lista_validacao: list[str]) -> str:
        while True:
            entrada = input(mensagem).strip().lower()

            if entrada in lista_validacao:
                return entrada
            else:
                print(
                    f"Opção inválida! Por favor, escolha entre: {', '.join(lista_validacao)}"
                )

    print("\nLinguagens disponíveis: " + ", ".join(linguagens_validas))

    linguagem_escolhida = obter_input_usuario(
        "Digite a linguagem de programação desejada: ", linguagens_validas
    )

    print("\nRegiões disponíveis: " + ", ".join(regioes_validas))

    regiao_escolhida = obter_input_usuario(
        "Digite a região do Brasil desejada: ", regioes_validas
    )

    dados_linguagem = base_de_dados.get(linguagem_escolhida, {})
    media_salarial = dados_linguagem.get(regiao_escolhida, 0.0)

    print("\n" + "=" * 40)
    print(f"RESULTADO DA CONSULTA")
    print("=" * 40)
    print(f"Linguagem: {linguagem_escolhida.upper()}")
    print(f"Região:    {regiao_escolhida.upper()}")

    if isinstance(media_salarial, str):
        print(f"\nEstimativa Salarial:{media_salarial}")
    elif media_salarial == 0.0:
        print(
            "\nAVISO: A média salarial para esta combinação ainda não foi cadastrada no sistema."
        )
    else:
        print(f"\nMédia Salarial Estimada: R$ {media_salarial:.2f}")

    print("=" * 40)


def main():
    BP = Blueprint("main", __name__)

    criar_app(BP).run(debug=True)


if __name__ == "__main__":
    main()
