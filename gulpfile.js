const gulp = require('gulp');
const sass = require('gulp-sass');
const stripCssComments = require('gulp-strip-css-comments')
const del = require('del')

gulp.task('clean:pc', function (cb) {
  return del(['./static/assets/pc'], cb)
})
gulp.task('clean:mobile', function (cb) {
  return del(['./static/assets/mobile'], cb)
})

gulp.task('compiler-pc', ['clean:pc'], function () {
  gulp.src('./src/style/pc/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(stripCssComments())
    .pipe(gulp.dest('./static/assets/pc'))
})

gulp.task('compiler-mobile', ['clean:mobile'], function () {
  gulp.src('./src/style/mobile/themes/common.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(stripCssComments())
    .pipe(gulp.dest('./static/assets/mobile'))
})
gulp.task('build', ['compiler-pc', 'compiler-mobile'])
