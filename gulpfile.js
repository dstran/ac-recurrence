var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulp = require('gulp');
var rename = require('gulp-rename');
var rm = require('gulp-rm');
var sass = require('gulp-sass');
var template = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');

gulp.task('build', ['clean', 'prepare-templates', 'prepare-js', 'prepare-styles']);

gulp.task('clean', function() {
  return gulp.src(['dist/**/*', '.tmp/**/*'], { read: false })
    .pipe(rm());
});

gulp.task('connect', function() {
  gulp.watch([
    './demo/**/*',
    './dist/**/*'
  ]).on('change', function(file) {
    gulp.src(file.path)
      .pipe(connect.reload());
  });

  gulp.watch('./src/**/*', ['build'])

  return connect.server({
    root: [__dirname],
    livereload: true
  });
});

gulp.task('prepare-js', ['prepare-templates'], function() {
  return gulp.src([
    './src/ac-recurrence.module.js',
    './src/ac-recurrence.constants.js',
    './.tmp/templates.js',
    './src/local-names.provider.js',
    './src/ac-grid.directive.js',
    './src/ac-grid.controller.js',
    './src/ac-recurrence.directive.js',
    './src/ac-recurrence.controller.js'
  ]).pipe(concat('ac-recurrence.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(rename('ac-recurrence.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('prepare-styles', ['clean'], function() {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('prepare-templates', ['clean'], function() {
  return gulp.src('./src/templates/**/*.html')
    .pipe(template('templates.js', { module: 'ac-recurrence' }))
    .pipe(gulp.dest('./.tmp/'));
});
