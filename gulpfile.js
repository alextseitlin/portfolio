const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const useref = require('gulp-useref');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
  //1.where is my scss
  return gulp.src('src/scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('./dist/assests/css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}

//compile scss into css
function jshtml() {

  return gulp.src('*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))

  // //1.where is my scss
  // return gulp.src('src/scss/**/*.scss') //gets all files ending with .scss in src/scss
  // //2. pass that file through sass compiler
  // .pipe(sass().on('error',sass.logError))
  // //3. where do I save the compiled css file
  // .pipe(gulp.dest('./library/css'))
  // //4. stream change to all browsers
  // .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "/index.html"
    }
  });
  gulp.watch('src/scss/**/*.scss', style);
  gulp.watch('./*.html', jshtml).on('change', browserSync.reload);
  gulp.watch('./js/**/*.js', jshtml).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
