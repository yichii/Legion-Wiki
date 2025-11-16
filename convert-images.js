import sharp from "sharp";
import fs from "fs";
import path from "path";

// Path to your PNG folder
const inputDir = "./public/images/units"; // <-- change if your PNGs are somewhere else

// Read all files in directory
const files = fs.readdirSync(inputDir);

async function convert() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);

    // Only convert PNG files
    if (ext !== ".png") continue;

    const inputPath = path.join(inputDir, file);

    console.log(`Converting ${file}...`);

    // Output paths
    const webpPath = path.join(inputDir, `${name}.webp`);
    const avifPath = path.join(inputDir, `${name}.avif`);

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(webpPath);

    // Convert to AVIF
    await sharp(inputPath)
      .avif({ quality: 60 })
      .toFile(avifPath);

    console.log(`✔ Created ${name}.webp and ${name}.avif`);
  }

  console.log("All done!");
}

convert();
