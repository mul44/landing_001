const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug')



/* -----Static server----- */
gulp.task('server', function() {
    browserSync.init({
        server: {
            port:9000,
            baseDir: "buid"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);
});




/* -----Pug compile----- */
gulp.task('template:compile', function buildHTML(){
  return gulp.src('source/template/index.pug')
    .pipe(pug({
        pretty: true// Your options in here.
      }))
    
});