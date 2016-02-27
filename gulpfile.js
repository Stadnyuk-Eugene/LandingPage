var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin');
	//pngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
var imageminOptipng = require('imagemin-optipng');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
  return gulp.src('css/*.css')
	.pipe(concatCss("all.css"))
	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	.pipe(minifyCSS({keepBreaks:true}))
	.pipe(gulp.dest('css'));
});

gulp.task('imagemin-jpg', () => {
    return gulp.src('pictures-before/*.jpg')
        .pipe(imageminJpegtran({progressive: true})())
        .pipe(gulp.dest('pictures'));
});

gulp.task('imagemin-png', function () {
    return gulp.src('pictures-before/*.png')
        .pipe(imageminOptipng({optimizationLevel: 3})())
        .pipe(gulp.dest('pictures'));
});

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('new-js'));
});
	