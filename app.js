const I18N = {
  en: {
    appTitle:"Factory Calc Tools", appSubtitle:"Quick calculators for unit conversion, weight, welding time, and machining time",
    install:"Install", language:"Language", tabConvert:"Convert", tabWeight:"Weight", tabWelding:"Welding", tabMachining:"Machining", tabSettings:"Settings",
    unitConversion:"Unit Conversion", category:"Category", length:"Length", weightUnit:"Weight", pressure:"Pressure", temperature:"Temperature", area:"Area", volume:"Volume",
    enterValue:"Enter value", result:"Result", copyResult:"Copy Result",
    weightCalculator:"Weight Calculator", shape:"Shape", plate:"Plate / Flat Bar", roundBar:"Round Bar", squareBar:"Square / Rectangular Bar", hexBar:"Hex Bar", roundPipe:"Round Pipe", squarePipe:"Square / Rectangular Pipe",
    material:"Material", quantity:"Quantity", weightPerPiece:"Weight per piece", totalWeight:"Total weight",
    weldingTimeCalculator:"Welding Time Calculator",
    weldingNote:"Welding time = total weld length ÷ welding speed. Gas and wire are estimated from arc time. Work time is arc time + assist/move time.",
    totalWeldLength:"Total weld length mm / pc", weldingSpeed:"Welding speed mm/min", assistMoveTime:"Assist / move time sec / pc", quantityPcs:"Quantity pcs", gasFlow:"Gas flow L/min", wireUsageRate:"Wire usage kg/hr",
    legLength:"Leg length mm", advancedSettings:"Advanced settings", depositionEfficiency:"Deposition efficiency %", reinforcementFactor:"Reinforcement factor", weldMetalDensity:"Weld metal density g/cm³", weldMetalWeight:"Weld metal weight",
    arcTimePc:"Arc time / pc", workTimePc:"Work time / pc", totalWorkTime:"Total work time", gasUsage:"Gas usage", wireUsage:"Wire usage",
    machiningTimeCalculator:"Machining Time Calculator", calculationType:"Calculation type", milling:"Machining / Milling", turning:"Turning", drilling:"Drilling",
    spindleSpeed:"Spindle speed", feedRate:"Feed rate", machiningTimePc:"Machining time / pc", totalMachiningTime:"Total machining time",
    settings:"Settings", densityNote:"Density is in g/cm³ and is used for weight calculations.", saveSettings:"Save Settings", resetDefaults:"Reset to Defaults",
    steel:"Steel", stainless:"Stainless", aluminum:"Aluminum", brass:"Brass", copper:"Copper",
    lengthMm:"Length mm", widthMm:"Width mm", thicknessMm:"Thickness mm", diameterMm:"Diameter mm", heightMm:"Height mm", acrossFlatsMm:"Across flats mm", outerDiameterMm:"Outer diameter mm", wallThicknessMm:"Wall thickness mm", outerWidthMm:"Outer width mm", outerHeightMm:"Outer height mm",
    cuttingSpeed:"Cutting speed Vc m/min", toolDiameter:"Tool diameter D mm", flutes:"Flutes z", feedPerTooth:"Feed per tooth fz mm/tooth", cutLength:"Cut length L mm", passes:"Passes", workDiameter:"Work diameter D mm", feedPerRev:"Feed f mm/rev", drillDiameter:"Drill diameter D mm", holeDepth:"Hole depth mm", holeCount:"Holes / pc",
    weightFormulaSuffix:"Weight = volume(cm³) × density(g/cm³) ÷ 1000",
    fPlate:"Volume = length × width × thickness", fRound:"Volume = π × radius² × length", fSquare:"Volume = length × width × height", fHex:"Hex area = √3 / 2 × across-flats², volume = area × length", fRoundPipe:"Volume = π × (outer radius² - inner radius²) × length", fSquarePipe:"Volume = outer area - inner area, then × length",
    fmilling:"N = 1000×Vc ÷ (π×D), F = N×z×fz, time = cut length×passes ÷ F", fturning:"N = 1000×Vc ÷ (π×D), F = N×f, time = cut length×passes ÷ F", fdrilling:"N = 1000×Vc ÷ (π×D), F = N×f, time = hole depth×holes ÷ F"
  },
  ja: {
    appTitle:"Factory Calc Tools", appSubtitle:"単位換算・重量・溶接時間・加工時間をすばやく計算",
    install:"インストール", language:"言語", tabConvert:"単位換算", tabWeight:"重量", tabWelding:"溶接", tabMachining:"加工", tabSettings:"設定",
    unitConversion:"単位換算", category:"カテゴリ", length:"長さ", weightUnit:"重量", pressure:"圧力", temperature:"温度", area:"面積", volume:"体積",
    enterValue:"値を入力", result:"結果", copyResult:"結果をコピー",
    weightCalculator:"重量計算", shape:"形状", plate:"板材 / フラットバー", roundBar:"丸棒", squareBar:"角材", hexBar:"六角材", roundPipe:"丸パイプ", squarePipe:"角パイプ",
    material:"材質", quantity:"数量", weightPerPiece:"1個あたり", totalWeight:"合計",
    weldingTimeCalculator:"溶接時間計算",
    weldingNote:"溶接時間 = 総溶接長 ÷ 溶接速度。ガス・ワイヤーはアーク時間ベース、作業時間はアーク時間 + 移動・補助時間で計算します。",
    totalWeldLength:"総溶接長 mm / pc", weldingSpeed:"溶接速度 mm/min", assistMoveTime:"移動・補助時間 sec / pc", quantityPcs:"数量 pcs", gasFlow:"ガス流量 L/min", wireUsageRate:"ワイヤー使用量 kg/hr",
    legLength:"脚長 mm", advancedSettings:"詳細設定", depositionEfficiency:"溶着効率 %", reinforcementFactor:"余盛り係数", weldMetalDensity:"溶着金属密度 g/cm³", weldMetalWeight:"溶着金属重量",
    arcTimePc:"アーク時間 / pc", workTimePc:"作業時間 / pc", totalWorkTime:"合計作業時間", gasUsage:"ガス使用量", wireUsage:"ワイヤー使用量",
    machiningTimeCalculator:"加工時間計算", calculationType:"計算タイプ", milling:"マシニング / フライス", turning:"旋盤", drilling:"穴あけ",
    spindleSpeed:"回転数", feedRate:"送り速度", machiningTimePc:"加工時間 / pc", totalMachiningTime:"合計加工時間",
    settings:"設定", densityNote:"密度は g/cm³。重量計算で使用します。", saveSettings:"設定を保存", resetDefaults:"初期値に戻す",
    steel:"鉄", stainless:"ステンレス", aluminum:"アルミ", brass:"真鍮", copper:"銅",
    lengthMm:"長さ mm", widthMm:"幅 mm", thicknessMm:"厚み mm", diameterMm:"直径 mm", heightMm:"高さ mm", acrossFlatsMm:"対辺 mm", outerDiameterMm:"外径 mm", wallThicknessMm:"肉厚 mm", outerWidthMm:"外幅 mm", outerHeightMm:"外高 mm",
    cuttingSpeed:"切削速度 Vc m/min", toolDiameter:"工具径 D mm", flutes:"刃数 z", feedPerTooth:"1刃送り fz mm/tooth", cutLength:"加工長 L mm", passes:"回数 / パス数", workDiameter:"ワーク径 D mm", feedPerRev:"送り f mm/rev", drillDiameter:"ドリル径 D mm", holeDepth:"穴深さ mm", holeCount:"穴数 / pc",
    weightFormulaSuffix:"重量 = 体積(cm³) × 密度(g/cm³) ÷ 1000",
    fPlate:"体積 = 長さ × 幅 × 厚み", fRound:"体積 = π × 半径² × 長さ", fSquare:"体積 = 長さ × 幅 × 高さ", fHex:"六角面積 = √3 / 2 × 対辺²、体積 = 面積 × 長さ", fRoundPipe:"体積 = π × (外半径² - 内半径²) × 長さ", fSquarePipe:"体積 = 外面積 - 内面積、それに長さを掛ける",
    fmilling:"N = 1000×Vc ÷ (π×D), F = N×z×fz, 時間 = 加工長×回数 ÷ F", fturning:"N = 1000×Vc ÷ (π×D), F = N×f, 時間 = 加工長×回数 ÷ F", fdrilling:"N = 1000×Vc ÷ (π×D), F = N×f, 時間 = 穴深さ×穴数 ÷ F"
  },
  th: {
    appTitle:"Factory Calc Tools", appSubtitle:"เครื่องคำนวณด่วนสำหรับแปลงหน่วย น้ำหนัก เวลาเชื่อม และเวลาแมชชีน",
    install:"ติดตั้ง", language:"ภาษา", tabConvert:"แปลงหน่วย", tabWeight:"น้ำหนัก", tabWelding:"งานเชื่อม", tabMachining:"แมชชีน", tabSettings:"ตั้งค่า",
    unitConversion:"แปลงหน่วย", category:"หมวดหมู่", length:"ความยาว", weightUnit:"น้ำหนัก", pressure:"ความดัน", temperature:"อุณหภูมิ", area:"พื้นที่", volume:"ปริมาตร",
    enterValue:"ใส่ค่า", result:"ผลลัพธ์", copyResult:"คัดลอกผลลัพธ์",
    weightCalculator:"คำนวณน้ำหนัก", shape:"รูปทรง", plate:"แผ่น / แฟลตบาร์", roundBar:"เหล็กกลม", squareBar:"เหล็กเหลี่ยม / สี่เหลี่ยมผืนผ้า", hexBar:"เหล็กหกเหลี่ยม", roundPipe:"ท่อกลม", squarePipe:"ท่อเหลี่ยม",
    material:"วัสดุ", quantity:"จำนวน", weightPerPiece:"น้ำหนักต่อชิ้น", totalWeight:"น้ำหนักรวม",
    weldingTimeCalculator:"คำนวณเวลาเชื่อม",
    weldingNote:"เวลาเชื่อม = ความยาวแนวเชื่อมรวม ÷ ความเร็วเชื่อม ก๊าซและลวดคำนวณจากเวลาอาร์ก เวลา งาน = เวลาอาร์ก + เวลาช่วย/เคลื่อนย้าย",
    totalWeldLength:"ความยาวแนวเชื่อมรวม mm / ชิ้น", weldingSpeed:"ความเร็วเชื่อม mm/min", assistMoveTime:"เวลาช่วย/เคลื่อนย้าย sec / ชิ้น", quantityPcs:"จำนวน pcs", gasFlow:"อัตราการไหลก๊าซ L/min", wireUsageRate:"อัตราใช้ลวด kg/hr",
    legLength:"ขาเชื่อม mm", advancedSettings:"การตั้งค่าขั้นสูง", depositionEfficiency:"ประสิทธิภาพการสะสม %", reinforcementFactor:"ค่าส่วนเสริมแนวเชื่อม", weldMetalDensity:"ความหนาแน่นโลหะเชื่อม g/cm³", weldMetalWeight:"น้ำหนักโลหะเชื่อม",
    arcTimePc:"เวลาอาร์ก / ชิ้น", workTimePc:"เวลางาน / ชิ้น", totalWorkTime:"เวลางานรวม", gasUsage:"ปริมาณก๊าซ", wireUsage:"ปริมาณลวด",
    machiningTimeCalculator:"คำนวณเวลาแมชชีน", calculationType:"ประเภทการคำนวณ", milling:"แมชชีน / มิลลิ่ง", turning:"กลึง", drilling:"เจาะ",
    spindleSpeed:"ความเร็วรอบ", feedRate:"อัตราป้อน", machiningTimePc:"เวลาแมชชีน / ชิ้น", totalMachiningTime:"เวลาแมชชีนรวม",
    settings:"ตั้งค่า", densityNote:"ความหนาแน่นเป็น g/cm³ ใช้สำหรับคำนวณน้ำหนัก", saveSettings:"บันทึกการตั้งค่า", resetDefaults:"คืนค่าเริ่มต้น",
    steel:"เหล็ก", stainless:"สแตนเลส", aluminum:"อะลูมิเนียม", brass:"ทองเหลือง", copper:"ทองแดง",
    lengthMm:"ความยาว mm", widthMm:"ความกว้าง mm", thicknessMm:"ความหนา mm", diameterMm:"เส้นผ่านศูนย์กลาง mm", heightMm:"ความสูง mm", acrossFlatsMm:"ระยะปาก mm", outerDiameterMm:"เส้นผ่านศูนย์กลางนอก mm", wallThicknessMm:"ความหนาผนัง mm", outerWidthMm:"ความกว้างนอก mm", outerHeightMm:"ความสูงนอก mm",
    cuttingSpeed:"ความเร็วตัด Vc m/min", toolDiameter:"เส้นผ่านศูนย์กลางดอก D mm", flutes:"จำนวนฟัน z", feedPerTooth:"ฟีดต่อฟัน fz mm/tooth", cutLength:"ระยะตัด L mm", passes:"จำนวนพาส", workDiameter:"เส้นผ่านศูนย์กลางงาน D mm", feedPerRev:"ฟีด f mm/rev", drillDiameter:"เส้นผ่านศูนย์กลางดอกสว่าน D mm", holeDepth:"ความลึกรู mm", holeCount:"จำนวนรู / ชิ้น",
    weightFormulaSuffix:"น้ำหนัก = ปริมาตร(cm³) × ความหนาแน่น(g/cm³) ÷ 1000",
    fPlate:"ปริมาตร = ยาว × กว้าง × หนา", fRound:"ปริมาตร = π × รัศมี² × ยาว", fSquare:"ปริมาตร = ยาว × กว้าง × สูง", fHex:"พื้นที่หกเหลี่ยม = √3 / 2 × ระยะปาก², ปริมาตร = พื้นที่ × ยาว", fRoundPipe:"ปริมาตร = π × (รัศมีนอก² - รัศมีใน²) × ยาว", fSquarePipe:"ปริมาตร = พื้นที่นอก - พื้นที่ใน แล้วคูณด้วยความยาว",
    fmilling:"N = 1000×Vc ÷ (π×D), F = N×z×fz, เวลา = ระยะตัด×พาส ÷ F", fturning:"N = 1000×Vc ÷ (π×D), F = N×f, เวลา = ระยะตัด×พาส ÷ F", fdrilling:"N = 1000×Vc ÷ (π×D), F = N×f, เวลา = ความลึกรู×จำนวนรู ÷ F"
  },
  id: {
    appTitle:"Factory Calc Tools", appSubtitle:"Kalkulator cepat untuk konversi unit, berat, waktu welding, dan waktu machining",
    install:"Instal", language:"Bahasa", tabConvert:"Konversi", tabWeight:"Berat", tabWelding:"Welding", tabMachining:"Machining", tabSettings:"Pengaturan",
    unitConversion:"Konversi Unit", category:"Kategori", length:"Panjang", weightUnit:"Berat", pressure:"Tekanan", temperature:"Suhu", area:"Luas", volume:"Volume",
    enterValue:"Masukkan nilai", result:"Hasil", copyResult:"Salin Hasil",
    weightCalculator:"Kalkulator Berat", shape:"Bentuk", plate:"Plate / Flat Bar", roundBar:"Round Bar", squareBar:"Square / Rectangular Bar", hexBar:"Hex Bar", roundPipe:"Round Pipe", squarePipe:"Square / Rectangular Pipe",
    material:"Material", quantity:"Jumlah", weightPerPiece:"Berat per pcs", totalWeight:"Berat total",
    weldingTimeCalculator:"Kalkulator Waktu Welding",
    weldingNote:"Waktu welding = total panjang las ÷ kecepatan welding. Gas dan wire dihitung dari arc time. Work time = arc time + assist/move time.",
    totalWeldLength:"Total panjang las mm / pcs", weldingSpeed:"Kecepatan welding mm/min", assistMoveTime:"Assist / move time sec / pcs", quantityPcs:"Jumlah pcs", gasFlow:"Gas flow L/min", wireUsageRate:"Pemakaian wire kg/hr",
    legLength:"Ukuran kaki las mm", advancedSettings:"Pengaturan lanjutan", depositionEfficiency:"Efisiensi deposisi %", reinforcementFactor:"Faktor reinforcement", weldMetalDensity:"Density logam las g/cm³", weldMetalWeight:"Berat logam las",
    arcTimePc:"Arc time / pcs", workTimePc:"Work time / pcs", totalWorkTime:"Total work time", gasUsage:"Pemakaian gas", wireUsage:"Pemakaian wire",
    machiningTimeCalculator:"Kalkulator Waktu Machining", calculationType:"Tipe perhitungan", milling:"Machining / Milling", turning:"Turning", drilling:"Drilling",
    spindleSpeed:"Spindle speed", feedRate:"Feed rate", machiningTimePc:"Machining time / pcs", totalMachiningTime:"Total machining time",
    settings:"Pengaturan", densityNote:"Density dalam g/cm³ dan digunakan untuk perhitungan berat.", saveSettings:"Simpan Pengaturan", resetDefaults:"Reset Default",
    steel:"Steel", stainless:"Stainless", aluminum:"Aluminum", brass:"Brass", copper:"Copper",
    lengthMm:"Panjang mm", widthMm:"Lebar mm", thicknessMm:"Tebal mm", diameterMm:"Diameter mm", heightMm:"Tinggi mm", acrossFlatsMm:"Across flats mm", outerDiameterMm:"Diameter luar mm", wallThicknessMm:"Tebal dinding mm", outerWidthMm:"Lebar luar mm", outerHeightMm:"Tinggi luar mm",
    cuttingSpeed:"Cutting speed Vc m/min", toolDiameter:"Tool diameter D mm", flutes:"Jumlah flute z", feedPerTooth:"Feed per tooth fz mm/tooth", cutLength:"Cut length L mm", passes:"Passes", workDiameter:"Work diameter D mm", feedPerRev:"Feed f mm/rev", drillDiameter:"Drill diameter D mm", holeDepth:"Hole depth mm", holeCount:"Jumlah hole / pcs",
    weightFormulaSuffix:"Berat = volume(cm³) × density(g/cm³) ÷ 1000",
    fPlate:"Volume = panjang × lebar × tebal", fRound:"Volume = π × radius² × panjang", fSquare:"Volume = panjang × lebar × tinggi", fHex:"Luas hex = √3 / 2 × across-flats², volume = luas × panjang", fRoundPipe:"Volume = π × (radius luar² - radius dalam²) × panjang", fSquarePipe:"Volume = luas luar - luas dalam, lalu × panjang",
    fmilling:"N = 1000×Vc ÷ (π×D), F = N×z×fz, waktu = cut length×passes ÷ F", fturning:"N = 1000×Vc ÷ (π×D), F = N×f, waktu = cut length×passes ÷ F", fdrilling:"N = 1000×Vc ÷ (π×D), F = N×f, waktu = hole depth×jumlah hole ÷ F"
  },
  zh: {
    appTitle:"Factory Calc Tools", appSubtitle:"快速计算单位换算、重量、焊接时间和加工时间",
    install:"安装", language:"语言", tabConvert:"换算", tabWeight:"重量", tabWelding:"焊接", tabMachining:"加工", tabSettings:"设置",
    unitConversion:"单位换算", category:"类别", length:"长度", weightUnit:"重量", pressure:"压力", temperature:"温度", area:"面积", volume:"体积",
    enterValue:"输入数值", result:"结果", copyResult:"复制结果",
    weightCalculator:"重量计算", shape:"形状", plate:"板材 / 扁钢", roundBar:"圆棒", squareBar:"方棒 / 矩形棒", hexBar:"六角棒", roundPipe:"圆管", squarePipe:"方管 / 矩形管",
    material:"材料", quantity:"数量", weightPerPiece:"单件重量", totalWeight:"总重量",
    weldingTimeCalculator:"焊接时间计算",
    weldingNote:"焊接时间 = 总焊缝长度 ÷ 焊接速度。气体和焊丝按电弧时间估算。作业时间 = 电弧时间 + 辅助/移动时间。",
    totalWeldLength:"总焊缝长度 mm / 件", weldingSpeed:"焊接速度 mm/min", assistMoveTime:"辅助/移动时间 sec / 件", quantityPcs:"数量 pcs", gasFlow:"气体流量 L/min", wireUsageRate:"焊丝用量 kg/hr",
    legLength:"焊脚尺寸 mm", advancedSettings:"高级设置", depositionEfficiency:"熔敷效率 %", reinforcementFactor:"余高系数", weldMetalDensity:"焊缝金属密度 g/cm³", weldMetalWeight:"焊缝金属重量",
    arcTimePc:"电弧时间 / 件", workTimePc:"作业时间 / 件", totalWorkTime:"总作业时间", gasUsage:"气体用量", wireUsage:"焊丝用量",
    machiningTimeCalculator:"加工时间计算", calculationType:"计算类型", milling:"加工中心 / 铣削", turning:"车削", drilling:"钻孔",
    spindleSpeed:"主轴转速", feedRate:"进给速度", machiningTimePc:"加工时间 / 件", totalMachiningTime:"总加工时间",
    settings:"设置", densityNote:"密度单位为 g/cm³，用于重量计算。", saveSettings:"保存设置", resetDefaults:"恢复默认",
    steel:"钢", stainless:"不锈钢", aluminum:"铝", brass:"黄铜", copper:"铜",
    lengthMm:"长度 mm", widthMm:"宽度 mm", thicknessMm:"厚度 mm", diameterMm:"直径 mm", heightMm:"高度 mm", acrossFlatsMm:"对边 mm", outerDiameterMm:"外径 mm", wallThicknessMm:"壁厚 mm", outerWidthMm:"外宽 mm", outerHeightMm:"外高 mm",
    cuttingSpeed:"切削速度 Vc m/min", toolDiameter:"刀具直径 D mm", flutes:"刃数 z", feedPerTooth:"每齿进给 fz mm/tooth", cutLength:"加工长度 L mm", passes:"次数 / 走刀数", workDiameter:"工件直径 D mm", feedPerRev:"进给 f mm/rev", drillDiameter:"钻头直径 D mm", holeDepth:"孔深 mm", holeCount:"孔数 / 件",
    weightFormulaSuffix:"重量 = 体积(cm³) × 密度(g/cm³) ÷ 1000",
    fPlate:"体积 = 长 × 宽 × 厚", fRound:"体积 = π × 半径² × 长度", fSquare:"体积 = 长 × 宽 × 高", fHex:"六角面积 = √3 / 2 × 对边²，体积 = 面积 × 长度", fRoundPipe:"体积 = π × (外半径² - 内半径²) × 长度", fSquarePipe:"体积 = 外面积 - 内面积，然后 × 长度",
    fmilling:"N = 1000×Vc ÷ (π×D), F = N×z×fz, 时间 = 加工长度×次数 ÷ F", fturning:"N = 1000×Vc ÷ (π×D), F = N×f, 时间 = 加工长度×次数 ÷ F", fdrilling:"N = 1000×Vc ÷ (π×D), F = N×f, 时间 = 孔深×孔数 ÷ F"
  }
};

