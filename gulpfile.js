"use strict";

const {src, dest} = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const del = require("del");
const notify = require("gulp-notify");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const browserSync = require("browser-sync").create();
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');


/* Paths */
const appPath = 'app/';
const distPath = 'dist/';

const path = {
	build: {
		html:   distPath,
		js:     distPath + "js/",
		css:    distPath + "css/",
		images: distPath + "images/",
		fonts:  distPath + "fonts/"
	},
	src: {
		html:   appPath + "*.html",
		js:     appPath + "js/**/*.js",
		css:    appPath + "scss/*.scss",
		images: appPath + "images/**/*.{jpg,png,gif,ico,webp,webmanifest,xml,json, svg}",
		fonts:  appPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
	},
	watch: {
		html:   appPath + "*.html",
		js:     appPath + "js/**/*.js",
		css:    appPath + "scss/**/*.scss",
		images: appPath + "images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json, svg}",
		fonts:  appPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
	},
	clean: "./" + distPath
}


/* Tasks */

function serve() {
	browserSync.init({
		server: {
			baseDir: "./" + distPath
		}
	});
}

function html(cb) {
	return src(path.src.html, { base: appPath })
		.pipe(plumber())
		.pipe(dest(path.build.html))
		.pipe(browserSync.reload({ stream: true }));

	cb();
}

function css(cb) {
	return src(path.src.css, {base: appPath + "scss/"})
		.pipe(plumber({
			errorHandler : function(err) {
				notify.onError({
					title:    "SCSS Error",
					message:  "Error: <%= error.message %>"
				})(err);
				this.emit('end');
			}
		}))
		.pipe(sass({
			includePaths: './node_modules/'
		}))
		.pipe(autoprefixer({
			cascade: true
		}))
		.pipe(cssbeautify())
		.pipe(dest(path.build.css))
		.pipe(cssnano({
			zindex: false,
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(removeComments())
		.pipe(rename({
			suffix: ".min",
			extname: ".css"
		}))
		.pipe(dest(path.build.css))
		.pipe(browserSync.reload({stream: true}));

	cb();
}

function cssWatch(cb) {
	return src(path.src.css, {base: appPath + "scss/"})
		.pipe(plumber({
			errorHandler : function(err) {
				notify.onError({
					title:    "SCSS Error",
					message:  "Error: <%= error.message %>"
				})(err);
				this.emit('end');
			}
		}))
		.pipe(sass({
			includePaths: './node_modules/'
		}))
		.pipe (sass({outputStyle:'compressed'}))
		.pipe(rename({
			suffix: ".min",
			extname: ".css"
		}))
		.pipe(dest(path.build.css))
		.pipe(browserSync.reload({stream: true}));

	cb();
}

function js(cb) {
	return src(path.src.js, {base: appPath + 'js/'})
		.pipe(plumber({
			errorHandler : function(err) {
				notify.onError({
					title:    "JS Error",
					message:  "Error: <%= error.message %>"
				})(err);
				this.emit('end');
			}
		}))
		.pipe(dest(path.build.js))
		.pipe(browserSync.reload({stream: true}));

	cb();
}

function jsWatch(cb) {
	return src(path.src.js, {base: appPath + 'js/'})
		.pipe(plumber({
			errorHandler : function(err) {
				notify.onError({
					title:    "JS Error",
					message:  "Error: <%= error.message %>"
				})(err);
				this.emit('end');
			}
		}))
		.pipe(webpackStream({
			mode: "development",
			output: {
				filename: 'app.js',
			}
		}))
		.pipe(dest(path.build.js))
		.pipe(browserSync.reload({stream: true}));

	cb();
}

function images(cb) {
	return src(path.src.images)
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 80, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
		]))
		.pipe(dest(path.build.images))
		.pipe(browserSync.reload({stream: true}));

	cb();
}

function fonts(cb) {
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts))
		.pipe(browserSync.reload({ stream: true }))
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts))
		.pipe(browserSync.reload({stream: true}));

	cb();
}


function clean(cb) {
	return del(path.clean);

	cb();
}

function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], cssWatch);
	gulp.watch([path.watch.js], jsWatch);
	gulp.watch([path.watch.images], images);
	gulp.watch([path.watch.fonts], fonts);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles, serve);



/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
