var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
const image = require('gulp-image');
var ghPages = require('gulp-gh-pages');


gulp.task('imageResize', function () {
  gulp.src('img/*.png')
    .pipe(imageResize({
      width : 380,
      height : 206,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('images', function(cb) {
   gulp.src(['dist/*.png']).pipe(imageop({
       optimizationLevel: 5,
       progressive: true,
       interlaced: true
   })).pipe(gulp.dest('dist/')).on('end', cb).on('error', cb);
});

gulp.task('image', function () {
  gulp.src('dist/**/*')
    .pipe(image())
    .pipe(gulp.dest('img'));
});

gulp.task('deploy', function() {
  return gulp.src('./**/*')
    .pipe(ghPages());
});

gulp.task('default', ['imageResize', 'images']);