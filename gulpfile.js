var gulp = require("gulp")
var browserSync = require("browser-sync")
var reload = browserSync.reload
var babel = require("gulp-babel")
var browserify = require("gulp-browserify")
var stylus = require("gulp-stylus")

gulp.task('serve', ['watch'],function() {
  browserSync({
	    server: {
			      baseDir: 'app'
						    }
								  });
});



gulp.task("watch",["browser", "css"], function () {
	gulp.watch(["scripts/**/*.js"], {cwd: 'app'}, ['browser', reload])
  gulp.watch(['style/*.styl'], {cwd: 'app'}, ['css',reload]);
 gulp.watch(['*.html'], {cwd: 'app'},  reload);
})

gulp.task("browser", function () {
     return gulp.src("./app/scripts/index.js")
	       .pipe(browserify({
				   isertGlobals: true
				 }))
				 .pipe(gulp.dest("./app/dist"))
})

gulp.task("css", function () {
  return gulp.src('./app/style/main.styl')
	       .pipe(stylus())
				 .pipe(gulp.dest('./app/dist'))
})
