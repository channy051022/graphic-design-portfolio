const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  try {
    const imagePath = path.join(__dirname, 'public/images/asset/logo.png');
    const tempPath = path.join(__dirname, 'temp-logo.png');
    
    // Read the image
    const image = await Jimp.read(imagePath);
    
    // Create a new white image of the same size
    const newImage = new Jimp(image.getWidth(), image.getHeight(), 0xFFFFFFFF);
    
    // For every pixel, if it has alpha, make it black in the new image
    image.scan(0, 0, image.getWidth(), image.getHeight(), function(x, y, idx) {
      const alpha = this.bitmap.data[idx + 3];
      if (alpha > 50) { // If somewhat opaque
        newImage.setPixelColor(0x000000FF, x, y); // Black
      }
    });
    
    await newImage.writeAsync(tempPath);
    
    // Now trace the new image
    const params = {
      background: 'transparent',
      color: 'white',
      threshold: 120,
    };
    
    potrace.trace(tempPath, params, function(err, svg) {
      if (err) throw err;
      fs.writeFileSync('C:/Users/channy/.gemini/antigravity-ide/brain/d40ebd56-5140-4924-8a93-dc1fc293aa98/scratch/logo.svg', svg);
      console.log("Successfully traced logo to SVG with Jimp.");
    });
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

processLogo();
