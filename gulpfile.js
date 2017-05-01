var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');

gulp.task('watch', ['js', 'sass', 'pug'], function(){
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
              .pipe(sass())
              .pipe(gulp.dest("public/css"))
              .pipe(browserSync.stream());
});

gulp.task('js', function(){
  return gulp.src("source/js/*.js")
              .pipe(uglify())
              .pipe(gulp.dest("public/js"))
              .pipe(browserSync.stream());
});

gulp.task('pug', function(){
  return gulp.src("source/views/*.pug")
              .pipe(pug({pretty: true}))
              .pipe(gulp.dest("public"))
              .pipe(browserSync.stream());
})

