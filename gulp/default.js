import runSequence from 'run-sequence';
import gulp from 'gulp';

gulp.task('default', () => (
  runSequence(
    'styles',
    'templates',
    'server',
    'watch'
  )
));
