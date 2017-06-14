var // modules
	gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	postcss      = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	mqpacker     = require('css-mqpacker'),
	cssnano      = require('cssnano'),
	rename       = require('gulp-rename'),
	babel        = require('gulp-babel'),
	uglify       = require('gulp-uglify'),
	stripdebug   = require('gulp-strip-debug'),
	newer        = require('gulp-newer'),
	pump         = require('pump'),
	browserSync  = require('browser-sync').create(),
	// production?
	folder = {
		src:'src/'
	},
	production = false;

gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: "",
			index: "index.html"
		}
	})
})

gulp.task('sass', () => {
	var postCssOpts = [
		autoprefixer({
			browsers: ['last 5 versions', '> 5%']
		}),
		mqpacker,
		cssnano
	];

	return gulp.src(folder.src + 'sass/**/*.sass')
				.pipe(sass({
					outputStyle: 'nested',
					precision: 3,
					errLogToConsole: true
				}))
				.pipe(postcss(postCssOpts))
				.pipe(rename({
					suffix: ".min"
				}))
				.pipe(newer({
					dest: 'public/css/',
					ext: '.css'
				}))
				.pipe(gulp.dest('public/css/'))
				.pipe(browserSync.stream())
});

gulp.task('js', function () {
	return gulp.src(folder.src + 'js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('public/js/'));
});

gulp.task('serve', ['sass', 'js', 'browserSync'], () => {
	gulp.watch(folder.src + 'sass/**/*.sass', ['sass']);
	gulp.watch(folder.src + 'js/**/*.js', ['js']).on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
})

gulp.task('default', ['serve']);