const DEFAULT_MATERIALS = {
  steel: { density: 7.85 },
  stainless: { density: 7.93 },
  aluminum: { density: 2.70 },
  brass: { density: 8.50 },
  copper: { density: 8.96 }
};

let currentLang = localStorage.getItem("lang") || "en";
let materials = loadJson("materials", DEFAULT_MATERIALS);
let deferredInstallPrompt = null;

const $ = (id) => document.getElementById(id);
const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
const num = (id) => parseFloat($(id)?.value || "0") || 0;
const fmt = (v, digits = 3) => Number.isFinite(v) ? Number(v).toLocaleString(undefined, { maximumFractionDigits: digits }) : "0";

function loadJson(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || JSON.parse(JSON.stringify(fallback)); }
  catch { return JSON.parse(JSON.stringify(fallback)); }
}
function saveJson(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

function applyLanguage() {
  document.documentElement.lang = currentLang;
  $("langSelect").value = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  initMaterialSelect();
  renderShapeInputs();
  renderMachiningInputs();
  renderSettings();
  renderConverterUnits();
  calcWelding();

  const activePanel = document.querySelector(".panel.active");
  if (activePanel && window.setActiveTab) {
    window.setActiveTab(activePanel.id);
  }
}

function initTabs() {
  const menuToggle = $("menuToggle");
  const navMenu = $("navMenu");
  const settingsShortcut = $("settingsShortcut");

  function tabLabelKey(tabName) {
    const map = {
      convert: "tabConvert",
      weight: "tabWeight",
      welding: "tabWelding",
      machining: "tabMachining",
      settings: "tabSettings"
    };
    return map[tabName] || "tabConvert";
  }

  window.setActiveTab = function(tabName) {
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    const panel = $(tabName);
    if (panel) panel.classList.add("active");

    document.querySelectorAll(".menu-item").forEach(item => {
      item.classList.toggle("active", item.dataset.tab === tabName);
    });

    $("currentTabLabel").textContent = t(tabLabelKey(tabName));
    settingsShortcut.classList.toggle("active", tabName === "settings");

    navMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isHidden = navMenu.classList.toggle("hidden");
    menuToggle.setAttribute("aria-expanded", String(!isHidden));
  });

  document.querySelectorAll(".menu-item").forEach(btn => {
    btn.addEventListener("click", () => window.setActiveTab(btn.dataset.tab));
  });

  settingsShortcut.addEventListener("click", () => window.setActiveTab("settings"));

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
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
    kgfcm2: { label: "kgf/cm²", toBase: v => v * 0.0980665, fromBase: v => v / 0.0980665 },
    bar: { label: "bar", toBase: v => v * 0.1, fromBase: v => v / 0.1 }
  },
  temperature: {
    c: { label: "°C", toBase: v => v, fromBase: v => v },
    f: { label: "°F", toBase: v => (v - 32) * 5 / 9, fromBase: v => v * 9 / 5 + 32 }
  },
  area: {
    mm2: { label: "mm²", toBase: v => v, fromBase: v => v },
    cm2: { label: "cm²", toBase: v => v * 100, fromBase: v => v / 100 },
    m2: { label: "m²", toBase: v => v * 1000000, fromBase: v => v / 1000000 },
    in2: { label: "inch²", toBase: v => v * 645.16, fromBase: v => v / 645.16 }
  },
  volume: {
    mm3: { label: "mm³", toBase: v => v, fromBase: v => v },
    cm3: { label: "cm³", toBase: v => v * 1000, fromBase: v => v / 1000 },
    liter: { label: "L", toBase: v => v * 1000000, fromBase: v => v / 1000000 },
    m3: { label: "m³", toBase: v => v * 1000000000, fromBase: v => v / 1000000000 }
  }
};

