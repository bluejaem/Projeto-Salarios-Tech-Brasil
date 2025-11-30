document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('language-select');
    const regionSelect = document.getElementById('region-select');
    const btnConsultar = document.getElementById('btn-consultar');
    const formConsultar = document.getElementById('salary-form');

    const advantagesBox = document.getElementById('advantages-box');
    const resultBox = document.getElementById('result-box');

    const advantagesText = document.getElementById('advantages-text');
    const resLang = document.getElementById('res-lang');
    const resRegion = document.getElementById('res-region');
    const resValue = document.getElementById('res-value');

    let database = {};
    
    // 1. Carregar os dados do JSON — preferir dados embutidos (permite abrir via file://)
    function displayLoadError(message) {
        console.error(message);

        // Mostrar mensagem amigável na UI
        resultBox.classList.add('visible');
        resultBox.classList.remove('hidden');

        document.getElementById('res-lang').textContent = '-';
        document.getElementById('res-region').textContent = '-';
        document.getElementById('res-value').textContent = message + '\n\nSugestão: sirva a pasta com um servidor HTTP (ex: `python -m http.server`) ou abra o arquivo via servidor local.';
    }

    const embeddedEl = document.getElementById('dados-json');
    if (embeddedEl) {
        try {
            database = JSON.parse(embeddedEl.textContent);
            popularSelectLinguagens();
        } catch (err) {
            displayLoadError('Erro ao interpretar dados embutidos: ' + err.message);
        }
    } else {
        // fallback: buscar via fetch
        fetch('dados.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro HTTP: " + response.status);
                }

                return response.json();
            })
            .then(data => {
                database = data;

                popularSelectLinguagens();
            })
            .catch(error => {
                displayLoadError("Erro ao carregar 'dados.json': " + (error.message || error));
            });
    }

    // 2. Popular o dropdown de linguagens
    function popularSelectLinguagens() {
        const linguagens = Object.keys(database);

        linguagens.forEach(key => {
            const option = document.createElement('option');
            option.value = key;

            // Pega o nome formatado do JSON (ex: "C#") ou usa a chave em maiúsculo
            option.textContent = database[key].nome || key.toUpperCase();

            langSelect.appendChild(option);
        });
    }

    // 3. Evento: Quando escolher a linguagem
    langSelect.addEventListener('change', () => {
        // Habilitar a seleção de região
        regionSelect.disabled = false;
        regionSelect.value = ""; // Resetar região anterior

        // Atualizar texto de "Selecione"
        regionSelect.options[0].text = "-- Selecione a Região --";

        // Mostrar Vantagens imediatamente
        const langKey = langSelect.value;
        if (database[langKey]) {
            advantagesText.textContent = database[langKey].vantagens;
            advantagesBox.classList.add('visible');
            advantagesBox.classList.remove('hidden');

            // Esconder resultado antigo de salário se houver mudança
            resultBox.classList.remove('visible');

            btnConsultar.disabled = true;
        }
    });

    // 4. Evento: Quando escolher a região
    regionSelect.addEventListener('change', () => {
        // Habilitar botão de consultar
        if (langSelect.value && regionSelect.value) {
            btnConsultar.disabled = false;
        }
    });

    // 5. Evento: Clicar em Consultar
    formConsultar.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recarregar a página

        const langKey = langSelect.value;
        const regionKey = regionSelect.value;

        const dadosLinguagem = database[langKey];

        if (dadosLinguagem && dadosLinguagem.salarios) {
            const salarioNiveis = dadosLinguagem.salarios[regionKey];

            // Atualizar UI
            resLang.textContent = dadosLinguagem.nome;
            resRegion.textContent = regionKey.charAt(0).toUpperCase() + regionKey.slice(1); // Capitalizar

            if (salarioNiveis) {
                let html = ""

                for (const nivel in salarioNiveis) {
                    html += `<p><strong>${titleCase(nivel)}:</strong> ${salarioNiveis[nivel]}</p>`;
                }

                resValue.innerHTML = html;

            } else {
                resValue.textContent = "Dados não disponíveis para esta combinação.";
            }

            resultBox.classList.add('visible');
            resultBox.classList.remove('hidden');
        }
    });
});

function titleCase(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}