import json

class ConsultaErro(Exception):
    """ Exceção personalizada para erros na consulta de dados. """


def carregar_dados(caminho_arquivo: str) -> dict[str, dict[str, float | str]]:
    """Tenta carregar o arquivo JSON. Retorna um dicionário vazio se falhar."""

    try:

        with open(caminho_arquivo, "r", encoding="utf-8") as arquivo:
            return json.load(arquivo)
    except FileNotFoundError as e:
        raise ConsultaErro(f"O arquivo {caminho_arquivo!r} não foi encontrado.") from e
    except json.JSONDecodeError as e:
        raise ConsultaErro(f"O arquivo {caminho_arquivo!r} está mal formatado.") from e
