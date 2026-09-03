const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const params = {
  background: 'transparent',
  color: 'white',
  threshold: 120,
};

potrace.trace(path.join(__dirname, 'public/images/asset/logo.png'), params, function(err, svg) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFileSync('C:/Users/channy/.gemini/antigravity-ide/brain/d40ebd56-5140-4924-8a93-dc1fc293aa98/scratch/logo.svg', svg);
  console.log("Successfully traced logo to SVG.");
});
