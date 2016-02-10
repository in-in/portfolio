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
import cssnext from 'postcss-cssnext';
import rucksack from 'rucksack-css';
// import svg from 'postcss-svg';
import svgFragments from 'postcss-svg-fragments';

gulp.task('styles', function () {
  var processors = [
    atImport({glob: true}),
    lost,
    cssnext,
    rucksack,
    svgFragments,
    // svg({
    //   paths: ['dist/images'],
    //   defaults: "[fill]: #ff00ff"
    // }),
    autoprefixer({browsers: ['last 5 versions']})
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
