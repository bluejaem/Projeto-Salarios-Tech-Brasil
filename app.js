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

  selectLinguagem.innerHTML = '<option value="">Selecione...</option>';
  for (const lang in techData.linguagens) {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = lang;
    selectLinguagem.appendChild(opt);
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

  document.getElementById("select-linguagem").addEventListener("change", () => {
    if (document.getElementById("select-regiao").value) executarConsulta();
  });
  document.getElementById("select-regiao").addEventListener("change", () => {
    if (document.getElementById("select-linguagem").value) executarConsulta();
  });
}

function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function executarConsulta() {
  const lang = document.getElementById("select-linguagem").value;
  const regiao = document.getElementById("select-regiao").value;

  if (!lang || !regiao) return;

  const stack = techData.linguagens[lang];
  const salario = stack.regioes[regiao];

  if (!salario) return;

  document.getElementById("placeholder-box").classList.add("hidden");
  document.getElementById("results-panel").classList.remove("hidden");

  document.getElementById("res-title-stack").textContent = `Remuneração: ${lang}`;
  document.getElementById("res-regiao-badge").textContent = `Localidade: ${regiao}`;
  document.getElementById("res-demanda-badge").textContent = stack.demanda;

  // Valores Mínimos e Máximos na Tabela
  document.getElementById("sal-jr-min").textContent = formatarReal(salario.junior[0]);
  document.getElementById("sal-jr-max").textContent = formatarReal(salario.junior[1]);
  document.getElementById("sal-jr-med").textContent = formatarReal((salario.junior[0] + salario.junior[1]) / 2);

  document.getElementById("sal-pl-min").textContent = formatarReal(salario.pleno[0]);
  document.getElementById("sal-pl-max").textContent = formatarReal(salario.pleno[1]);
  document.getElementById("sal-pl-med").textContent = formatarReal((salario.pleno[0] + salario.pleno[1]) / 2);

  document.getElementById("sal-sr-min").textContent = formatarReal(salario.senior[0]);
  document.getElementById("sal-sr-max").textContent = formatarReal(salario.senior[1]);
  document.getElementById("sal-sr-med").textContent = formatarReal((salario.senior[0] + salario.senior[1]) / 2);

  currentSalaries = {
    junior: (salario.junior[0] + salario.junior[1]) / 2,
    pleno: (salario.pleno[0] + salario.pleno[1]) / 2,
    senior: (salario.senior[0] + salario.senior[1]) / 2
  };

  document.getElementById("res-vantagens").textContent = stack.vantagens;
  document.getElementById("res-desafios").textContent = stack.desafios;

  const containerTags = document.getElementById("res-frameworks");
  containerTags.innerHTML = "";
  stack.frameworks.forEach(fw => {
    const span = document.createElement("span");
    span.textContent = fw;
    containerTags.appendChild(span);
  });

  document.getElementById("input-salario").value = currentSalaries.pleno;
  calcularCLTvsPJ();
}

function selecionarSalarioParaCalculadora(senioridade) {
  if (currentSalaries[senioridade]) {
    document.getElementById("input-salario").value = currentSalaries[senioridade];
    calcularCLTvsPJ();
  }
}

function calcularCLTvsPJ() {
  const bruto = parseFloat(document.getElementById("input-salario").value) || 0;
  if (bruto <= 0) return;

  // Base CLT
  let taxaEfetiva = 0.16;
  if (bruto > 4500 && bruto <= 9000) taxaEfetiva = 0.22;
  else if (bruto > 9000) taxaEfetiva = 0.27;

  const deducoesCLT = bruto * taxaEfetiva;
  const liquidoCLT = bruto - deducoesCLT;
  const provisoesDiluidas = bruto * 0.27;

  // Base PJ
  let taxaPJ = 0.06;
  if (bruto > 12000) taxaPJ = 0.09;

  const impostoPJ = bruto * taxaPJ;
  const custoContabilidade = 200;
  const liquidoPJ = bruto - impostoPJ - custoContabilidade;

  // Atualização de elementos
  document.getElementById("clt-bruto-val").textContent = formatarReal(bruto);
  document.getElementById("clt-descontos").textContent = `- ${formatarReal(deducoesCLT)}`;
  document.getElementById("clt-liquido").textContent = formatarReal(liquidoCLT);
  document.getElementById("clt-anual").textContent = `+ ${formatarReal(provisoesDiluidas)}/mês`;

  document.getElementById("pj-bruto-val").textContent = formatarReal(bruto);
  document.getElementById("pj-impostos").textContent = `- ${formatarReal(impostoPJ)}`;
  document.getElementById("pj-liquido").textContent = formatarReal(liquidoPJ);
}