function renderConverterUnits() {
  const type = $("convertType").value;
  const from = $("convertFrom");
  const toEl = $("convertTo");
  const oldFrom = from.value, oldTo = toEl.value;
  from.innerHTML = "";
  toEl.innerHTML = "";
  Object.entries(UNITS[type]).forEach(([key, u]) => {
    from.add(new Option(u.label, key));
    toEl.add(new Option(u.label, key));
  });
  if (UNITS[type][oldFrom]) from.value = oldFrom;
  if (UNITS[type][oldTo]) toEl.value = oldTo;
  if (!from.value || !toEl.value || from.value === toEl.value) {
    const keys = Object.keys(UNITS[type]);
    from.value = keys[0];
    toEl.value = keys[1] || keys[0];
  }
  calcConvert();
}
function calcConvert() {
  const type = $("convertType").value;
  const value = num("convertValue");
  const from = UNITS[type][$("convertFrom").value];
  const toUnit = UNITS[type][$("convertTo").value];
  $("convertResult").textContent = fmt(toUnit.fromBase(from.toBase(value)), 6);
}

function initMaterialSelect() {
  const select = $("material");
  const selected = select.value || "steel";
  select.innerHTML = "";
  Object.entries(materials).forEach(([key, m]) => {
    select.add(new Option(`${t(key)} (${m.density})`, key));
  });
  select.value = materials[selected] ? selected : "steel";
}

