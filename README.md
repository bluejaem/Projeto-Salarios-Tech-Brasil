# Painel de Remuneração e Stacks Tech Brasil

Aplicação para análise de mercado de tecnologia no Brasil, desenvolvida para consultar médias salariais por stack tecnológica e região geográfica, além de fornecer simulações analíticas de regimes de contratação (CLT versus PJ).

O projeto é disponibilizado em duas modalidades de execução:
- Interface web estática (`web/`) com renderização no cliente (HTML, CSS e JavaScript puro), sem necessidade de serviços de backend ativos.
- Utilitário de linha de comando (`programa.py`) em Python para consultas rápidas via terminal.

---

## Sumário

- [Arquitetura e Recursos](#arquitetura-e-recursos)
- [Base de Dados e Modelagem](#base-de-dados-e-modelagem)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Instruções de Execução](#instruções-de-execução)
  - [Interface Web](#1-interface-web)
  - [Utilitário de Terminal (CLI)](#2-utilitário-de-terminal-cli)
  - [Servidor Flask (Opcional)](#3-servidor-flask-opcional)

---

## Arquitetura e Recursos

### Interface Web (`web/`)
- **Renderização e Estado Client-Side:** Consulta assíncrona ao arquivo `dados.json` via Fetch API, gerando componentes de visualização dinâmica sem recarregamento de página.
- **Detalhamento por Senioridade:** Estruturação visual das faixas de mercado para níveis Júnior, Pleno e Sênior por região.
- **Contexto Técnico:** Mapeamento de vantagens arquiteturais, limitações operacionais, frameworks dominantes e indicador de demanda para a stack selecionada.
- **Simulador Contratual (CLT vs. PJ):** 
  - Cálculo de retenções tributárias na fonte (alíquotas de INSS e IRRF progressivo).
  - Cômputo de benefícios diferidos (13º salário, férias proporcionais e depósito de FGTS diluídos mensalmente).
  - Projeção de retenção em regime de Pessoa Jurídica via Simples Nacional (Anexo III) deduzindo custos fixos de manutenção contábil.

### Utilitário CLI (`programa.py`)
- Script autônomo baseado em Python padrão (sem dependências externas obrigatórias).
- Tratamento e normalização de entradas de texto (`case-insensitive`) com validação de opções inválidas.
- Apresentação formatada das faixas salariais e notas contextuais de mercado regional no próprio console.

---

## Base de Dados e Modelagem

Os dados estão estruturados sob o esquema `Linguagem -> Região -> Senioridade`, permitindo indexação direta em tempo constante:

- **Tecnologias mapeadas:** JavaScript, Python, Java, C#, PHP, Swift, C, Perl.
- **Mercados geográficos:** Sudeste, Sul, Nordeste, Centro-Oeste, Norte e Remoto Nacional.
- **Faixas:** Intervalos de remuneração bruta em Reais (BRL).

---

## Estrutura do Repositório

```text
├── dados.json             # Base de dados central utilizada pelas aplicações Python
├── programa.py            # Script interativo via linha de comando (CLI)
├── requirements.txt       # Dependências opcionais para execução do servidor Flask
├── static/                # Folhas de estilo do servidor Flask
├── templates/             # Templates Jinja2 do servidor Flask
└── web/                   # Aplicação web estática autônoma
    ├── app.js             # Lógica de manipulação de DOM e cálculos financeiros
    ├── dados.json         # Base de dados estruturada consumida pela SPA
    ├── index.html         # Marcação semântica da interface
    └── style.css          # Estilização CSS e layouts responsivos