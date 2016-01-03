'use strict';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import notifier from 'node-notifier';
import plumber from 'gulp-plumber';
import atImport from 'postcss-import';
import lost from 'lost';


const onError = function (err) {
  notifier.notify({
    message: "Error in \'styles\' task'"
  });
};

gulp.task('styles', function () {
  var processors = [
    atImport({
      glob: true
    }),
    lost(),
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp.src('app/styles/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/assets/styles'));
});
