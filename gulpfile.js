var gulp = require('gulp'),
  runSequence = require('run-sequence');
	browserSync = require('browser-sync').create();
	pug = require('gulp-pug');
	sass = require('gulp-sass');
	path = require('path');
  autoprefixer = require('gulp-autoprefixer');
  imagemin = require('gulp-imagemin');
  concat = require('gulp-concat');
  uglify = require('gulp-uglify'); 
  rename = require('gulp-rename'); 
  del = require('del');

/* --------------------------------------------------------
   ----------------- Таски ---------------------------
------------------------------------------------------------ */



gulp.task('pug', function buildHTML() {
  	return gulp.src('app/pug/**/*.pug')
  	.pipe(pug())
    .pipe(gulp.dest("dist"))
});

gulp.task('sass', function () {
  	return gulp.src('app/sass/**/*.sass')
    .pipe(sass({
      	paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('css', function () {
  return gulp.src('app/css/**/*.css')
  
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('app/js/**/*.js') 
    //.pipe(concat('scripts.js')) 
    .pipe(gulp.dest('dist/js')); 
});
gulp.task('imgs', function() {
  return gulp.src('app/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
});

gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('build', gulp.series('clean', 'pug', 'sass', 'scripts', 'imgs', 'css', function(done) {
  // do more stuff
  done();
}));

gulp.task('watch', function() {
    gulp.watch('app/pug/*.pug', gulp.series ('pug'));
    gulp.watch('app/sass/*.sass', gulp.series ('sass'));
    gulp.watch('app/js/*.js', gulp.series ('scripts'));
    gulp.watch('app/img/*', gulp.series ('imgs'));
    gulp.watch('app/css/*', gulp.series ('css'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        files: ['dist/']
    });
});

gulp.task('default', gulp.parallel('build', 'watch', 'server', function(done) {
  // do more stuff
  done();
}));