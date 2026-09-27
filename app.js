let techData = null;
let currentSalaries = { junior: 4000, pleno: 8000, senior: 13000 };

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("dados.json");
    techData = await response.json();
    popularSelects();
    vincularEventos();
  } catch (err) {
    console.error("Falha ao carregar a base dados.json:", err);
  }
});

function popularSelects() {
  const selectLinguagem = document.getElementById("select-linguagem");
  const selectRegiao = document.getElementById("select-regiao");
  const selectComparar = document.getElementById("select-comparar");

  selectLinguagem.innerHTML = '<option value="">Selecione...</option>';
  selectComparar.innerHTML = '<option value="">Nenhuma (Modo individual)</option>';

  for (const lang in techData.linguagens) {
    const opt1 = document.createElement("option");
    opt1.value = lang;
    opt1.textContent = lang;
    selectLinguagem.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = lang;
    opt2.textContent = lang;
    selectComparar.appendChild(opt2);
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
  document.getElementById("btn-consultar").addEventListener("click", executarConsulta);
  document.getElementById("btn-calcular").addEventListener("click", calcularCLTvsPJ);
  document.getElementById("input-salario").addEventListener("input", calcularCLTvsPJ);
  document.getElementById("btn-exportar").addEventListener("click", () => window.print());

  document.getElementById("select-linguagem").addEventListener("change", () => {
    if (document.getElementById("select-regiao").value) executarConsulta();
  });
  document.getElementById("select-regiao").addEventListener("change", () => {
    if (document.getElementById("select-linguagem").value) executarConsulta();
  });
  document.getElementById("select-comparar").addEventListener("change", () => {
    if (document.getElementById("select-linguagem").value && document.getElementById("select-regiao").value) {
      executarConsulta();
    }
  });
}

function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function executarConsulta() {
  const lang1 = document.getElementById("select-linguagem").value;
  const regiao = document.getElementById("select-regiao").value;
  const lang2 = document.getElementById("select-comparar").value;

  if (!lang1 || !regiao) return;

  const stack1 = techData.linguagens[lang1];
  const salario1 = stack1.regioes[regiao];
  if (!salario1) return;

  document.getElementById("placeholder-box").classList.add("hidden");
  document.getElementById("results-panel").classList.remove("hidden");

  const isComparacao = lang2 && lang2 !== lang1 && techData.linguagens[lang2];
  const stack2 = isComparacao ? techData.linguagens[lang2] : null;
  const salario2 = isComparacao ? stack2.regioes[regiao] : null;

  // Atualizar cabeçalho
  if (isComparacao) {
    document.getElementById("res-title-stack").textContent = `Comparativo: ${lang1} vs. ${lang2}`;
    document.getElementById("res-demanda-badge").textContent = `${lang1}: ${stack1.demanda} | ${lang2}: ${stack2.demanda}`;
  } else {
    document.getElementById("res-title-stack").textContent = `Remuneração: ${lang1}`;
    document.getElementById("res-demanda-badge").textContent = stack1.demanda;
  }
  document.getElementById("res-regiao-badge").textContent = `Localidade: ${regiao}`;

  renderizarTabela(lang1, salario1, isComparacao, lang2, salario2);
  renderizarSpecs(lang1, stack1, isComparacao, lang2, stack2);

  currentSalaries = {
    junior: (salario1.junior[0] + salario1.junior[1]) / 2,
    pleno: (salario1.pleno[0] + salario1.pleno[1]) / 2,
    senior: (salario1.senior[0] + salario1.senior[1]) / 2
  };

  document.getElementById("input-salario").value = currentSalaries.pleno;
  calcularCLTvsPJ();
}

function renderizarTabela(lang1, s1, isComp, lang2, s2) {
  const thead = document.getElementById("thead-row");
  const tbody = document.getElementById("tbody-salarios");

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
  document.getElementById("input-salario").value = valor;
  calcularCLTvsPJ();
}

function calcularCLTvsPJ() {
  const bruto = parseFloat(document.getElementById("input-salario").value) || 0;
  if (bruto <= 0) return;

  // Base CLT com deduções aproximadas INSS + IRRF
  let taxaEfetiva = 0.16;
  if (bruto > 4500 && bruto <= 9000) taxaEfetiva = 0.22;
  else if (bruto > 9000) taxaEfetiva = 0.27;

  const deducoesCLT = bruto * taxaEfetiva;
  const liquidoCLT = bruto - deducoesCLT;
  const provisoesDiluidas = bruto * 0.27; // 13º, férias + 1/3 e FGTS 8%

  // Base PJ (Simples Nacional Anexo III)
  let taxaPJ = 0.06;
  if (bruto > 12000) taxaPJ = 0.09;

  const impostoPJ = bruto * taxaPJ;
  const custoContabilidade = 200;
  const liquidoPJ = bruto - impostoPJ - custoContabilidade;

  document.getElementById("clt-bruto-val").textContent = formatarReal(bruto);
  document.getElementById("clt-descontos").textContent = `- ${formatarReal(deducoesCLT)}`;
  document.getElementById("clt-liquido").textContent = formatarReal(liquidoCLT);
  document.getElementById("clt-anual").textContent = `+ ${formatarReal(provisoesDiluidas)}/mês`;

  document.getElementById("pj-bruto-val").textContent = formatarReal(bruto);
  document.getElementById("pj-impostos").textContent = `- ${formatarReal(impostoPJ)}`;
  document.getElementById("pj-liquido").textContent = formatarReal(liquidoPJ);
}