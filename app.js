const DEFAULT_MATERIALS = {
  steel: { name: "鉄 / Steel", density: 7.85 },
  stainless: { name: "ステンレス / Stainless", density: 7.93 },
  aluminum: { name: "アルミ / Aluminum", density: 2.70 },
  brass: { name: "真鍮 / Brass", density: 8.50 },
  copper: { name: "銅 / Copper", density: 8.96 }
};

let materials = loadMaterials();
let deferredInstallPrompt = null;

const $ = (id) => document.getElementById(id);
const num = (id) => parseFloat($(id)?.value || "0") || 0;
const fmt = (v, digits = 3) => Number.isFinite(v) ? Number(v).toLocaleString(undefined, { maximumFractionDigits: digits }) : "0";

function loadMaterials() {
  try {
    return JSON.parse(localStorage.getItem("materials")) || DEFAULT_MATERIALS;
  } catch {
    return DEFAULT_MATERIALS;
  }
}

function saveMaterials() {
  localStorage.setItem("materials", JSON.stringify(materials));
}

function initTabs() {
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      $(btn.dataset.tab).classList.add("active");
    });
  });
}

function initMaterialSelect() {
  const select = $("material");
  select.innerHTML = "";
  Object.entries(materials).forEach(([key, m]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = `${m.name} (${m.density})`;
    select.appendChild(opt);
  });
}

const SHAPE_FIELDS = {
  plate: [
    ["length", "長さ mm"],
    ["width", "幅 mm"],
    ["thickness", "厚み mm"]
  ],
  round: [
    ["length", "長さ mm"],
    ["diameter", "直径 mm"]
  ],
  square: [
    ["length", "長さ mm"],
    ["width", "幅 mm"],
    ["height", "高さ mm"]
  ],
  hex: [
    ["length", "長さ mm"],
    ["across", "対辺 mm"]
  ],
  roundPipe: [
    ["length", "長さ mm"],
    ["outerDiameter", "外径 mm"],
    ["thickness", "肉厚 mm"]
  ],
  squarePipe: [
    ["length", "長さ mm"],
    ["width", "外幅 mm"],
    ["height", "外高 mm"],
    ["thickness", "肉厚 mm"]
  ]
};

function renderShapeInputs() {
  const shape = $("shape").value;
  const wrap = $("shapeInputs");
  wrap.innerHTML = "";
  SHAPE_FIELDS[shape].forEach(([key, label]) => {
    const div = document.createElement("div");
    div.innerHTML = `<label>${label}</label><input id="${key}" type="number" step="any" min="0" placeholder="${label}">`;
    wrap.appendChild(div);
  });
  wrap.querySelectorAll("input").forEach(i => i.addEventListener("input", calcWeight));
  calcWeight();
}

function calcWeight() {
  const shape = $("shape").value;
  const density = materials[$("material").value].density; // g/cm3
  const qty = Math.max(1, num("qty"));
  let volumeMm3 = 0;

  if (shape === "plate") {
    volumeMm3 = num("length") * num("width") * num("thickness");
  } else if (shape === "round") {
    const r = num("diameter") / 2;
    volumeMm3 = Math.PI * r * r * num("length");
  } else if (shape === "square") {
    volumeMm3 = num("length") * num("width") * num("height");
  } else if (shape === "hex") {
    const a = num("across");
    const area = (Math.sqrt(3) / 2) * a * a;
    volumeMm3 = area * num("length");
  } else if (shape === "roundPipe") {
    const ro = num("outerDiameter") / 2;
    const ri = Math.max(0, ro - num("thickness"));
    volumeMm3 = Math.PI * (ro * ro - ri * ri) * num("length");
  } else if (shape === "squarePipe") {
    const w = num("width");
    const h = num("height");
    const t = num("thickness");
    const innerW = Math.max(0, w - 2 * t);
    const innerH = Math.max(0, h - 2 * t);
    volumeMm3 = (w * h - innerW * innerH) * num("length");
  }

  const volumeCm3 = volumeMm3 / 1000;
  const eachKg = volumeCm3 * density / 1000;
  const totalKg = eachKg * qty;

  $("weightEach").textContent = `${fmt(eachKg)} kg`;
  $("weightTotal").textContent = `${fmt(totalKg)} kg`;
  $("costWeight").value = totalKg ? totalKg.toFixed(3) : "";
  calcCost();
}

const UNITS = {
  length: {
    mm: { label: "mm", toBase: v => v, fromBase: v => v },
    inch: { label: "inch", toBase: v => v * 25.4, fromBase: v => v / 25.4 },
    cm: { label: "cm", toBase: v => v * 10, fromBase: v => v / 10 },
    feet: { label: "feet", toBase: v => v * 304.8, fromBase: v => v / 304.8 },
    meter: { label: "m", toBase: v => v * 1000, fromBase: v => v / 1000 }
  },
  weight: {
    g: { label: "g", toBase: v => v, fromBase: v => v },
    kg: { label: "kg", toBase: v => v * 1000, fromBase: v => v / 1000 },
    lb: { label: "lb", toBase: v => v * 453.59237, fromBase: v => v / 453.59237 },
    oz: { label: "oz", toBase: v => v * 28.349523125, fromBase: v => v / 28.349523125 }
  },
  pressure: {
    mpa: { label: "MPa", toBase: v => v, fromBase: v => v },
    psi: { label: "psi", toBase: v => v * 0.006894757, fromBase: v => v / 0.006894757 },
    kgfcm2: { label: "kgf/cm²", toBase: v => v * 0.0980665, fromBase: v => v / 0.0980665 }
  },
  temperature: {
    c: { label: "°C", toBase: v => v, fromBase: v => v },
    f: { label: "°F", toBase: v => (v - 32) * 5 / 9, fromBase: v => v * 9 / 5 + 32 }
  }
};

