const fs = require("fs");
const { minify: uglify } = require("uglify-js");

// Function to minify a single file
function minifyFile(filePath) {
  const inputCode = fs.readFileSync(filePath, "utf8");
  const result = uglify(inputCode);
  return result.code;
}

// Function to minify all JavaScript files in a directory
function minifyDirectory(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    if (file.endsWith(".js")) {
      const filePath = `${dirPath}/${file}`;
      const minifiedCode = minifyFile(filePath);
      fs.writeFileSync(
        `${dirPath}/${file.replace(".js", ".min.js")}`,
        minifiedCode,
        "utf8"
      );
    }
  });
}

// Minify JavaScript files in the src directory
minifyDirectory("src");
