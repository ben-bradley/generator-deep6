var gulp = require('gulp'),
  babel = require('gulp-babel'),
  nodemon = require('gulp-nodemon');

var sources = [
  'src/*.js'
]

gulp.task('build', function() {
  return build(sources)
})

gulp.task('watch', ['build'], function() {
  return gulp.watch(sources, function(ev) {
    return build(ev.path)
  })
})

gulp.task('nodemon', monitor)

function monitor() {
  return nodemon({
    script: 'index.js',
    env: process.env,
    args: process.argv.slice(2),
    watch: [ 'dist/*.js' ]
  })
}

function build(file) {
  return gulp.src(file)
    .pipe(babel())
    .pipe(gulp.dest('dist'))
}

gulp.task('default', ['watch'], monitor)
