const fs = require('fs');
const ms = [
  { id: 435, fb: '2026-03-09', p: 'PERLAS PROPOLEO', m: 'CASH', pr: 23, c: 13.5 },
  { id: 624, fb: '2026-03-09', p: 'LECITINA DE SOYA', m: 'CLIP', pr: 275, c: 165 },
  { id: 630, fb: '2026-03-09', p: 'POMADA WEEDNOL', m: 'CLIP', pr: 42, c: 24.59 },
  { id: 430, fb: '2026-03-09', p: 'POMADA TIGRE BLANCA O ROJA 19.5G', m: 'CASH', pr: 85, c: 49.65 },
  { id: 186, fb: '2026-03-09', p: 'AJOLOTIUS JARABE SIN AZUCAR 250 ML', m: 'CASH', pr: 135, c: 78.98 },
  { id: 999, fb: '2026-03-12', p: 'MENOPAUSIL', m: 'CASH', pr: 242, c: 145.2 },
  { id: 184, fb: '2026-03-16', p: 'AJOLOTIUS JARABE ELDEBERRY 250 ML', m: 'CASH', pr: 135, c: 66.51 },
  { id: 494, fb: '2026-03-20', p: 'ASHWAGANDHA+CITRATO DE MAGNESIO 60 CAPS', m: 'CASH', pr: 175, c: 102.54 },
  { id: 446, fb: '2026-03-20', p: 'TONICOL 600 ML', m: 'CLIP', pr: 37, c: 17.21 },
  { id: 101, fb: '2026-03-20', p: 'CREMA FACIAL VITAL E', m: 'CASH', pr: 125, c: 75 },
  { id: 435, fb: '2026-03-24', p: 'PERLAS PROPOLEO', m: 'CASH', pr: 23, c: 13.5 },
  { id: 435, fb: '2026-03-24', p: 'PERLAS PROPOLEO', m: 'CASH', pr: 23, c: 13.5 },
  { id: 110, fb: '2026-03-27', p: 'RIMEL 4 EN 1 PROFESIONAL', m: 'CASH', pr: 48, c: 28.27 },
  { id: 446, fb: '2026-03-27', p: 'TONICOL 600 ML', m: 'CASH', pr: 37, c: 17.21 },
  { id: 178, fb: '2026-03-27', p: 'COLAGENO C/ELASTINA 30 CAP', m: 'CASH', pr: 86, c: 51.6 },
  { id: 435, fb: '2026-03-27', p: 'PERLAS PROPOLEO', m: 'CASH', pr: 23, c: 13.5 },
  { id: 998, fb: '2026-03-31', p: 'EUCAMIEL SPRAY', m: 'CASH', pr: 102, c: 61.2 },
  { id: 592, fb: '2026-03-31', p: 'ATRIBION ROJO', m: 'CASH', pr: 156, c: 93.6 },
  { id: 624, fb: '2026-03-31', p: 'LECITINA DE SOYA', m: 'CLIP', pr: 275, c: 165 },
  { id: 500, fb: '2026-03-31', p: 'ACEITE DE RICINO', m: 'CASH', pr: 39, c: 23.4 }
];
let str = '';
ms.forEach((s, idx) => {
  let comm = s.m === 'CLIP' ? (s.pr * 0.046 * 1.16) : 0;
  let prof = s.pr - s.c - comm;
  str += \        { id: 'mar2026-\', date: '\T12:00:00.000Z', productName: '\', quantity: 1, method: '\', commission: \, saleTotal: \, cost: \, investment: \, profit: \ },\n\;
});
let fileObj = fs.readFileSync('src/data/initialSales.js', 'utf8');
fileObj = fileObj.replace('        // Add more basic examples if you need specifically', str + '        // Add more basic examples if you need specifically');
fs.writeFileSync('src/data/initialSales.js', fileObj); 
console.log('done');

