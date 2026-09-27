// Base de dados integrada diretamente para evitar bloqueios de fetch ou caminhos no GitHub Pages
const techData = {
  "linguagens": {
    "JavaScript": {
      "vantagens": "Linguagem nativa do ecossistema web, ampla oferta de vagas e viabilidade para arquiteturas full stack com Node.js.",
      "desafios": "Alta rotatividade de ferramentas e necessidade de migração para TypeScript em projetos de grande escala.",
      "frameworks": ["React", "Node.js", "Next.js", "Vue.js", "TypeScript"],
      "demanda": "Alta demanda contínua",
      "regioes": {
        "Sudeste": { "junior": [3500, 5000], "pleno": [6500, 10000], "senior": [11000, 16000] },
        "Sul": { "junior": [3200, 4500], "pleno": [6000, 9000], "senior": [10000, 14500] },
        "Nordeste": { "junior": [2800, 4000], "pleno": [5000, 8000], "senior": [8500, 13000] },
        "Centro-Oeste": { "junior": [3000, 4200], "pleno": [5500, 8500], "senior": [9000, 13500] },
        "Norte": { "junior": [2600, 3800], "pleno": [4800, 7500], "senior": [8000, 12000] },
        "Remoto Nacional": { "junior": [3500, 5500], "pleno": [7000, 11000], "senior": [12000, 18000] }
      }
    },
    "Python": {
      "vantagens": "Sintaxe concisa, ecossistema consolidado para ciência de dados, machine learning, automação e back-end.",
      "desafios": "Desempenho de execução inferior em processamento intensivo quando comparado a linguagens compiladas.",
      "frameworks": ["FastAPI", "Django", "Pandas", "PyTorch", "Flask"],
      "demanda": "Alta demanda contínua",
      "regioes": {
        "Sudeste": { "junior": [3800, 5500], "pleno": [7000, 11000], "senior": [12000, 17500] },
        "Sul": { "junior": [3400, 4800], "pleno": [6500, 9800], "senior": [10500, 15000] },
        "Nordeste": { "junior": [3000, 4300], "pleno": [5500, 8500], "senior": [9000, 13500] },
        "Centro-Oeste": { "junior": [3200, 4600], "pleno": [6000, 9000], "senior": [9500, 14000] },
        "Norte": { "junior": [2800, 4000], "pleno": [5000, 8000], "senior": [8500, 12500] },
        "Remoto Nacional": { "junior": [4000, 6000], "pleno": [7500, 12000], "senior": [13000, 19000] }
      }
    },
    "Java": {
      "vantagens": "Forte presença em sistemas bancários e infraestruturas corporativas críticas, com alta retrocompatibilidade.",
      "desafios": "Verbosidade de sintaxe e maior consumo inicial de memória em ambientes conteinerizados leves.",
      "frameworks": ["Spring Boot", "Hibernate", "Quarkus", "Micronaut"],
      "demanda": "Demanda corporativa estável",
      "regioes": {
        "Sudeste": { "junior": [3800, 5200], "pleno": [7000, 10500], "senior": [11500, 17000] },
        "Sul": { "junior": [3500, 4800], "pleno": [6500, 9500], "senior": [10500, 15500] },
        "Nordeste": { "junior": [3000, 4200], "pleno": [5500, 8500], "senior": [9000, 13500] },
        "Centro-Oeste": { "junior": [3300, 4700], "pleno": [6000, 9200], "senior": [9800, 14000] },
        "Norte": { "junior": [2900, 4000], "pleno": [5200, 8000], "senior": [8500, 12500] },
        "Remoto Nacional": { "junior": [3800, 5800], "pleno": [7500, 11500], "senior": [12500, 18000] }
      }
    },
    "C#": {
      "vantagens": "Integração madura com a plataforma .NET, suporte robusto para arquiteturas corporativas e desenvolvimento de jogos.",
      "desafios": "Historicamente associada ao ecossistema Windows, apesar do avanço multiplataforma do .NET Core.",
      "frameworks": [".NET 8", "ASP.NET Core", "Entity Framework", "Unity"],
      "demanda": "Demanda consolidada",
      "regioes": {
        "Sudeste": { "junior": [3600, 5000], "pleno": [6800, 10000], "senior": [11000, 16500] },
        "Sul": { "junior": [3300, 4600], "pleno": [6200, 9200], "senior": [10000, 14800] },
        "Nordeste": { "junior": [2900, 4100], "pleno": [5200, 8200], "senior": [8800, 13000] },
        "Centro-Oeste": { "junior": [3100, 4500], "pleno": [5800, 8800], "senior": [9200, 13800] },
        "Norte": { "junior": [2700, 3900], "pleno": [4900, 7800], "senior": [8200, 12200] },
        "Remoto Nacional": { "junior": [3700, 5500], "pleno": [7200, 11000], "senior": [12000, 17500] }
      }
    },
    "PHP": {
      "vantagens": "Facilidade de implantação, infraestrutura de hospedagem de baixo custo e ampla presença em plataformas web.",
      "desafios": "Manutenção frequente de bases legadas e média salarial inferior em comparação a sistemas compilados.",
      "frameworks": ["Laravel", "Symfony", "WordPress", "Livewire"],
      "demanda": "Alta demanda regional",
      "regioes": {
        "Sudeste": { "junior": [2800, 4200], "pleno": [5500, 8500], "senior": [9000, 13500] },
        "Sul": { "junior": [2600, 3900], "pleno": [5000, 7800], "senior": [8500, 12500] },
        "Nordeste": { "junior": [2400, 3500], "pleno": [4500, 7000], "senior": [7500, 11000] },
        "Centro-Oeste": { "junior": [2500, 3800], "pleno": [4800, 7500], "senior": [8000, 11500] },
        "Norte": { "junior": [2200, 3300], "pleno": [4200, 6500], "senior": [7000, 10500] },
        "Remoto Nacional": { "junior": [3000, 4500], "pleno": [6000, 9500], "senior": [10000, 15000] }
      }
    },
    "Swift": {
      "vantagens": "Linguagem primária para plataformas Apple com acesso direto a recursos de hardware e APIs nativas.",
      "desafios": "Dependência de máquinas macOS para compilação e mercado limitado ao setor móvel.",
      "frameworks": ["SwiftUI", "UIKit", "Combine", "CoreData"],
      "demanda": "Demanda especializada",
      "regioes": {
        "Sudeste": { "junior": [4000, 5800], "pleno": [7500, 11500], "senior": [12500, 18500] },
        "Sul": { "junior": [3600, 5000], "pleno": [6800, 10200], "senior": [11000, 16000] },
        "Nordeste": { "junior": [3200, 4500], "pleno": [5800, 8800], "senior": [9500, 14000] },
        "Centro-Oeste": { "junior": [3400, 4800], "pleno": [6200, 9400], "senior": [10000, 14500] },
        "Norte": { "junior": [3000, 4200], "pleno": [5400, 8200], "senior": [8800, 13000] },
        "Remoto Nacional": { "junior": [4200, 6200], "pleno": [8000, 12500], "senior": [13500, 20000] }
      }
    },
    "C": {
      "vantagens": "Controle direto de endereçamento de memória, execução de alto desempenho e compatibilidade com hardware restrito.",
      "desafios": "Ausência de gestão automática de memória e complexidade na manutenção de ponteiros.",
      "frameworks": ["Sistemas Embarcados", "Drivers de Dispositivo", "Kernel Linux", "RTOS"],
      "demanda": "Demanda técnica de nicho",
      "regioes": {
        "Sudeste": { "junior": [3600, 5000], "pleno": [6500, 10000], "senior": [11000, 16500] },
        "Sul": { "junior": [3200, 4600], "pleno": [6000, 9000], "senior": [10000, 15000] },
        "Nordeste": { "junior": [2800, 4000], "pleno": [5200, 8000], "senior": [8500, 13000] },
        "Centro-Oeste": { "junior": [3000, 4300], "pleno": [5600, 8500], "senior": [9000, 13500] },
        "Norte": { "junior": [2600, 3800], "pleno": [4800, 7500], "senior": [8000, 12000] },
        "Remoto Nacional": { "junior": [3800, 5500], "pleno": [7000, 11000], "senior": [12000, 17500] }
      }
    }
  }
};

