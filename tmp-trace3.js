const sharp = require('sharp');
const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  try {
    const imagePath = path.join(__dirname, 'public/images/asset/logo.png');
    const tempPath = path.join(__dirname, 'temp-logo-sharp.png');
    
    // Extract alpha channel (transparency becomes white/black)
    // We want the opaque parts to be black, and transparent to be white for potrace
    await sharp(imagePath)
      .extractChannel('alpha')
      .negate() // Invert so opaque is black, transparent is white
      .toFile(tempPath);
    
    // Now trace the new image
    const params = {
      background: 'transparent',
      color: 'white',
      threshold: 128,
    };
    
    potrace.trace(tempPath, params, function(err, svg) {
      if (err) throw err;
      fs.writeFileSync('C:/Users/channy/.gemini/antigravity-ide/brain/d40ebd56-5140-4924-8a93-dc1fc293aa98/scratch/logo.svg', svg);
      console.log("Successfully traced logo to SVG with Sharp.");
    });
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

processLogo();