const SHAPE_FIELDS = {
  plate: [["length", "lengthMm"], ["width", "widthMm"], ["thickness", "thicknessMm"]],
  round: [["length", "lengthMm"], ["diameter", "diameterMm"]],
  square: [["length", "lengthMm"], ["width", "widthMm"], ["height", "heightMm"]],
  hex: [["length", "lengthMm"], ["across", "acrossFlatsMm"]],
  roundPipe: [["length", "lengthMm"], ["outerDiameter", "outerDiameterMm"], ["thickness", "wallThicknessMm"]],
  squarePipe: [["length", "lengthMm"], ["width", "outerWidthMm"], ["height", "outerHeightMm"], ["thickness", "wallThicknessMm"]]
};

function renderShapeInputs() {
  const shape = $("shape").value || "plate";
  const wrap = $("shapeInputs");
  const oldValues = {};
  wrap.querySelectorAll("input").forEach(i => oldValues[i.id] = i.value);
  wrap.innerHTML = "";
  SHAPE_FIELDS[shape].forEach(([key, labelKey]) => {
    const div = document.createElement("div");
    div.innerHTML = `<label>${t(labelKey)}</label><input id="${key}" type="number" step="any" min="0" placeholder="${t(labelKey)}" value="${oldValues[key] || ""}">`;
    wrap.appendChild(div);
  });
  wrap.querySelectorAll("input").forEach(i => i.addEventListener("input", calcWeight));
  updateWeightFormula();
  calcWeight();
}
function updateWeightFormula() {
  const shape = $("shape").value || "plate";
  const map = { plate:"fPlate", round:"fRound", square:"fSquare", hex:"fHex", roundPipe:"fRoundPipe", squarePipe:"fSquarePipe" };
  $("weightFormula").textContent = `${t(map[shape])} / ${t("weightFormulaSuffix")}`;
}
function calcWeight() {
  const shape = $("shape").value || "plate";
  const density = materials[$("material").value || "steel"].density;
  const qty = Math.max(1, num("qty"));
  let volumeMm3 = 0;
  if (shape === "plate") volumeMm3 = num("length") * num("width") * num("thickness");
  if (shape === "round") {
    const r = num("diameter") / 2;
    volumeMm3 = Math.PI * r * r * num("length");
  }
  if (shape === "square") volumeMm3 = num("length") * num("width") * num("height");
  if (shape === "hex") {
    const a = num("across");
    volumeMm3 = (Math.sqrt(3) / 2) * a * a * num("length");
  }
  if (shape === "roundPipe") {
    const ro = num("outerDiameter") / 2;
    const ri = Math.max(0, ro - num("thickness"));
    volumeMm3 = Math.PI * (ro * ro - ri * ri) * num("length");
  }
  if (shape === "squarePipe") {
    const w = num("width"), h = num("height"), th = num("thickness");
    const innerW = Math.max(0, w - 2 * th);
    const innerH = Math.max(0, h - 2 * th);
    volumeMm3 = (w * h - innerW * innerH) * num("length");
  }
  const eachKg = (volumeMm3 / 1000) * density / 1000;
  $("weightEach").textContent = `${fmt(eachKg)} kg`;
  $("weightTotal").textContent = `${fmt(eachKg * qty)} kg`;
}

