//Automatizar tareas mediante GULP
'use strict';
/*
 * Dependencias
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

/*
 * Tareas
 */

//Concatena los archivos html en uno solo
gulp.task('concatenar', function () {
    return gulp.src('./src/html/*.html')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./dist/'));
});

//Convierte sass a css
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});


////ES6 to ES5
//gulp.task('es6toes5', () =>
//    gulp.src('./src/js/perro.js')
//        .pipe(babel({
//            presets: ['env']
//        }))
//        .pipe(gulp.dest('./dist/js/'))
//);


//Move
gulp.task('move', function(){
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'));
});


//Actualiza a media que va guardando
gulp.task('default', function () {
    gulp.watch('src/**/*.*', ['concatenar', 'sass', 'move']);
});
