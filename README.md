#  Consulta de Salários Tech Brasil

Este projeto consiste em uma aplicação de linha de comando (CLI) desenvolvida em **Python** que atua como um consultor de mercado para profissionais de tecnologia. O objetivo é fornecer uma estimativa salarial precisa e contextualizada baseada na **Linguagem de Programação** e na **Região Geográfica** de atuação no Brasil.

##  O que o programa faz?

O software interage com o usuário solicitando dois parâmetros principais e, com base neles, consulta uma base de dados interna detalhada para retornar as faixas salariais de mercado.

### Principais Funcionalidades:

1.  **Consulta Cruzada de Dados:**
    * Cruza informações de **11 Linguagens/Tecnologias** (Java, C, PHP, HTML, Python, JavaScript, CSS, C#, Q#, Swift, Perl) com as **5 Regiões do Brasil** (Norte, Nordeste, Centro-Oeste, Sudeste, Sul).

2.  **Detalhamento por Senioridade:**
    * Diferente de calculadoras simples, o programa entrega faixas salariais específicas para os níveis **Júnior**, **Pleno** e **Sênior**.

3.  **Contexto de Mercado Regional:**
    * O sistema não exibe apenas números; ele traz *insights* sobre o mercado local.
    * *Exemplo:* Diferencia os salários de Python no Centro-Oeste (impulsionados pelo setor governamental e AgroTech) dos salários no Norte (focados no Polo Industrial de Manaus).

4.  **Validação e Tratamento de Erros:**
    * Possui um sistema robusto de entrada de dados (`input`), que ignora diferenças entre maiúsculas/minúsculas e impede que o usuário digite opções inválidas, garantindo que o programa não quebre durante a execução.

##  Tecnologias Utilizadas

* **Linguagem:** Python 3
* **Estrutura de Dados:** Dicionários aninhados (Nested Dictionaries) para mapeamento eficiente de *Linguagem -> Região -> Dados*.
* **Interface:** CLI (Command Line Interface) limpa e formatada.

##  Linguagens Suportadas

* **Backend/Systems:** Java, C, C#, PHP, Perl, Python
* **Frontend/Web:** HTML, CSS, JavaScript
* **Mobile:** Swift (iOS)
* **Emergente/P&D:** Q# (Computação Quântica)

##  Como executar

1. Certifique-se de ter o Python instalado.
2. Clone o repositório.
3. Execute o arquivo principal:
   ```bash
   python programa.py