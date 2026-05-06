const fs = require('fs'); const content = fs.readFileSync('src/data/initialSales.js', 'utf8'); console.log(content.slice(0, 2000));
