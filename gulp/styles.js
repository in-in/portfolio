'use strict';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import notifier from 'node-notifier';
import plumber from 'gulp-plumber';
import atImport from 'postcss-easy-import';
import lost from 'lost';
import cssnext from 'postcss-cssnext';
import rucksack from 'rucksack-css';
import svg from 'postcss-inline-svg';
import cssnano from 'cssnano';

gulp.task('styles', function () {
  var processors = [
    atImport({glob: true}),
    lost,
    rucksack,
    svg({
      path: 'dist/assets/images/'
    }),
    cssnext({browsers: ['last 5 versions']}),
    cssnano
  ];

  return gulp.src('app/styles/styles.css')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
        notifier.notify({
            message: "Error in \'styles\' task'"
          });
      }}))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets/styles'));
});
