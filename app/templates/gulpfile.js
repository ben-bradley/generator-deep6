
var gulp = require('gulp'),
  path = require('path'),
  debug = require('debug')('gulpfile'),
  babel = require('gulp-babel'),
  nodemon = require('gulp-nodemon'),
  run = require('gulp-run');

var sources = 'src/**/*.js';

gulp.task('build', function () {
  return build(sources)
})

gulp.task('watch', ['build'], function () {
  return gulp.watch(sources, function (ev) {
    return build(ev.path)
  })
})

gulp.task('nodemon', monitor)

function monitor() {
  return nodemon({
    script: 'index.js',
    env: process.env,
    args: process.argv.slice(2),
    watch: ['dist/*.js']
  })
}

function build(file) {
  var dir = path.dirname(file);
  dir = dir.substr(dir.indexOf('src/') + 4);
  if (dir === '**')
    dir = '';
  debug('building: ', file, dir);
  return gulp.src(file)
    .pipe(babel())
    .pipe(gulp.dest('dist/' + dir))
}

gulp.task('test', test)

function test() {
  debug('testing!');
  return run('NODE_ENV=test mocha -R spec').exec();
}

gulp.task('ci', ['test'], function () {
  gulp.watch('dist/**/*.js', ['test'])
})

gulp.task('default', ['watch'], monitor)