let currentSalaries = { junior: 4000, pleno: 8000, senior: 13000 };

document.addEventListener("DOMContentLoaded", () => {
  popularSelects();
  vincularEventos();
});

function popularSelects() {
  const selectLinguagem = document.getElementById("select-linguagem");
  const selectRegiao = document.getElementById("select-regiao");
  const selectComparar = document.getElementById("select-comparar");

  if (!selectLinguagem || !selectRegiao) return;

  selectLinguagem.innerHTML = '<option value="">Selecione...</option>';
  if (selectComparar) {
    selectComparar.innerHTML = '<option value="">Nenhuma (Modo individual)</option>';
  }

  for (const lang in techData.linguagens) {
    const opt1 = document.createElement("option");
    opt1.value = lang;
    opt1.textContent = lang;
    selectLinguagem.appendChild(opt1);

    if (selectComparar) {
      const opt2 = document.createElement("option");
      opt2.value = lang;
      opt2.textContent = lang;
      selectComparar.appendChild(opt2);
    }
  }

  const primeiraLang = Object.keys(techData.linguagens)[0];
  const regioesDisponiveis = Object.keys(techData.linguagens[primeiraLang].regioes);

  selectRegiao.innerHTML = '<option value="">Selecione...</option>';
  regioesDisponiveis.forEach(regiao => {
    const opt = document.createElement("option");
    opt.value = regiao;
    opt.textContent = regiao;
    selectRegiao.appendChild(opt);
  });
}

