"use strict";

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    concatCss       = require('gulp-concat'),
    browserSync     = require('browser-sync');

// function browserSync(done){
//     browsersync.init({
//         server: {
//           baseDir: "app"
//         }
//       });
//       done();
// }

// function sass(){
//     return gulp 
//         .src('app/sass/**/*.sass')
//         .pipe(sass())
//         .pipe(gulp.dest('app/css'))
// }

// function autoprefixer(){
//     return  gulp.src('app/css/**/*.css')
//        .pipe(
//            autoprefixer({
//                browsers: ['last 2 versions']
//            })
//        )
//        .pipe(gulp.dest('app/css'))
// }

// function concatCss(){
//     return gulp.src('app/css/**/*.css')
//        .pipe(concatCss('style.css'))
//        .pipe(gulp.dest('app/css'))
// }

// function browserSyncReload(done) {
//     browsersync.reload();
//     done();
// }

// function watchFiles() {
//     gulp.watch(
//       [
//         "app/css/**/*.css",
//         "app/sass/**/*.sass",
//         "app/**.html",
//         "app/js/**/*.js"
//       ],
//       gulp.series(concatCss(), autoprefixer(), browserSyncReload(), sass())
//     );
//   }
// gulp.task('watch', gulp.parallel(watchFiles(), browserSync()));

// gulp.task('default', ['watch']);
// const watch = gulp.parallel(watchFiles, browserSync);
  









gulp.task('sass', function () {
    return gulp.src('app/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('autoprefixer', function () {
   return  gulp.src('app/css/**/*.css')
       .pipe(
           autoprefixer({
               browsers: ['last 2 versions']
           })
       )
       .pipe(gulp.dest('app/css'))
});

gulp.task('concatCss', function () {
   return gulp.src('app/css/**/*.css')
       .pipe(concatCss('style.css'))
       .pipe(gulp.dest('app/css'))
});

gulp.task('browserSync', function () {
    return browserSync({
        server:{
            baseDir:'app'
        }
    });
});

gulp.task('browserSyncReload', function(){
    browsersync.reload();
})

// gulp.task('watch', gulp.parallel('sass','autoprefixer', 'concatCss'));
gulp.task('watch', ['autoprefixer', 'concatCss','sass'], function () {
                gulp.watch('app/css/**/*.css', ['autoprefixer']),
                gulp.watch('app/css/**/*.css', ['concatCss']),
                gulp.watch('app/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['watch']);