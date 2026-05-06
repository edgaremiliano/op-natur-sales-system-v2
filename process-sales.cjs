const fs = require('fs');

// March raw sales data
const marchSales = [
  { id: 435, fecha: "2026-03-09", producto: "PERLAS PROPOLEO", metodo: "CASH" },
  { id: 624, fecha: "2026-03-09", producto: "LECITINA DE SOYA", metodo: "CLIP" },
  { id: 630, fecha: "2026-03-09", producto: "POMADA WEEDNOL", metodo: "CLIP" },
  { id: 430, fecha: "2026-03-09", producto: "POMADA TIGRE BLANCA O ROJA 19.5G", metodo: "CASH" },
  { id: 186, fecha: "2026-03-09", producto: "AJOLOTIUS JARABE SIN AZUCAR 250 ML", metodo: "CASH" },
  { id: 999, fecha: "2026-03-12", producto: "MENOPAUSIL", metodo: "CASH" },
  { id: 184, fecha: "2026-03-16", producto: "AJOLOTIUS JARABE ELDEBERRY 250 ML", metodo: "CASH" },
  { id: 494, fecha: "2026-03-20", producto: "ASHWAGANDHA+CITRATO DE MAGNESIO 60 CAPS", metodo: "CASH" },
  { id: 446, fecha: "2026-03-20", producto: "TONICOL 600 ML", metodo: "CLIP" },
  { id: 101, fecha: "2026-03-20", producto: "CREMA FACIAL VITAL E", metodo: "CASH" },
  { id: 435, fecha: "2026-03-24", producto: "PERLAS PROPOLEO", metodo: "CASH" },
  { id: 435, fecha: "2026-03-24", producto: "PERLAS PROPOLEO", metodo: "CASH" },
  { id: 110, fecha: "2026-03-27", producto: "RIMEL 4 EN 1 PROFESIONAL", metodo: "CASH" },
  { id: 446, fecha: "2026-03-27", producto: "TONICOL 600 ML", metodo: "CASH" },
  { id: 178, fecha: "2026-03-27", producto: "COLAGENO C/ELASTINA 30 CAP", metodo: "CASH" },
  { id: 435, fecha: "2026-03-27", producto: "PERLAS PROPOLEO", metodo: "CASH" },
  { id: 998, fecha: "2026-03-31", producto: "EUCAMIEL SPRAY", metodo: "CASH" },
  { id: 592, fecha: "2026-03-31", producto: "ATRIBION ROJO", metodo: "CASH" },
  { id: 624, fecha: "2026-03-31", producto: "LECITINA DE SOYA", metodo: "CLIP" },
  { id: 500, fecha: "2026-03-31", producto: "ACEITE DE RICINO", metodo: "CASH" },
];

async function run() {
  const imp1 = fs.readFileSync('src/data/importedProducts1.js', 'utf-8');
  const imp3 = fs.readFileSync('src/data/importedProducts3.js', 'utf-8');
  const imp4 = fs.readFileSync('src/data/importedProducts4.js', 'utf-8');
  
  let allProductsStr = imp1 + '\n' + imp3 + '\n' + imp4;
  let matches = [...allProductsStr.matchAll(/\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",[^a-zA-Z]*category:\s*"([^"]+)",[^c]*cost:\s*([\d.]+),[^p]*price:\s*([\d.]+)[^}]*\}/g)];
  
  const productMap = {};
  for(let m of matches){
    productMap[m[1]] = {
      price: parseFloat(m[5]),
      cost: parseFloat(m[4])
    };
  }
  
  // Custom manual prices for the unresolved ones based on user input
  productMap['999'] = { price: 242, cost: 242 * 0.6 }; // menopausil approx
  productMap['101'] = { price: 125, cost: 125 * 0.6, name: 'CREMA FACIAL VITAL E' }; 
  productMap['178'] = { price: 86, cost: 86 * 0.6 }; 
  productMap['998'] = { price: 102, cost: 102 * 0.6 };
  productMap['592'] = { price: 156, cost: 156 * 0.6 };
  productMap['624'] = { price: 275, cost: 275 * 0.6 };
  productMap['500'] = { price: 39, cost: 39 * 0.6 };

  // Calculate comission etc
  let newSales = marchSales.map((s, index) => {
    let pInfo = productMap[s.id.toString()];
    let price = pInfo ? pInfo.price : 0;
    let cost = pInfo ? pInfo.cost : 0;
    
    let comm = s.metodo === 'CLIP' ? price * 0.046 * 1.16 : 0;
    let profit = price - cost - comm;
    
    return {
      id: \mar2024-\\,
      date: \\T12:00:00.000Z\,
      productName: s.producto,
      quantity: 1,
      method: s.metodo,
      commission: parseFloat(comm.toFixed(2)),
      saleTotal: price,
      cost: cost,
      investment: cost,
      profit: parseFloat(profit.toFixed(2))
    };
  });
  
  let formatted = newSales.map(x => \        { id: '\', date: '\', productName: '\', quantity: \, method: '\', commission: \, saleTotal: \, cost: \, investment: \, profit: \ },\).join('\n');
  
  console.log(formatted);
}
run();
