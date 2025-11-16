import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/units";
const outputDir = "public/images/units/compressed/"; // overwrite

const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".avif"));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .resize(256, 256, { fit: "inside" }) // Thumbnail size
    .avif({ quality: 45 })               // Good balanced compression
    .toFile(outputPath)
    .then(() => console.log(`Compressed: ${file}`))
    .catch(err => console.error(`Error: ${file}`, err));
}
