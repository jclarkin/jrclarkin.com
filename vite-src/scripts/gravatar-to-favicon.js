#!/usr/bin/env node

import fs from 'fs';
import https from 'https';
import sharp from 'sharp';
import path from 'path';

const GRAVATAR_URL = 'https://www.gravatar.com/avatar/3a34d2b629afdd07f0a84ad333688d8d?d=identicon&s=64';
const OUTPUT_DIR = path.join(process.cwd(), 'public');
const TMP_PNG = path.join(OUTPUT_DIR, 'gravatar.png');
const FAVICON_PNG = path.join(OUTPUT_DIR, 'favicon.png');
const FAVICON_ICO = path.join(OUTPUT_DIR, 'favicon.ico');

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  try {
    console.log('Downloading Gravatar image...');
    await downloadImage(GRAVATAR_URL, TMP_PNG);
    console.log('Converting to favicon.png (32x32)...');
    await sharp(TMP_PNG).resize(32, 32).toFile(FAVICON_PNG);
    console.log('Converting to favicon.ico (32x32)...');
    await sharp(TMP_PNG).resize(32, 32).toFile(FAVICON_ICO);
    fs.unlinkSync(TMP_PNG); // Clean up temp file
    console.log('Favicon generation complete!');
  } catch (err) {
    console.error('Error generating favicon:', err);
    process.exit(1);
  }
}

main(); 