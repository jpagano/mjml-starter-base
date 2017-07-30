'use strict';

var path = require('path');
var yaml = require('js-yaml');
var browser = require('browser-sync');
var rimraf = require('rimraf');
var fs = require('fs');
var gulp = require('gulp');
var mjml = require('gulp-mjml');
var nunjucks = require('gulp-nunjucks-render');
var data = require('gulp-data');

var PATHS = {
  src: './src/{layouts,partials,templates}/**/*.mjml',
  data: './src/data/data.yml',
  layouts: './src/layouts/',
  partials: './src/partials/',
  templates: './src/templates/**/*.mjml',
  output: './dist/'
};

function load_data() {
  var yml = fs.readFileSync(PATHS.data, 'utf8');
  return yaml.load(yml);
}

gulp.task('build',
  gulp.series(clean, templates));

gulp.task('default',
  gulp.series('build', server, watch));

function clean(done) {
  rimraf(PATHS.output, done);
}

function templates() {
  return gulp.src(PATHS.templates)
    .pipe(data(load_data))
    .pipe(nunjucks({
      path: [
        PATHS.layouts,
        PATHS.partials
      ],
      envOptions: {
        noCache: true
      }
    }))
    .pipe(mjml())
    .pipe(gulp.dest(PATHS.output));
}

function server(done) {
  browser.init({
    server: PATHS.output,
    port: '8000'
  });
  done();
}

function watch() {
  gulp.watch(PATHS.data).on('all', gulp.series(templates, browser.reload));
  gulp.watch(PATHS.src).on('all', gulp.series(templates, browser.reload));
}