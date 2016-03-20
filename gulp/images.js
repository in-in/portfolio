import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('images', () => {
    return gulp.src('app/resources/assets/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ]
        }))
        .pipe(gulp.dest('dist/assets/images'));
});
