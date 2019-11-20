const fs = require("fs");
const path = require("path");
const npmPackage = require("./package.json");

module.exports = {
  // Theme name. Must match the name property in the package.json
  name: "b-ber-theme-starter",

  // Required entry point for the SCSS
  entry: path.join(__dirname, "application.scss"),

  // List of fonts included in the fonts directory
  fonts: (() =>
    fs
      .readdirSync(path.join(__dirname, "fonts"))
      .filter(file => /\.(otf|ttf|woff2?|eot)/i.test(path.extname(file))))(),

  // List of images included in the images directory
  images: (() =>
    fs
      .readdirSync(path.join(__dirname, "images"))
      .filter(file => /\.(jpe?g|png|gif)/i.test(path.extname(file))))(),

  // The data from the package.json should also be included here
  npmPackage
};
