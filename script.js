// ---------- Full Periodic Table Data ----------
const elements = [
    { number: 1, symbol: "H", name: "Hydrogen", atomicMass: 1.008, electronegativity: 2.20, group: 1, period: 1 },
    { number: 2, symbol: "He", name: "Helium", atomicMass: 4.002602, electronegativity: null, group: 18, period: 1 },
    { number: 3, symbol: "Li", name: "Lithium", atomicMass: 6.94, electronegativity: 0.98, group: 1, period: 2 },
    { number: 4, symbol: "Be", name: "Beryllium", atomicMass: 9.0122, electronegativity: 1.57, group: 2, period: 2 },
    { number: 5, symbol: "B", name: "Boron", atomicMass: 10.81, electronegativity: 2.04, group: 13, period: 2 },
    { number: 6, symbol: "C", name: "Carbon", atomicMass: 12.011, electronegativity: 2.55, group: 14, period: 2 },
    { number: 7, symbol: "N", name: "Nitrogen", atomicMass: 14.007, electronegativity: 3.04, group: 15, period: 2 },
    { number: 8, symbol: "O", name: "Oxygen", atomicMass: 15.999, electronegativity: 3.44, group: 16, period: 2 },
    { number: 9, symbol: "F", name: "Fluorine", atomicMass: 18.998, electronegativity: 3.98, group: 17, period: 2 },
    { number: 10, symbol: "Ne", name: "Neon", atomicMass: 20.18, electronegativity: null, group: 18, period: 2 },
    { number: 11, symbol: "Na", name: "Sodium", atomicMass: 22.99, electronegativity: 0.93, group: 1, period: 3 },
    { number: 12, symbol: "Mg", name: "Magnesium", atomicMass: 24.305, electronegativity: 1.31, group: 2, period: 3 },
    { number: 13, symbol: "Al", name: "Aluminium", atomicMass: 26.982, electronegativity: 1.61, group: 13, period: 3 },
    { number: 14, symbol: "Si", name: "Silicon", atomicMass: 28.085, electronegativity: 1.90, group: 14, period: 3 },
    { number: 15, symbol: "P", name: "Phosphorus", atomicMass: 30.974, electronegativity: 2.19, group: 15, period: 3 },
    { number: 16, symbol: "S", name: "Sulfur", atomicMass: 32.06, electronegativity: 2.58, group: 16, period: 3 },
    { number: 17, symbol: "Cl", name: "Chlorine", atomicMass: 35.45, electronegativity: 3.16, group: 17, period: 3 },
    { number: 18, symbol: "Ar", name: "Argon", atomicMass: 39.948, electronegativity: null, group: 18, period: 3 },
    { number: 19, symbol: "K", name: "Potassium", atomicMass: 39.098, electronegativity: 0.82, group: 1, period: 4 },
    { number: 20, symbol: "Ca", name: "Calcium", atomicMass: 40.078, electronegativity: 1.00, group: 2, period: 4 },
    { number: 21, symbol: "Sc", name: "Scandium", atomicMass: 44.956, electronegativity: 1.36, group: 3, period: 4 },
    { number: 22, symbol: "Ti", name: "Titanium", atomicMass: 47.867, electronegativity: 1.54, group: 4, period: 4 },
    { number: 23, symbol: "V", name: "Vanadium", atomicMass: 50.942, electronegativity: 1.63, group: 5, period: 4 },
    { number: 24, symbol: "Cr", name: "Chromium", atomicMass: 51.996, electronegativity: 1.66, group: 6, period: 4 },
    { number: 25, symbol: "Mn", name: "Manganese", atomicMass: 54.938, electronegativity: 1.55, group: 7, period: 4 },
    { number: 26, symbol: "Fe", name: "Iron", atomicMass: 55.845, electronegativity: 1.83, group: 8, period: 4 },
    { number: 27, symbol: "Co", name: "Cobalt", atomicMass: 58.933, electronegativity: 1.88, group: 9, period: 4 },
    { number: 28, symbol: "Ni", name: "Nickel", atomicMass: 58.693, electronegativity: 1.91, group: 10, period: 4 },
    { number: 29, symbol: "Cu", name: "Copper", atomicMass: 63.546, electronegativity: 1.90, group: 11, period: 4 },
    { number: 30, symbol: "Zn", name: "Zinc", atomicMass: 65.38, electronegativity: 1.65, group: 12, period: 4 },
    { number: 31, symbol: "Ga", name: "Gallium", atomicMass: 69.723, electronegativity: 1.81, group: 13, period: 4 },
    { number: 32, symbol: "Ge", name: "Germanium", atomicMass: 72.63, electronegativity: 2.01, group: 14, period: 4 },
    { number: 33, symbol: "As", name: "Arsenic", atomicMass: 74.922, electronegativity: 2.18, group: 15, period: 4 },
    { number: 34, symbol: "Se", name: "Selenium", atomicMass: 78.971, electronegativity: 2.55, group: 16, period: 4 },
    { number: 35, symbol: "Br", name: "Bromine", atomicMass: 79.904, electronegativity: 2.96, group: 17, period: 4 },
    { number: 36, symbol: "Kr", name: "Krypton", atomicMass: 83.798, electronegativity: 3.00, group: 18, period: 4 },
    { number: 37, symbol: "Rb", name: "Rubidium", atomicMass: 85.468, electronegativity: 0.82, group: 1, period: 5 },
    { number: 38, symbol: "Sr", name: "Strontium", atomicMass: 87.62, electronegativity: 0.95, group: 2, period: 5 },
    { number: 39, symbol: "Y", name: "Yttrium", atomicMass: 88.906, electronegativity: 1.22, group: 3, period: 5 },
    { number: 40, symbol: "Zr", name: "Zirconium", atomicMass: 91.224, electronegativity: 1.33, group: 4, period: 5 },
    { number: 41, symbol: "Nb", name: "Niobium", atomicMass: 92.906, electronegativity: 1.6, group: 5, period: 5 },
    { number: 42, symbol: "Mo", name: "Molybdenum", atomicMass: 95.95, electronegativity: 2.16, group: 6, period: 5 },
    { number: 43, symbol: "Tc", name: "Technetium", atomicMass: 98, electronegativity: 1.9, group: 7, period: 5 },
    { number: 44, symbol: "Ru", name: "Ruthenium", atomicMass: 101.07, electronegativity: 2.2, group: 8, period: 5 },
    { number: 45, symbol: "Rh", name: "Rhodium", atomicMass: 102.91, electronegativity: 2.28, group: 9, period: 5 },
    { number: 46, symbol: "Pd", name: "Palladium", atomicMass: 106.42, electronegativity: 2.20, group: 10, period: 5 },
    { number: 47, symbol: "Ag", name: "Silver", atomicMass: 107.87, electronegativity: 1.93, group: 11, period: 5 },
    { number: 48, symbol: "Cd", name: "Cadmium", atomicMass: 112.41, electronegativity: 1.69, group: 12, period: 5 },
    { number: 49, symbol: "In", name: "Indium", atomicMass: 114.82, electronegativity: 1.78, group: 13, period: 5 },
    { number: 50, symbol: "Sn", name: "Tin", atomicMass: 118.71, electronegativity: 1.96, group: 14, period: 5 },
    { number: 51, symbol: "Sb", name: "Antimony", atomicMass: 121.76, electronegativity: 2.05, group: 15, period: 5 },
    { number: 52, symbol: "Te", name: "Tellurium", atomicMass: 127.60, electronegativity: 2.1, group: 16, period: 5 },
    { number: 53, symbol: "I", name: "Iodine", atomicMass: 126.90, electronegativity: 2.66, group: 17, period: 5 },
    { number: 54, symbol: "Xe", name: "Xenon", atomicMass: 131.29, electronegativity: 2.6, group: 18, period: 5 },
    { number: 55, symbol: "Cs", name: "Caesium", atomicMass: 132.91, electronegativity: 0.79, group: 1, period: 6 },
    { number: 56, symbol: "Ba", name: "Barium", atomicMass: 137.33, electronegativity: 0.89, group: 2, period: 6 },
    { number: 57, symbol: "La", name: "Lanthanum", atomicMass: 138.91, electronegativity: 1.1, group: 3, period: 6 },
    { number: 58, symbol: "Ce", name: "Cerium", atomicMass: 140.12, electronegativity: 1.12, group: 3, period: 6 },
    { number: 59, symbol: "Pr", name: "Praseodymium", atomicMass: 140.91, electronegativity: 1.13, group: 3, period: 6 },
    { number: 60, symbol: "Nd", name: "Neodymium", atomicMass: 144.24, electronegativity: 1.14, group: 3, period: 6 },
    { number: 61, symbol: "Pm", name: "Promethium", atomicMass: 145, electronegativity: 1.13, group: 3, period: 6 },
    { number: 62, symbol: "Sm", name: "Samarium", atomicMass: 150.36, electronegativity: 1.17, group: 3, period: 6 },
    { number: 63, symbol: "Eu", name: "Europium", atomicMass: 151.96, electronegativity: 1.2, group: 3, period: 6 },
    { number: 64, symbol: "Gd", name: "Gadolinium", atomicMass: 157.25, electronegativity: 1.2, group: 3, period: 6 },
    { number: 65, symbol: "Tb", name: "Terbium", atomicMass: 158.93, electronegativity: 1.2, group: 3, period: 6 },
    { number: 66, symbol: "Dy", name: "Dysprosium", atomicMass: 162.50, electronegativity: 1.22, group: 3, period: 6 },
    { number: 67, symbol: "Ho", name: "Holmium", atomicMass: 164.93, electronegativity: 1.23, group: 3, period: 6 },
    { number: 68, symbol: "Er", name: "Erbium", atomicMass: 167.26, electronegativity: 1.24, group: 3, period: 6 },
    { number: 69, symbol: "Tm", name: "Thulium", atomicMass: 168.93, electronegativity: 1.25, group: 3, period: 6 },
    { number: 70, symbol: "Yb", name: "Ytterbium", atomicMass: 173.05, electronegativity: 1.1, group: 3, period: 6 },
    { number: 71, symbol: "Lu", name: "Lutetium", atomicMass: 174.97, electronegativity: 1.27, group: 3, period: 6 },
    { number: 72, symbol: "Hf", name: "Hafnium", atomicMass: 178.49, electronegativity: 1.3, group: 4, period: 6 },
    { number: 73, symbol: "Ta", name: "Tantalum", atomicMass: 180.95, electronegativity: 1.5, group: 5, period: 6 },
    { number: 74, symbol: "W", name: "Tungsten", atomicMass: 183.84, electronegativity: 2.36, group: 6, period: 6 },
    { number: 75, symbol: "Re", name: "Rhenium", atomicMass: 186.21, electronegativity: 1.9, group: 7, period: 6 },
    { number: 76, symbol: "Os", name: "Osmium", atomicMass: 190.23, electronegativity: 2.2, group: 8, period: 6 },
    { number: 77, symbol: "Ir", name: "Iridium", atomicMass: 192.22, electronegativity: 2.20, group: 9, period: 6 },
    { number: 78, symbol: "Pt", name: "Platinum", atomicMass: 195.08, electronegativity: 2.28, group: 10, period: 6 },
    { number: 79, symbol: "Au", name: "Gold", atomicMass: 196.97, electronegativity: 2.54, group: 11, period: 6 },
    { number: 80, symbol: "Hg", name: "Mercury", atomicMass: 200.59, electronegativity: 2.00, group: 12, period: 6 },
    { number: 81, symbol: "Tl", name: "Thallium", atomicMass: 204.38, electronegativity: 1.62, group: 13, period: 6 },
    { number: 82, symbol: "Pb", name: "Lead", atomicMass: 207.2, electronegativity: 2.33, group: 14, period: 6 },
    { number: 83, symbol: "Bi", name: "Bismuth", atomicMass: 208.98, electronegativity: 2.02, group: 15, period: 6 },
    { number: 84, symbol: "Po", name: "Polonium", atomicMass: 209, electronegativity: 2.0, group: 16, period: 6 },
    { number: 85, symbol: "At", name: "Astatine", atomicMass: 210, electronegativity: 2.2, group: 17, period: 6 },
    { number: 86, symbol: "Rn", name: "Radon", atomicMass: 222, electronegativity: null, group: 18, period: 6 },
    { number: 87, symbol: "Fr", name: "Francium", atomicMass: 223, electronegativity: 0.7, group: 1, period: 7 },
    { number: 88, symbol: "Ra", name: "Radium", atomicMass: 226, electronegativity: 0.9, group: 2, period: 7 },
    { number: 89, symbol: "Ac", name: "Actinium", atomicMass: 227, electronegativity: 1.1, group: 3, period: 7 },
    { number: 90, symbol: "Th", name: "Thorium", atomicMass: 232.04, electronegativity: 1.3, group: 3, period: 7 },
    { number: 91, symbol: "Pa", name: "Protactinium", atomicMass: 231.04, electronegativity: 1.5, group: 3, period: 7 },
    { number: 92, symbol: "U", name: "Uranium", atomicMass: 238.03, electronegativity: 1.38, group: 3, period: 7 },
    { number: 93, symbol: "Np", name: "Neptunium", atomicMass: 237, electronegativity: 1.36, group: 3, period: 7 },
    { number: 94, symbol: "Pu", name: "Plutonium", atomicMass: 244, electronegativity: 1.28, group: 3, period: 7 },
    { number: 95, symbol: "Am", name: "Americium", atomicMass: 243, electronegativity: 1.3, group: 3, period: 7 },
    { number: 96, symbol: "Cm", name: "Curium", atomicMass: 247, electronegativity: 1.3, group: 3, period: 7 },
    { number: 97, symbol: "Bk", name: "Berkelium", atomicMass: 247, electronegativity: 1.3, group: 3, period: 7 },
    { number: 98, symbol: "Cf", name: "Californium", atomicMass: 251, electronegativity: 1.3, group: 3, period: 7 },
    { number: 99, symbol: "Es", name: "Einsteinium", atomicMass: 252, electronegativity: 1.3, group: 3, period: 7 },
    { number: 100, symbol: "Fm", name: "Fermium", atomicMass: 257, electronegativity: 1.3, group: 3, period: 7 },
    { number: 101, symbol: "Md", name: "Mendelevium", atomicMass: 258, electronegativity: 1.3, group: 3, period: 7 },
    { number: 102, symbol: "No", name: "Nobelium", atomicMass: 259, electronegativity: 1.3, group: 3, period: 7 },
    { number: 103, symbol: "Lr", name: "Lawrencium", atomicMass: 262, electronegativity: 1.3, group: 3, period: 7 },
    { number: 104, symbol: "Rf", name: "Rutherfordium", atomicMass: 267, electronegativity: null, group: 4, period: 7 },
    { number: 105, symbol: "Db", name: "Dubnium", atomicMass: 270, electronegativity: null, group: 5, period: 7 },
    { number: 106, symbol: "Sg", name: "Seaborgium", atomicMass: 271, electronegativity: null, group: 6, period: 7 },
    { number: 107, symbol: "Bh", name: "Bohrium", atomicMass: 270, electronegativity: null, group: 7, period: 7 },
    { number: 108, symbol: "Hs", name: "Hassium", atomicMass: 277, electronegativity: null, group: 8, period: 7 },
    { number: 109, symbol: "Mt", name: "Meitnerium", atomicMass: 278, electronegativity: null, group: 9, period: 7 },
    { number: 110, symbol: "Ds", name: "Darmstadtium", atomicMass: 281, electronegativity: null, group: 10, period: 7 },
    { number: 111, symbol: "Rg", name: "Roentgenium", atomicMass: 282, electronegativity: null, group: 11, period: 7 },
    { number: 112, symbol: "Cn", name: "Copernicium", atomicMass: 285, electronegativity: null, group: 12, period: 7 },
    { number: 113, symbol: "Nh", name: "Nihonium", atomicMass: 286, electronegativity: null, group: 13, period: 7 },
    { number: 114, symbol: "Fl", name: "Flerovium", atomicMass: 289, electronegativity: null, group: 14, period: 7 },
    { number: 115, symbol: "Mc", name: "Moscovium", atomicMass: 290, electronegativity: null, group: 15, period: 7 },
    { number: 116, symbol: "Lv", name: "Livermorium", atomicMass: 293, electronegativity: null, group: 16, period: 7 },
    { number: 117, symbol: "Ts", name: "Tennessine", atomicMass: 294, electronegativity: null, group: 17, period: 7 },
    { number: 118, symbol: "Og", name: "Oganesson", atomicMass: 294, electronegativity: null, group: 18, period: 7 }
  ];
  
  // ---------- Category Sets ----------
  const alkali        = new Set([3,11,19,37,55,87]);
  const alkaline      = new Set([4,12,20,38,56,88]);
  const halogens      = new Set([9,17,35,53,85,117]);
  const noble         = new Set([2,10,18,36,54,86,118]);
  const metalloids    = new Set([5,14,32,33,51,52,84]);
  const nonmetals     = new Set([1,6,7,8,15,16,34]);
  const postTrans     = new Set([13,31,49,50,81,82,83]);
  
  function isTransition(n){ return (n>=21 && n<=30)||(n>=39 && n<=48)||(n>=72 && n<=80)||(n>=104 && n<=112); }
  function isLanthanide(n){ return n>=57 && n<=71; }
  function isActinide(n){ return n>=89 && n<=103; }
  
  function getCategory(n){
    if(alkali.has(n)) return ["alkali","Alkali metal"];
    if(alkaline.has(n)) return ["alkaline","Alkaline earth metal"];
    if(isLanthanide(n)) return ["lanthanide","Lanthanide"];
    if(isActinide(n)) return ["actinide","Actinide"];
    if(isTransition(n)) return ["transition","Transition metal"];
    if(postTrans.has(n)) return ["post-transition","Post-transition metal"];
    if(metalloids.has(n)) return ["metalloid","Metalloid"];
    if(halogens.has(n)) return ["halogen","Halogen"];
    if(noble.has(n)) return ["noble","Noble gas"];
    if(nonmetals.has(n)) return ["nonmetal","Nonmetal"];
    return ["unknown","Unknown/other"];
  }
  
  // ---------- Legend ----------
  const legend = [
    ["alkali","Alkali metal"],["alkaline","Alkaline earth metal"],
    ["transition","Transition metal"],["post-transition","Post-transition metal"],
    ["metalloid","Metalloid"],["nonmetal","Nonmetal"],
    ["halogen","Halogen"],["noble","Noble gas"],
    ["lanthanide","Lanthanide"],["actinide","Actinide"],["unknown","Unknown/other"]
  ];
  const legendEl = document.getElementById("legend");
  legend.forEach(([key,label]) => {
    const b = document.createElement("span"); b.className = "badge";
    const dot = document.createElement("span"); dot.className = "dot";
    const fake = document.createElement("span"); fake.className = `element cat-${key}`;
    document.body.appendChild(fake); dot.style.backgroundColor = getComputedStyle(fake).backgroundColor; document.body.removeChild(fake);
    const text = document.createElement("span"); text.textContent = label;
    b.appendChild(dot); b.appendChild(text); legendEl.appendChild(b);
  });
  
  // ---------- Table Rendering ----------
  const table = document.getElementById("periodic-table");
  const details = document.getElementById("details");
  
  // Hover Popup
  const hoverPopup = document.createElement("div");
  hoverPopup.id="hover-popup";
  hoverPopup.style.position="absolute"; hoverPopup.style.backgroundColor="#111827";
  hoverPopup.style.padding="8px"; hoverPopup.style.borderRadius="6px"; hoverPopup.style.border="1px solid #ccc";
  hoverPopup.style.pointerEvents="none"; hoverPopup.style.display="none";
  document.body.appendChild(hoverPopup);
  function showPopup(el,x,y){
    hoverPopup.innerHTML=`<b>${el.symbol} — ${el.name}</b><br>Atomic: ${el.number}<br>${getCategory(el.number)[1]}`;
    hoverPopup.style.left = x+10+"px"; hoverPopup.style.top=y+10+"px"; hoverPopup.style.display="block";
  }
  function hidePopup(){ hoverPopup.style.display="none"; }
  function addHover(div,el){ div.addEventListener("mouseenter",e=>showPopup(el,e.pageX,e.pageY)); div.addEventListener("mousemove",e=>showPopup(el,e.pageX,e.pageY)); div.addEventListener("mouseleave",hidePopup); }
  
  // Layout
  const layout=[
    [1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2],
    [3,4,null,null,null,null,null,null,null,null,null,null,5,6,7,8,9,10],
    [11,12,null,null,null,null,null,null,null,null,null,null,13,14,15,16,17,18],
    [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
    [37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],
    [55,56,57,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86],
    [87,88,89,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]
  ];
  
  // Render elements
  layout.forEach(row => {
    row.forEach(num => {
      const div = document.createElement("div"); div.className = "element";
      if (num) {
        const el = elements.find(e => e.number === num); const [key] = getCategory(num);
        div.classList.add(`cat-${key}`); div.textContent = el.symbol;
        div.addEventListener("click", () => {
          renderDetails(el);
          document.querySelectorAll(".highlight").forEach(e=>e.classList.remove("highlight"));
          div.classList.add("highlight");
        });
        addHover(div,el);
      } else { div.style.visibility="hidden"; }
      table.appendChild(div);
    });
  });
  
  // Series rows
  function addSeries(start, end, labelText) {
    const wrap = document.createElement("div"); wrap.className="series";
    const lab = document.createElement("span"); lab.className="series-label"; lab.textContent=labelText; wrap.appendChild(lab);
    for(let n=start;n<=end;n++){
      const el = elements.find(e=>e.number===n); const [key] = getCategory(n);
      const div=document.createElement("div"); div.className=`element cat-${key}`; div.textContent=el.symbol;
      div.addEventListener("click",()=>renderDetails(el)); addHover(div,el); wrap.appendChild(div);
    }
    table.parentElement.appendChild(wrap);
  }
  addSeries(57,71,"Lanthanides");
  addSeries(89,103,"Actinides");
  
  // Render Details
  function renderDetails(el){
    details.innerHTML = `
      <h2>${el.symbol} (${el.name})</h2>
      <p><b>Atomic Number:</b> ${el.number}</p>
      <p><b>Atomic Mass:</b> ${el.atomicMass}</p>
      <p><b>Electronegativity:</b> ${el.electronegativity || "—"}</p>
      <p><b>Group:</b> ${el.group}</p>
      <p><b>Period:</b> ${el.period}</p>
      <p><b>Category:</b> ${getCategory(el.number)[1]}</p>
    `; details.style.display="block";
  }
  
 // ---------- Search ----------
document.getElementById("search").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    const allEls = document.querySelectorAll(".element");
    allEls.forEach(el => el.classList.remove("highlight"));
  
    if (!q) {
      hidePopup();
      details.style.display = "none";
      return;
    }
  
    let found = null;
  
    // 1. Exact number
    found = elements.find(el => el.number.toString() === q);
  
    // 2. Exact symbol
    if (!found) {
      found = elements.find(el => el.symbol.toLowerCase() === q);
    }
  
    // 3. Exact name
    if (!found) {
      found = elements.find(el => el.name.toLowerCase() === q);
    }
  
    // 4. Partial name (fallback)
    if (!found) {
      found = elements.find(el => el.name.toLowerCase().includes(q));
    }
  
    if (found) {
      const idx = [...allEls].find(d => d.textContent === found.symbol);
      if (idx) {
        idx.classList.add("highlight");
        renderDetails(found);
        hidePopup();
      }
    } else {
      hidePopup();
      details.style.display = "none";
    }
  });
  