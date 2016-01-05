import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';

const onError = function (err) {
  notifier.notify({
    message: "Error in \'icons\' task'"
  });
};

const svgConfig = {
  mode: {
    symbol: {
      "sprite": "../icon-sprite.jade",
      "inline": true
    }
  }
};

gulp.task('icons', () => (
  gulp.src('app/icons/**/*.svg')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('app/blocks/icon/'))
));