function calcWelding() {
  const arcEachMin = num("weldLength") / Math.max(0.0001, num("weldSpeed"));
  const assistEachMin = num("weldAssistSec") / 60;
  const workEachMin = arcEachMin + assistEachMin;
  const qty = Math.max(1, num("weldQty"));
  const totalArcMin = arcEachMin * qty;
  const totalWorkMin = workEachMin * qty;

  // Fillet weld approximation:
  // cross-sectional area = leg length^2 / 2
  // weld metal weight = volume(cm3) * density(g/cm3) / 1000
  // wire usage = weld metal weight * reinforcement factor / deposition efficiency
  const leg = num("weldLegLength");
  const weldAreaMm2 = (leg * leg) / 2;
  const totalWeldVolumeMm3 = weldAreaMm2 * num("weldLength") * qty;
  const weldMetalKg = (totalWeldVolumeMm3 / 1000) * num("weldMetalDensity") / 1000;
  const depositionEfficiency = Math.max(0.0001, num("depositionEfficiency") / 100);
  const wireKg = weldMetalKg * num("reinforcementFactor") / depositionEfficiency;

  const gasL = totalArcMin * num("gasFlow");

  $("arcTimeEach").textContent = `${fmt(arcEachMin)} min`;
  $("workTimeEach").textContent = `${fmt(workEachMin)} min`;
  $("workTimeTotal").textContent = `${fmt(totalWorkMin)} min`;
  $("gasUsage").textContent = `${fmt(gasL)} L`;
  $("weldMetalWeight").textContent = `${fmt(weldMetalKg)} kg`;
  $("wireUsage").textContent = `${fmt(wireKg)} kg`;
}

