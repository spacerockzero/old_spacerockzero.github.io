/* DEPS */
var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var uglify    = require('gulp-uglify');
var concat    = require('gulp-concat');
var watch     = require('gulp-watch');

/* CONFIGS */
var jsSrc = [
  'assets/js/index.js',
  'node_modules/prefetch/prefetch.js',
  'assets/js/app.js'
];

/* SASS config */
var sassConfig = {
  outputStyle: 'compressed'
};

/* MINIFY CSS CONFIG */
var cssConfig = {
  compatibility: '',
  // advanced: true,
  aggressiveMerging: true,
  debug: true
};

/* UGLIFYJS CONFIG */
var uglifyConfig = {

};

gulp.task('css', function(){
  return gulp.src(['assets/css/screen.css'])
    .pipe(sass(sassConfig).on('error', sass.logError))
    // .pipe(minifyCSS(cssConfig))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('assets/css'));
})

gulp.task('js', function(){
  return gulp.src(jsSrc)
    .pipe(concat('bundle.min.js'))
    .pipe(uglify(uglifyConfig))
    .pipe(gulp.dest('assets/js'));
})

gulp.task('watch', function() {
  gulp.watch(['assets/js/*.js','!assets/js/bundle.min.js'], ['js']);
  gulp.watch(['assets/css/*.css','!assets/css/styles.min.css'], ['css']);
})

gulp.task('dev', ['css', 'js', 'watch']);

gulp.task('default', ['css', 'js']);