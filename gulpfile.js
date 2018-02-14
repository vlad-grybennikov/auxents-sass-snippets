const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const clean = require('gulp-clean');

gulp.task("clean", () => {
    gulp.src("./example/main.css")
        .pipe(clean({force: true}))
})
gulp.task("sass", () => {
    gulp.src("./example/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./example/"))
        .pipe(reload({
            stream: true
        }));
});
gulp.task("default", ["clean", "sass"], () => {
    browserSync.init({
        port: 5050,
        server: "./example"
    });
    gulp.watch(["./**/*.scss"], ["clean", "sass"])
})