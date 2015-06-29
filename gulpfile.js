var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var gulp = require('gulp');
var concat = require('gulp-concat');
 

gulp.task('copy', function() {
  
  gulp.src('./node_modules/react/dist/react-with-addons.js').pipe(gulp.dest('./static/js/libs'));
  gulp.src('./node_modules/underscore/underscore.js').pipe(gulp.dest('./static/js/libs'));
  gulp.src('./node_modules/backbone/backbone.js').pipe(gulp.dest('./static/js/libs'));
  gulp.src('./node_modules/jquery/dist/jquery.js').pipe(gulp.dest('./static/js/libs'));
  gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}').pipe(gulp.dest('./static/css/fonts'));
});

gulp.task('sass', function () {
  gulp.src('./static_assets/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});
 
gulp.task('scripts', function() {
  gulp.src('./static_assets/js/**/*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./static/js'));

  gulp.src('./bower_components/bootstrap/dist/css/bootstrap.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./static/css'));

});

gulp.task('watch', function() {
    // gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('./static_assets/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['copy', 'sass', 'scripts', 'watch']);


  // gulp.src('./bower_components/bootstrap/dist/js/bootstrap.js')
  //     .pipe(gulp.dest('./static/js'));

