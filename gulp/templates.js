'use strict';

import gulp from 'gulp';
import jade from 'gulp-jade';
import inheritance from 'gulp-jade-inheritance';
import filter from 'gulp-filter';
import rename from 'gulp-rename';
import notifier from 'node-notifier';
import plumber from 'gulp-plumber';
import getData from 'jade-get-data';

// const onError = function (err) {
//   notifier.notify({
//     message: "Error in \'templates\' task'"
//   });
// };

const data = {
  getData: getData('app/data'),
  jv0: 'javascript:void(0);',
  timestamp: Date.now()
};

gulp.task('templates', () => (
  gulp.src('app/**/*.jade')
  .pipe(plumber())
  .pipe(inheritance({basedir: 'app'}))
  .pipe(filter(file => /app[\\\/]pages/.test(file.path)))
  .pipe(jade({data}))
  .pipe(rename({dirname: '.'}))
  .pipe(gulp.dest('dist'))
));
