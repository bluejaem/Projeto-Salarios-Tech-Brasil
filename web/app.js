let techData = null;
let currentSalaries = { junior: 4000, pleno: 8000, senior: 13000 };

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("dados.json");
    techData = await response.json();
    popularSelects();
    vincularEventos();
  } catch (err) {
    console.error("Erro na leitura de dados.json:", err);
  }
});

function popularSelects() {
  const selectLinguagem = document.getElementById("select-linguagem");
  const selectRegiao = document.getElementById("select-regiao");

  selectLinguagem.innerHTML = '<option value="">Selecione uma linguagem</option>';
  for (const lang in techData.linguagens) {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = lang;
    selectLinguagem.appendChild(opt);
  }

  const primeiraLang = Object.keys(techData.linguagens)[0];
  const regioesDisponiveis = Object.keys(techData.linguagens[primeiraLang].regioes);

  selectRegiao.innerHTML = '<option value="">Selecione a região</option>';
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

  if (!lang || !regiao) {
    return;
  }

  const stack = techData.linguagens[lang];
  const salario = stack.regioes[regiao];

  if (!salario) return;

  document.getElementById("placeholder-box").classList.add("hidden");
  document.getElementById("results-panel").classList.remove("hidden");

  document.getElementById("res-title-stack").textContent = `Remuneração: ${lang}`;
  document.getElementById("res-regiao-badge").textContent = `Região: ${regiao}`;
  document.getElementById("res-demanda-badge").textContent = stack.demanda;

  document.getElementById("sal-jr-txt").textContent = `${formatarReal(salario.junior[0])} - ${formatarReal(salario.junior[1])}`;
  document.getElementById("sal-pl-txt").textContent = `${formatarReal(salario.pleno[0])} - ${formatarReal(salario.pleno[1])}`;
  document.getElementById("sal-sr-txt").textContent = `${formatarReal(salario.senior[0])} - ${formatarReal(salario.senior[1])}`;

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
    span.className = "tag-item";
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

  let percDescontoCLT = 0.16;
  if (bruto > 4000 && bruto <= 8000) percDescontoCLT = 0.22;
  else if (bruto > 8000) percDescontoCLT = 0.26;

  const descontosCLT = bruto * percDescontoCLT;
  const liquidoCLT = bruto - descontosCLT;
  const beneficiosDiluidos = bruto * 0.27;

  let percImpostoPJ = 0.06;
  if (bruto > 12000) percImpostoPJ = 0.09;

  const impostosPJ = bruto * percImpostoPJ;
  const custoContabilidade = 200;
  const liquidoPJ = bruto - impostosPJ - custoContabilidade;

  document.getElementById("clt-descontos").textContent = formatarReal(descontosCLT);
  document.getElementById("clt-liquido").textContent = formatarReal(liquidoCLT);
  document.getElementById("clt-anual").textContent = `+ ${formatarReal(beneficiosDiluidos)}/mês`;

  document.getElementById("pj-impostos").textContent = formatarReal(impostosPJ);
  document.getElementById("pj-liquido").textContent = formatarReal(liquidoPJ);
}