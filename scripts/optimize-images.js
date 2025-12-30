const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  // Max dimensions for portfolio images
  maxWidth: 1600,
  maxHeight: 1600,

  // Quality settings
  jpegQuality: 85,
  webpQuality: 80,
  priorityImageQuality: 70, // Lower quality for priority images (faster load)

  // Directories
  inputDir: path.join(__dirname, '../public/portfolio'),

  // File extensions to process
  extensions: ['.jpg', '.jpeg', '.png'],

  // Convert to WebP (much better compression)
  convertToWebP: true,

  // Create backup
  createBackup: false, // Already have backup from first run
  backupDir: path.join(__dirname, '../public/portfolio-backup'),
};

// Ensure backup directory exists
if (CONFIG.createBackup && !fs.existsSync(CONFIG.backupDir)) {
  fs.mkdirSync(CONFIG.backupDir, { recursive: true });
}

// Get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Process a single image
async function optimizeImage(filePath, relativePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!CONFIG.extensions.includes(ext)) {
    return;
  }

  const sizeBefore = getFileSizeMB(filePath);

  try {
    // Backup original
    if (CONFIG.createBackup) {
      const backupPath = path.join(CONFIG.backupDir, relativePath);
      const backupDir = path.dirname(backupPath);
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      fs.copyFileSync(filePath, backupPath);
    }

    // Optimize image
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if needed
    let resizeOptions = {};
    if (metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight) {
      resizeOptions = {
        width: CONFIG.maxWidth,
        height: CONFIG.maxHeight,
        fit: 'inside',
        withoutEnlargement: true,
      };
    }

    // Convert to WebP or optimize existing format
    if (CONFIG.convertToWebP) {
      const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      // Use lower quality for priority images (first image in portfolio)
      const isPriorityImage = relativePath.includes('kitchen-0000');
      const quality = isPriorityImage ? CONFIG.priorityImageQuality : CONFIG.webpQuality;

      await image
        .resize(resizeOptions)
        .webp({ quality })
        .toFile(webpPath);

      const sizeAfter = getFileSizeMB(webpPath);
      const savings = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);

      console.log(`✅ ${relativePath} → WebP ${isPriorityImage ? '(priority)' : ''}`);
      console.log(`   ${sizeBefore}MB → ${sizeAfter}MB (saved ${savings}%) @ ${quality}% quality`);

      // Delete original after successful conversion
      fs.unlinkSync(filePath);
    } else {
      // Process based on format (keep original format)
      if (ext === '.png') {
        await image
          .resize(resizeOptions)
          .png({ quality: 85, compressionLevel: 9 })
          .toFile(filePath + '.tmp');
      } else {
        await image
          .resize(resizeOptions)
          .jpeg({ quality: CONFIG.jpegQuality, progressive: true })
          .toFile(filePath + '.tmp');
      }

      // Replace original with optimized
      fs.renameSync(filePath + '.tmp', filePath);

      const sizeAfter = getFileSizeMB(filePath);
      const savings = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);

      console.log(`✅ ${relativePath}`);
      console.log(`   ${sizeBefore}MB → ${sizeAfter}MB (saved ${savings}%)`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${relativePath}:`, error.message);
  }
}

// Recursively find and process images
async function processDirectory(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      await processDirectory(fullPath, baseDir);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath, relativePath);
    }
  }
}

// Main execution
async function main() {
  console.log('🖼️  Portfolio Image Optimizer\n');
  console.log(`📁 Input directory: ${CONFIG.inputDir}`);
  console.log(`💾 Backup directory: ${CONFIG.backupDir}`);
  console.log(`📏 Max dimensions: ${CONFIG.maxWidth}x${CONFIG.maxHeight}px`);
  console.log(`🎨 JPEG Quality: ${CONFIG.jpegQuality}%\n`);

  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`❌ Directory not found: ${CONFIG.inputDir}`);
    process.exit(1);
  }

  const startTime = Date.now();
  await processDirectory(CONFIG.inputDir);
  const endTime = Date.now();

  console.log(`\n✨ Optimization complete in ${((endTime - startTime) / 1000).toFixed(2)}s`);
  console.log(`📦 Backups saved to: ${CONFIG.backupDir}`);
}

main().catch(console.error);
