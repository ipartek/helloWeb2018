'use strict';
/* Autopmatizar tareas mediante GULP */

/*
* Dependencias o imports
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel = require('gulp-babel');


/*
* Tareas
*/

gulp.task('concatenar', function() {
  return gulp.src('./src/html/*.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass-prod', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});


gulp.task('es6toes5', function () {
   return gulp.src('./src/js/main.js')
        .pipe(babel({presets: ['env']}))
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('move', function(){
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'));
}
);
//scr origen
//pipe destino
/*definir tarea por defecto y escuchador */

//Default task
gulp.task('default',function() {

    gulp.watch('src/**/*.*',['concatenar','sass','move']);

});




