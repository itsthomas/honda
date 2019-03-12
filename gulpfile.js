// require gulp
var gulp = require('gulp');

// require other packages
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var series = require('stream-series'); // Helps to concat js files in desired order

// Style task
gulp.task('sass', function() {
	return gulp.src('./src/sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({		// Compiles Sass files to css
      errLogToConsole: true
      }))
	.pipe(concat('style.min.css'))
	.pipe(cssmin())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

// Script task
gulp.task('script', function() {
	// return gulp.src('./src/js/**/*.js')
	return series(  														// concats js files in desired order
			// gulp.src('src/js/vendor/jquery.js'), // First jQuery.js, which goes to the top of the minifyed js file.
			// gulp.src('./src/js/vendor/**/*.js'), // Second every js files inside the src/js/vendor folder
			gulp.src('./src/js/**/*.js')						// Lastly all js files inside the src/js folder
		)
	.pipe(concat('bundle.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('./js'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

// BrowserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// watch task
gulp.task('watch', ['sass', 'script', 'browserSync'], function() {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', ['script']);
	gulp.watch('./index.html', browserSync.reload);
});
