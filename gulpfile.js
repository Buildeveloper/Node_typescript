var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function() {
    return gulp.src('dist')
                .pipe(clean());
});

gulp.task('compile', function() {
    return tsProject.src()
                    .pipe(tsProject())
                    .js.pipe(gulp.dest('dist'))
});

gulp.task('copy-opts', gulp.series('clean','compile', function() {
    return gulp.src('tests/unit/config/mocha.opts')
            .pipe(gulp.dest('dist/tests/unit/config'))
            .pipe(gulp.dest('dist/tests/integration/config'))
}));

gulp.task('default', gulp.series('copy-opts', function(done) { 
    done();
}));
