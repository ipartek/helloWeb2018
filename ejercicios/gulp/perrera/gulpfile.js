"use strict";

/* Automatizar tareas mediante GULP */

/*
 * Dependencias o imports
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

/*
 * Tareas
 */

//Tarea para html
gulp.task('concatenar', function () {
    return gulp.src('src/html/*.html') //origen de datos
        .pipe(concat('index.html')) //archivo de destino
        .pipe(gulp.dest('dist/')); //carpeta de destino
});

//Tarea para sass
gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});


//Tarea para js
gulp.task('move', function () {

    gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('./dist/js/'));

});


//Tarea por defecto
gulp.task('default', function () {
    gulp.watch('src/**/*.*', ['concatenar', 'sass', 'move']); //cuando se cambie algo en los archivos especificados se lanzan las tareas especificadas en el array

});
