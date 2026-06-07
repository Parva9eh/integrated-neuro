import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import ico from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "assets/icon.png");
const pngBuffer = readFileSync(source);
const meta = await sharp(pngBuffer).metadata();
const width = meta.width ?? 87;
const height = meta.height ?? 79;
const size = Math.max(width, height);
const offsetX = (size - width) / 2;
const offsetY = (size - height) / 2;
const base64 = pngBuffer.toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${size} ${size}" role="img" aria-label="Integrated Neuro">
  <image xlink:href="data:image/png;base64,${base64}" x="${offsetX}" y="${offsetY}" width="${width}" height="${height}" />
</svg>
`;

writeFileSync(join(root, "app/icon.svg"), svg);

const squarePng = await sharp(pngBuffer)
  .resize(48, 48, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((iconSize) =>
    sharp(squarePng).resize(iconSize, iconSize).png().toBuffer(),
  ),
);

const icoBuffer = await ico(pngBuffers);
writeFileSync(join(root, "app/favicon.ico"), icoBuffer);

console.log(`Generated app/icon.svg and app/favicon.ico from assets/icon.png (${width}x${height})`);