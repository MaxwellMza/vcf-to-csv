# 📇 VCF to CSV Converter

Este es un script en Node.js que convierte un archivo `.vcf` (vCard) con contactos a un archivo `.csv` compatible con Excel, extrayendo solo el nombre y el número de teléfono de cada contacto.

## 🛠 Requisitos

- [Node.js](https://nodejs.org/) instalado en tu computadora.

## 📦 Instalación

1. Cloná este repositorio o descargá los archivos:

bash
```git clone https://github.com/tu-usuario/vcf-to-csv.git```

Colocá tu archivo .vcf en la misma carpeta del script. Asegurate de renombrarlo como:

vcards_20250416_164738.vcf

O cambiá el nombre del archivo en el código según corresponda.

🚀 Cómo usar
Desde la terminal, ejecutá el script con:

```node index.js```

Este comando generará un archivo llamado contactos.csv con la siguiente estructura:

Nombre,Teléfono  
Juan Pérez,+5492611234567  
María Gómez,+5492617654321  
...

✅ El script filtra automáticamente los números de teléfono duplicados.

🧠 ¿Qué hace exactamente?
Lee un archivo .vcf

Extrae los campos FN (nombre completo) y TEL (número de teléfono)

Elimina duplicados basándose en el número de teléfono

Exporta el resultado a contactos.csv

📝 Personalización
Podés modificar el nombre del archivo .vcf o agregar más campos si lo necesitás (como email, organización, etc.).

