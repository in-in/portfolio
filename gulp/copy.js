import gulp from 'gulp';
import changed from 'gulp-changed';
import filter from 'gulp-filter';

gulp.task('copy', () => (
  gulp.src('app/resources/**/*')
    .pipe(changed('dist'))
    .pipe(filter(file => !/resources[\\\/]robots\.txt/.test(file.path)))
    .pipe(gulp.dest('dist'))
));
