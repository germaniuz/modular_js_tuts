var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');
// var inject = require('gulp-inject');

gulp.task('watch', ['js', 'sass', 'pug', 'copy_vendor_js'], function(){
  browserSync.init({
    server: "./public"
  });
  gulp.watch('source/scss/*.scss', ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
  gulp.watch('source/js/*.js', ['js']);
  gulp.watch('source/views/*.pug', ['pug']);
});

gulp.task('sass', function(){
  return gulp.src("source/scss/*.scss")
              // .pipe(sass())
              // .on('error', swallowError)
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest("public/css"))
              .pipe(browserSync.stream());
});

gulp.task('js', function(){
  return gulp.src("source/js/*.js")
              .pipe(uglify())
              .on('error', swallowError)
              .pipe(gulp.dest("public/js"))
              .pipe(browserSync.stream());
});

gulp.task('pug', function(){
  return gulp.src("source/views/*.pug")
              .pipe(pug({pretty: true}))
              .on('error', swallowError)
              .pipe(gulp.dest("public"))
              .pipe(browserSync.stream());
});

gulp.task('copy_vendor_js', function() {
  var vendor_scripts = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/mustache/mustache.min.js'
  ];

  return gulp.src(vendor_scripts)
              .pipe(gulp.dest('public/js'));
});


//  Function for not crash watching on syntax errors
function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}