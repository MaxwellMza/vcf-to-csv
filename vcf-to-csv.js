const fs = require("fs");
const path = require("path");

const inputPath = "./vcards_20250416_164738.vcf"; // Coloca aqui el path de tu archivo vcf
const outputPath = "./contactos.csv";

const vcfData = fs.readFileSync(inputPath, "utf8");
const contacts = [];
const seen = new Set();

const entries = vcfData.split("BEGIN:VCARD").slice(1);

entries.forEach((entry) => {
  const nameMatch = entry.match(/FN:(.+)/);
  const telMatch = entry.match(/TEL[^:]*:(.+)/);

  if (nameMatch && telMatch) {
    const name = nameMatch[1].trim();
    const phone = telMatch[1].trim();

    const uniqueKey = `${name}-${phone}`;
    const isDuplicate = seen.has(uniqueKey);

    if (!isDuplicate) {
      contacts.push({ name, phone });
      seen.add(uniqueKey);
    } else {
      console.log(`Duplicado detectado: ${name} - ${phone}`);
    }
  }
});

const csvData = ["Nombre,Teléfono"]
  .concat(contacts.map((c) => `"${c.name}","${c.phone}"`))
  .join("\n");

fs.writeFileSync(outputPath, csvData);
console.log(`✔️ Archivo exportado como ${outputPath}`);