const MACHINING_FIELDS = {
  milling: [
    ["cuttingSpeed", "cuttingSpeed", 100],
    ["toolDiameter", "toolDiameter", 10],
    ["flutes", "flutes", 2],
    ["feedPerTooth", "feedPerTooth", 0.05],
    ["cutLength", "cutLength", 100],
    ["passes", "passes", 1],
    ["qtyMachining", "quantityPcs", 1]
  ],
  turning: [
    ["cuttingSpeed", "cuttingSpeed", 120],
    ["workDiameter", "workDiameter", 30],
    ["feedPerRev", "feedPerRev", 0.15],
    ["cutLength", "cutLength", 100],
    ["passes", "passes", 1],
    ["qtyMachining", "quantityPcs", 1]
  ],
  drilling: [
    ["cuttingSpeed", "cuttingSpeed", 80],
    ["drillDiameter", "drillDiameter", 8],
    ["feedPerRev", "feedPerRev", 0.12],
    ["holeDepth", "holeDepth", 20],
    ["holeCount", "holeCount", 1],
    ["qtyMachining", "quantityPcs", 1]
  ]
};

function renderMachiningInputs() {
  const type = $("machiningType").value || "milling";
  const wrap = $("machiningInputs");
  const oldValues = {};
  wrap.querySelectorAll("input").forEach(i => oldValues[i.id] = i.value);
  wrap.innerHTML = "";
  MACHINING_FIELDS[type].forEach(([key, labelKey, value]) => {
    const val = oldValues[key] ?? value;
    const div = document.createElement("div");
    div.innerHTML = `<label>${t(labelKey)}</label><input id="${key}" type="number" step="any" value="${val}">`;
    wrap.appendChild(div);
  });
  wrap.querySelectorAll("input").forEach(i => i.addEventListener("input", calcMachining));
  calcMachining();
}
function calcMachining() {
  const type = $("machiningType").value || "milling";
  let rpm = 0, feed = 0, eachMin = 0, formula = "";
  if (type === "milling") {
    rpm = (1000 * num("cuttingSpeed")) / (Math.PI * Math.max(0.0001, num("toolDiameter")));
    feed = rpm * num("flutes") * num("feedPerTooth");
    eachMin = (num("cutLength") * num("passes")) / Math.max(0.0001, feed);
    formula = t("fmilling");
  }
  if (type === "turning") {
    rpm = (1000 * num("cuttingSpeed")) / (Math.PI * Math.max(0.0001, num("workDiameter")));
    feed = rpm * num("feedPerRev");
    eachMin = (num("cutLength") * num("passes")) / Math.max(0.0001, feed);
    formula = t("fturning");
  }
  if (type === "drilling") {
    rpm = (1000 * num("cuttingSpeed")) / (Math.PI * Math.max(0.0001, num("drillDiameter")));
    feed = rpm * num("feedPerRev");
    eachMin = (num("holeDepth") * num("holeCount")) / Math.max(0.0001, feed);
    formula = t("fdrilling");
  }
  const qty = Math.max(1, num("qtyMachining"));
  $("machiningFormula").textContent = formula;
  $("rpmResult").textContent = `${fmt(rpm, 0)} rpm`;
  $("feedResult").textContent = `${fmt(feed, 1)} mm/min`;
  $("machiningTimeEach").textContent = `${fmt(eachMin)} min`;
  $("machiningTimeTotal").textContent = `${fmt(eachMin * qty)} min`;
}

