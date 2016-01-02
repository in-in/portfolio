import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('server', () => (
  browserSync.init({
    files: ['dist/**/*'],
    open: false,
    reloadOnRestart: true,
    port: 3000,
    server: {
      baseDir: [
        'app/resources',
        'dist'
      ]
      // directory: false,
    },
    ui: false,
    notify: false
  })
));
