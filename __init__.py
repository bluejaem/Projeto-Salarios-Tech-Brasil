import json
from flask import Flask, Blueprint, render_template
from pathlib import Path

WEB_DIR = Path(__file__).parent / "web"


class ConsultaErro(Exception):
    """Exceção personalizada para erros na consulta de dados."""


def carregar_dados(caminho_arquivo: str) -> dict[str, dict[str, float | str]]:
    """Tenta carregar o arquivo JSON. Retorna um dicionário vazio se falhar."""

    try:

        with open(caminho_arquivo, "r", encoding="utf-8") as arquivo:
            return json.load(arquivo)
    except FileNotFoundError as e:
        raise ConsultaErro(f"O arquivo {caminho_arquivo!r} não foi encontrado.") from e
    except json.JSONDecodeError as e:
        raise ConsultaErro(f"O arquivo {caminho_arquivo!r} está mal formatado.") from e


def get_homepage() -> str:
    """Retorna o conteúdo HTML da página inicial."""

    homepage_path = WEB_DIR / "index.html"

    return render_template(homepage_path.name)


def criar_app(blueprint: Blueprint) -> Flask:
    """Cria e configura a aplicação Flask com o blueprint fornecido."""

    app = Flask(__name__)

    # Definir as rotas do blueprint
    blueprint.route("/", methods=["GET"])(get_homepage)

    # Registrar o blueprint enviado
    app.register_blueprint(blueprint)

    return app
