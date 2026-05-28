import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Directorio donde colocará la clienta sus fotos originales
const inputDir = path.join(process.cwd(), 'src/assets/raw_photos');
// Directorio donde se guardarán las fotos optimizadas para la web
const outputDir = path.join(process.cwd(), 'src/assets/optimized');

// Asegurar que existan los directorios principales
if (!fs.existsSync(inputDir)) {
  fs.mkdirSync(inputDir, { recursive: true });
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Configuración de optimización ESTRICTA PARA WEB
// 1400px es el estándar profesional web: lo bastante grande para verse nítido en monitores grandes, pero sin exceso de pixeles.
const MAX_WIDTH = 1400; 
// 85% mantiene muchísima más calidad visual a expensas de un poco de peso extra en formato WebP.
const QUALITY = 85;

// Helper: Lee todos los archivos recursivamente dentro de raw_photos, 
// incluso si están dentro de las 3 carpetas que te pasó la clienta.
function getAllFilesRecursive(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFilesRecursive(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function processImages() {
  const allFiles = getAllFilesRecursive(inputDir);
  const imageFiles = allFiles.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg') || 
    file.toLowerCase().endsWith('.png')
  );

  if (imageFiles.length === 0) {
    console.log(`\n📸 No encontré fotos en: ${inputDir} ni en ninguna de sus carpetas internas.`);
    console.log(`☝️  Por favor, mete las carpetas de tu clienta ahí y vuelve a correr el script.\n`);
    return;
  }

  console.log(`\n⏳ Empezando a optimizar ${imageFiles.length} fotos (buscándolas en todas las carpetas)...\n`);

  for (const inputPath of imageFiles) {
    // Obtenemos solo el nombre del archivo (sin importar en qué carpeta venía)
    const baseName = path.parse(inputPath).name;
    // Si la clienta tiene nombres repetidos (ej. "foto1.jpg" en dos carpetas distintas), añadimos un timestamp breve
    const hash = Math.random().toString(36).substring(2, 6);
    const outputFileName = `${baseName}_${hash}.webp`;
    const outputPath = path.join(outputDir, outputFileName);

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024 / 1024).toFixed(2); // MB

      await sharp(inputPath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024 / 1024).toFixed(2); // MB

      console.log(`✅ Transformada: ${path.basename(inputPath)}`);
      console.log(`   Peso: ${originalSize}MB ➡️  ${newSize}MB (Descenso de ~${Math.round(100 - (newStats.size / stats.size * 100))}%)`);
    } catch (error) {
      console.error(`❌ Error procesando ${path.basename(inputPath)}:`, error);
    }
  }

  console.log(`\n🎉 ¡Todas las fotos listas!`);
  console.log(`📂 Las tienes todas juntas y optimizadas en: ${outputDir}`);
  console.log(`💡 Ahora puedes pasárselas a tu clienta por Drive/WeTransfer para que ella arme los proyectos.\n`);
}

processImages();
