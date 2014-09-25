var gulp = require("gulp"),
    sass = require("gulp-sass"),
    minifycss = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    paths = {
      styles: "scss/*.scss",
      scripts: [
        "./js/app.js",
        "./js/bindr/services/*.js",
        "./js/bindr/directives/*.js",
        "./js/bindr/partials/*.js",
        "./js/bindr/controllers/*.js"
      ]
    };

gulp.task("styles", function() {
  return gulp.src(paths.styles)
    .pipe(sass({style: "expanded"}))
    .pipe(gulp.dest("css"))
    .pipe(rename({suffix: ".min"}))
    .pipe(minifycss())
    .pipe(gulp.dest("css"));
});

gulp.task("scripts", function() {
  return gulp.src(paths.scripts)
    .pipe(uglify({mangle: false}))
    .pipe(concat("bindr.min.js"))
    .pipe(gulp.dest("js"))
});

gulp.task("watch", function() {
  gulp.watch(paths.styles, ["styles"]);
  gulp.watch(paths.scripts, ["scripts"]);
});

gulp.task('default', ["styles", "scripts"], function() {
});