function vincularEventos() {
  const btnConsultar = document.getElementById("btn-consultar");
  const btnCalcular = document.getElementById("btn-calcular");
  const inputSalario = document.getElementById("input-salario");
  const btnExportar = document.getElementById("btn-exportar");

  if (btnConsultar) btnConsultar.addEventListener("click", executarConsulta);
  if (btnCalcular) btnCalcular.addEventListener("click", calcularCLTvsPJ);
  if (inputSalario) inputSalario.addEventListener("input", calcularCLTvsPJ);
  if (btnExportar) btnExportar.addEventListener("click", () => window.print());

  const selectLinguagem = document.getElementById("select-linguagem");
  const selectRegiao = document.getElementById("select-regiao");
  const selectComparar = document.getElementById("select-comparar");

  if (selectLinguagem) {
    selectLinguagem.addEventListener("change", () => {
      if (selectRegiao && selectRegiao.value) executarConsulta();
    });
  }

  if (selectRegiao) {
    selectRegiao.addEventListener("change", () => {
      if (selectLinguagem && selectLinguagem.value) executarConsulta();
    });
  }

  if (selectComparar) {
    selectComparar.addEventListener("change", () => {
      if (selectLinguagem && selectLinguagem.value && selectRegiao && selectRegiao.value) {
        executarConsulta();
      }
    });
  }
}

function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function executarConsulta() {
  const lang1 = document.getElementById("select-linguagem").value;
  const regiao = document.getElementById("select-regiao").value;
  const compElem = document.getElementById("select-comparar");
  const lang2 = compElem ? compElem.value : "";

  if (!lang1 || !regiao) return;

  const stack1 = techData.linguagens[lang1];
  if (!stack1) return;

  const salario1 = stack1.regioes[regiao];
  if (!salario1) return;

  const placeholderBox = document.getElementById("placeholder-box");
  const resultsPanel = document.getElementById("results-panel");

  if (placeholderBox) placeholderBox.classList.add("hidden");
  if (resultsPanel) resultsPanel.classList.remove("hidden");

  const isComparacao = lang2 && lang2 !== lang1 && techData.linguagens[lang2];
  const stack2 = isComparacao ? techData.linguagens[lang2] : null;
  const salario2 = isComparacao ? stack2.regioes[regiao] : null;

  const titleStack = document.getElementById("res-title-stack");
  const demandaBadge = document.getElementById("res-demanda-badge");
  const regiaoBadge = document.getElementById("res-regiao-badge");

  if (isComparacao) {
    if (titleStack) titleStack.textContent = `Comparativo: ${lang1} vs. ${lang2}`;
    if (demandaBadge) demandaBadge.textContent = `${lang1}: ${stack1.demanda} | ${lang2}: ${stack2.demanda}`;
  } else {
    if (titleStack) titleStack.textContent = `Remuneração: ${lang1}`;
    if (demandaBadge) demandaBadge.textContent = stack1.demanda;
  }

  if (regiaoBadge) regiaoBadge.textContent = `Localidade: ${regiao}`;

  renderizarTabela(lang1, salario1, isComparacao, lang2, salario2);
  renderizarSpecs(lang1, stack1, isComparacao, lang2, stack2);

  currentSalaries = {
    junior: (salario1.junior[0] + salario1.junior[1]) / 2,
    pleno: (salario1.pleno[0] + salario1.pleno[1]) / 2,
    senior: (salario1.senior[0] + salario1.senior[1]) / 2
  };

  const inputSalario = document.getElementById("input-salario");
  if (inputSalario) inputSalario.value = currentSalaries.pleno;

  calcularCLTvsPJ();
}

