const { gulp, task, series, src, dest } = require("gulp");
// const gulp = require("gulp");
const imageResize = require("gulp-image-resize");
const image = require("gulp-image");
// var ghPages = require("gulp-gh-pages");

function resize() {
  return src("img/*.png")
    .pipe(imageResize())
    .pipe(
      imageResize({
        width: 239,
        height: 180,
        crop: true,
        upscale: false,
      })
    )
    .pipe(dest("dist/"));
}

function optimize() {
  return src(["img/*.png"])
    .pipe(
      image({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
      })
    )
    .pipe(dest("dist/"));
}

function deploy() {
  return gulp
    .src("./**/*")
    .pipe(deploy())
    .pipe(ghPages());
}

exports.default = series(resize, optimize);
