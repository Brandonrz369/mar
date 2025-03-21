const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

// Create the public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download an image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve(filePath);
      });
      
      file.on('error', (err) => {
        fs.unlinkSync(filePath);
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlinkSync(filePath);
      reject(err);
    });
  });
};

// Function to extract images from an HTML file
const extractImagesFromHTML = (htmlPath) => {
  try {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const $ = cheerio.load(html);
    const images = [];
    
    $('img').each((i, element) => {
      const src = $(element).attr('src');
      if (src && !src.startsWith('data:') && !src.includes('gravatar')) {
        images.push(src);
      }
    });
    
    return images;
  } catch (error) {
    console.error(`Error extracting images from ${htmlPath}:`, error);
    return [];
  }
};

// Main function to process HTML files
const processHTMLFiles = async () => {
  try {
    // Find all HTML files in the httrack directory
    const files = [];
    // This should be adjusted based on where httrack stored the files
    const baseDir = path.join(__dirname, '../marinashipyard.com');
    
    if (fs.existsSync(baseDir)) {
      const findHtmlFiles = (dir) => {
        fs.readdirSync(dir).forEach(file => {
          const filePath = path.join(dir, file);
          if (fs.statSync(filePath).isDirectory()) {
            findHtmlFiles(filePath);
          } else if (filePath.endsWith('.html')) {
            files.push(filePath);
          }
        });
      };
      
      findHtmlFiles(baseDir);
      
      // Extract and download images
      const imageUrls = new Set();
      for (const file of files) {
        const images = extractImagesFromHTML(file);
        images.forEach(img => imageUrls.add(img));
      }
      
      console.log(`Found ${imageUrls.size} unique images`);
      
      // Download each image
      let counter = 1;
      for (const url of imageUrls) {
        try {
          const urlObj = new URL(url);
          const pathParts = urlObj.pathname.split('/');
          const filename = pathParts[pathParts.length - 1];
          
          // Use a numbered filename if the original can't be determined
          const outputFilename = filename || `image-${counter}.jpg`;
          
          await downloadImage(url, outputFilename);
          counter++;
        } catch (err) {
          console.error(`Error processing image URL ${url}:`, err);
        }
      }
      
      console.log('Image download complete!');
    } else {
      console.error('HTTrack directory not found. Run HTTrack first.');
    }
  } catch (error) {
    console.error('Error processing HTML files:', error);
  }
};

// Run the main function
processHTMLFiles();