function renderizarTabela(lang1, s1, isComp, lang2, s2) {
  const thead = document.getElementById("thead-row");
  const tbody = document.getElementById("tbody-salarios");
  if (!thead || !tbody) return;

  if (!isComp) {
    thead.innerHTML = `
      <th>Senioridade</th>
      <th class="num-header">Piso Médio</th>
      <th class="num-header">Teto Médio</th>
      <th class="num-header">Mediana Estimada</th>
      <th>Ação</th>
    `;
    tbody.innerHTML = `
      <tr>
        <td><strong>Júnior</strong></td>
        <td class="num font-mono">${formatarReal(s1.junior[0])}</td>
        <td class="num font-mono">${formatarReal(s1.junior[1])}</td>
        <td class="num font-mono highlight">${formatarReal((s1.junior[0] + s1.junior[1]) / 2)}</td>
        <td><button class="btn-sm" onclick="selecionarSalarioParaCalculadora('junior')">Simular</button></td>
      </tr>
      <tr>
        <td><strong>Pleno</strong></td>
        <td class="num font-mono">${formatarReal(s1.pleno[0])}</td>
        <td class="num font-mono">${formatarReal(s1.pleno[1])}</td>
        <td class="num font-mono highlight">${formatarReal((s1.pleno[0] + s1.pleno[1]) / 2)}</td>
        <td><button class="btn-sm" onclick="selecionarSalarioParaCalculadora('pleno')">Simular</button></td>
      </tr>
      <tr>
        <td><strong>Sênior</strong></td>
        <td class="num font-mono">${formatarReal(s1.senior[0])}</td>
        <td class="num font-mono">${formatarReal(s1.senior[1])}</td>
        <td class="num font-mono highlight">${formatarReal((s1.senior[0] + s1.senior[1]) / 2)}</td>
        <td><button class="btn-sm" onclick="selecionarSalarioParaCalculadora('senior')">Simular</button></td>
      </tr>
    `;
  } else {
    thead.innerHTML = `
      <th>Senioridade</th>
      <th class="num-header">${lang1} (Média)</th>
      <th class="num-header">${lang2} (Média)</th>
      <th class="num-header">Diferencial Bruto</th>
      <th>Simular</th>
    `;
    const niveis = ["junior", "pleno", "senior"];
    const labels = { junior: "Júnior", pleno: "Pleno", senior: "Sênior" };

    tbody.innerHTML = niveis.map(lvl => {
      const med1 = (s1[lvl][0] + s1[lvl][1]) / 2;
      const med2 = (s2[lvl][0] + s2[lvl][1]) / 2;
      const diff = med1 - med2;
      const diffStr = diff >= 0 ? `+ ${formatarReal(diff)}` : `- ${formatarReal(Math.abs(diff))}`;
      const diffClass = diff >= 0 ? "highlight" : "num";

      return `
        <tr>
          <td><strong>${labels[lvl]}</strong></td>
          <td class="num font-mono">${formatarReal(med1)}</td>
          <td class="num font-mono">${formatarReal(med2)}</td>
          <td class="num font-mono ${diffClass}">${diffStr}</td>
          <td>
            <button class="btn-sm" onclick="definirSalarioManual(${med1})">${lang1}</button>
            <button class="btn-sm" onclick="definirSalarioManual(${med2})">${lang2}</button>
          </td>
        </tr>
      `;
    }).join("");
  }
}