function renderSettings() {
  const wrap = $("materialSettings");
  wrap.innerHTML = "";
  Object.entries(materials).forEach(([key, m]) => {
    const row = document.createElement("div");
    row.className = "material-row";
    row.innerHTML = `<label>${t(key)}</label><input data-density="${key}" type="number" step="any" value="${m.density}">`;
    wrap.appendChild(row);
  });
}

async function copyText(text) { await navigator.clipboard.writeText(text); }
function initCopyButtons() {
  $("copyConvert").addEventListener("click", () => {
    copyText(`${$("convertValue").value} ${$("convertFrom").selectedOptions[0].textContent} = ${$("convertResult").textContent} ${$("convertTo").selectedOptions[0].textContent}`);
  });
  $("copyWeight").addEventListener("click", () => {
    copyText(`${t("tabWeight")}: ${t("weightPerPiece")} ${$("weightEach").textContent}, ${t("totalWeight")} ${$("weightTotal").textContent}`);
  });
  $("copyWelding").addEventListener("click", () => {
    copyText(`${t("tabWelding")}: ${t("arcTimePc")} ${$("arcTimeEach").textContent}, ${t("workTimePc")} ${$("workTimeEach").textContent}, ${t("totalWorkTime")} ${$("workTimeTotal").textContent}, ${t("gasUsage")} ${$("gasUsage").textContent}, ${t("weldMetalWeight")} ${$("weldMetalWeight").textContent}, ${t("wireUsage")} ${$("wireUsage").textContent}`);
  });
  $("copyMachining").addEventListener("click", () => {
    copyText(`${t("tabMachining")}: ${$("rpmResult").textContent}, ${$("feedResult").textContent}, ${t("machiningTimePc")} ${$("machiningTimeEach").textContent}, ${t("totalMachiningTime")} ${$("machiningTimeTotal").textContent}`);
  });
}