function renderConverterUnits() {
  const type = $("convertType").value;
  const from = $("convertFrom");
  const to = $("convertTo");
  from.innerHTML = "";
  to.innerHTML = "";

  Object.entries(UNITS[type]).forEach(([key, u]) => {
    from.add(new Option(u.label, key));
    to.add(new Option(u.label, key));
  });

  if (type === "length") { from.value = "mm"; to.value = "inch"; }
  if (type === "weight") { from.value = "lb"; to.value = "kg"; }
  if (type === "pressure") { from.value = "psi"; to.value = "mpa"; }
  if (type === "temperature") { from.value = "c"; to.value = "f"; }

  calcConvert();
}

function calcConvert() {
  const type = $("convertType").value;
  const value = num("convertValue");
  const from = UNITS[type][$("convertFrom").value];
  const to = UNITS[type][$("convertTo").value];
  const base = from.toBase(value);
  const result = to.fromBase(base);
  $("convertResult").textContent = fmt(result, 6);
}

function calcCost() {
  const weight = num("costWeight");
  const unit = num("unitPrice");
  const loss = num("lossRate") / 100;
  const process = num("processCost");
  const overhead = num("overheadRate") / 100;
  const profit = num("profitRate") / 100;

  const material = weight * unit;
  const materialLoss = material * (1 + loss);
  const beforeProfit = (materialLoss + process) * (1 + overhead);
  const estimate = beforeProfit / Math.max(0.01, (1 - profit));

  $("materialCost").textContent = `$${fmt(material, 2)}`;
  $("materialCostLoss").textContent = `$${fmt(materialLoss, 2)}`;
  $("estimateCost").textContent = `$${fmt(estimate, 2)}`;
}

function renderSettings() {
  const wrap = $("materialSettings");
  wrap.innerHTML = "";
  Object.entries(materials).forEach(([key, m]) => {
    const row = document.createElement("div");
    row.className = "material-row";
    row.innerHTML = `<label>${m.name}</label><input data-density="${key}" type="number" step="any" value="${m.density}">`;
    wrap.appendChild(row);
  });
}

async function copyText(text) {
  await navigator.clipboard.writeText(text);
}

function initCopyButtons() {
  $("copyWeight").addEventListener("click", () => {
    copyText(`重量計算: 1個あたり ${$("weightEach").textContent}, 合計 ${$("weightTotal").textContent}`);
  });
  $("copyConvert").addEventListener("click", () => {
    copyText(`換算結果: ${$("convertValue").value} ${$("convertFrom").selectedOptions[0].textContent} = ${$("convertResult").textContent} ${$("convertTo").selectedOptions[0].textContent}`);
  });
  $("copyCost").addEventListener("click", () => {
    copyText(`材料費: ${$("materialCost").textContent}, ロス込み: ${$("materialCostLoss").textContent}, 概算見積: ${$("estimateCost").textContent}`);
  });
}

function initPwa() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    $("installBtn").classList.remove("hidden");
  });

  $("installBtn").addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt = null;
    $("installBtn").classList.add("hidden");
  });
}

function init() {
  initTabs();
  initMaterialSelect();
  renderShapeInputs();
  renderConverterUnits();
  renderSettings();
  initCopyButtons();
  initPwa();

  ["shape", "material", "qty"].forEach(id => $(id).addEventListener("change", () => {
    if (id === "shape") renderShapeInputs();
    calcWeight();
  }));
  $("qty").addEventListener("input", calcWeight);

  ["convertType", "convertFrom", "convertTo"].forEach(id => $(id).addEventListener("change", id === "convertType" ? renderConverterUnits : calcConvert));
  $("convertValue").addEventListener("input", calcConvert);

  ["costWeight", "unitPrice", "lossRate", "processCost", "overheadRate", "profitRate"].forEach(id => {
    $(id).addEventListener("input", calcCost);
  });

  $("saveSettings").addEventListener("click", () => {
    document.querySelectorAll("[data-density]").forEach(input => {
      const key = input.dataset.density;
      materials[key].density = parseFloat(input.value) || materials[key].density;
    });
    saveMaterials();
    initMaterialSelect();
    renderSettings();
    calcWeight();
  });

  $("resetSettings").addEventListener("click", () => {
    materials = JSON.parse(JSON.stringify(DEFAULT_MATERIALS));
    saveMaterials();
    initMaterialSelect();
    renderSettings();
    calcWeight();
  });
}

init();