function renderizarSpecs(lang1, stack1, isComp, lang2, stack2) {
  const container = document.getElementById("tech-specs-container");
  if (!container) return;

  const buildPills = (frameworks) => frameworks.map(fw => `<span>${fw}</span>`).join("");

  if (!isComp) {
    container.innerHTML = `
      <div>
        <span class="spec-label">Perfil de Mercado & Vantagens</span>
        <p class="spec-text">${stack1.vantagens}</p>
      </div>
      <div>
        <span class="spec-label">Pontos de Atenção & Trade-offs</span>
        <p class="spec-text">${stack1.desafios}</p>
      </div>
      <div>
        <span class="spec-label">Frameworks e Bibliotecas Comuns</span>
        <div class="tech-pills">${buildPills(stack1.frameworks)}</div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="spec-column">
        <span class="spec-label">Visão Geral: ${lang1}</span>
        <p class="spec-text">${stack1.vantagens}</p>
        <span class="spec-label">Frameworks Chave</span>
        <div class="tech-pills">${buildPills(stack1.frameworks)}</div>
      </div>
      <div class="spec-column">
        <span class="spec-label">Visão Geral: ${lang2}</span>
        <p class="spec-text">${stack2.vantagens}</p>
        <span class="spec-label">Frameworks Chave</span>
        <div class="tech-pills">${buildPills(stack2.frameworks)}</div>
      </div>
    `;
  }
}

function selecionarSalarioParaCalculadora(senioridade) {
  if (currentSalaries[senioridade]) {
    definirSalarioManual(currentSalaries[senioridade]);
  }
}

function definirSalarioManual(valor) {
  const inputSalario = document.getElementById("input-salario");
  if (inputSalario) {
    inputSalario.value = valor;
    calcularCLTvsPJ();
  }
}

function calcularCLTvsPJ() {
  const inputSalario = document.getElementById("input-salario");
  if (!inputSalario) return;

  const bruto = parseFloat(inputSalario.value) || 0;
  if (bruto <= 0) return;

  let taxaEfetiva = 0.16;
  if (bruto > 4500 && bruto <= 9000) taxaEfetiva = 0.22;
  else if (bruto > 9000) taxaEfetiva = 0.27;

  const deducoesCLT = bruto * taxaEfetiva;
  const liquidoCLT = bruto - deducoesCLT;
  const provisoesDiluidas = bruto * 0.27;

  let taxaPJ = 0.06;
  if (bruto > 12000) taxaPJ = 0.09;

  const impostoPJ = bruto * taxaPJ;
  const custoContabilidade = 200;
  const liquidoPJ = bruto - impostoPJ - custoContabilidade;

  const elCltBruto = document.getElementById("clt-bruto-val");
  const elCltDesc = document.getElementById("clt-descontos");
  const elCltLiq = document.getElementById("clt-liquido");
  const elCltAnual = document.getElementById("clt-anual");

  const elPjBruto = document.getElementById("pj-bruto-val");
  const elPjImp = document.getElementById("pj-impostos");
  const elPjLiq = document.getElementById("pj-liquido");

  if (elCltBruto) elCltBruto.textContent = formatarReal(bruto);
  if (elCltDesc) elCltDesc.textContent = `- ${formatarReal(deducoesCLT)}`;
  if (elCltLiq) elCltLiq.textContent = formatarReal(liquidoCLT);
  if (elCltAnual) elCltAnual.textContent = `+ ${formatarReal(provisoesDiluidas)}/mês`;

  if (elPjBruto) elPjBruto.textContent = formatarReal(bruto);
  if (elPjImp) elPjImp.textContent = `- ${formatarReal(impostoPJ)}`;
  if (elPjLiq) elPjLiq.textContent = formatarReal(liquidoPJ);
}