function initPwa() {
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js");
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
  initCopyButtons();
  initPwa();

  $("langSelect").addEventListener("change", () => {
    currentLang = $("langSelect").value;
    localStorage.setItem("lang", currentLang);
    applyLanguage();
  });

  ["convertType", "convertFrom", "convertTo"].forEach(id => $(id).addEventListener("change", id === "convertType" ? renderConverterUnits : calcConvert));
  $("convertValue").addEventListener("input", calcConvert);

  ["shape", "material", "qty"].forEach(id => $(id).addEventListener("change", () => {
    if (id === "shape") renderShapeInputs();
    calcWeight();
  }));
  $("qty").addEventListener("input", calcWeight);

  ["weldLength", "weldLegLength", "weldSpeed", "weldAssistSec", "weldQty", "gasFlow", "depositionEfficiency", "reinforcementFactor", "weldMetalDensity"].forEach(id => $(id).addEventListener("input", calcWelding));
  $("machiningType").addEventListener("change", renderMachiningInputs);

  $("saveSettings").addEventListener("click", () => {
    document.querySelectorAll("[data-density]").forEach(input => {
      const key = input.dataset.density;
      materials[key].density = parseFloat(input.value) || materials[key].density;
    });
    saveJson("materials", materials);
    initMaterialSelect();
    renderSettings();
    calcWeight();
  });
  $("resetSettings").addEventListener("click", () => {
    materials = JSON.parse(JSON.stringify(DEFAULT_MATERIALS));
    saveJson("materials", materials);
    initMaterialSelect();
    renderSettings();
    calcWeight();
  });

  applyLanguage();
}
init();
