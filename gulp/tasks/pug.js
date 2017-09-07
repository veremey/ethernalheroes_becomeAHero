var gulp = require('gulp');
var pug = require("gulp-pug");
var plumber = require("gulp-plumber");
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
var frontMatter = require('gulp-front-matter');
var prettify    = require('gulp-prettify');
var config = require('../config');

function renderHtml(onlyChanged) {
    return gulp
        .src([config.src.pug + '/*.pug'])
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(gulpif(onlyChanged, changed(config.dest.root, { extension: '.html' })))
        .pipe(frontMatter({ property: 'data' }))
        .pipe(pug())
        .pipe(prettify({
            indent_size: 2,
            wrap_attributes: 'auto', // 'force'
            preserve_newlines: true,
            // unformatted: [],
            end_with_newline: true
        }))
        .pipe(gulp.dest(config.dest.root));
}

gulp.task('pug', function() {
    return renderHtml();
});

gulp.task('pug:changed', function() {
    return renderHtml(true);
});

gulp.task('pug:watch', function() {
    gulp.watch([config.src.pug + '/**/_*.pug'], ['pug']);
    gulp.watch([config.src.pug + '/**/*.pug'], ['pug:changed']);
});



// gulp.task('pug', function() {
//     return gulp.src([
//         config.src.pug + '/*.pug',
//         '!' + config.src.pug + '/_*.pug',
//         '!' + config.src.pug + '/includes/*.pug'])
//     .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
//     // .pipe(changed(dest.root, {extension: '.root'}))
//     .pipe(pug({pretty: true}))
//     .pipe(gulp.dest(config.dest.root));
// });


// gulp.task('pug-all', function() {
//     return gulp.src([
//         config.src.pug + '/*.pug',
//         '!' + config.src.pug + '/_*.pug',
//         '!' + config.src.pug + '/includes/*.pug'])
//         .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
//         .pipe(pug({pretty: true}))
//         .pipe(gulp.dest(config.dest.root));
// });

// gulp.task('pug:watch', function() {
//     gulp.watch(config.src.pug + '/**/*.pug', ['pug']);
//     gulp.watch([config.src.pug + '/_*.pug', config.src.pug + '/includes/*.pug'], ['pug-all']);
// });