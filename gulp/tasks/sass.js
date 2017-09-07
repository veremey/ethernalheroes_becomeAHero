var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var plumber     = require('gulp-plumber');
var autoprefixer = require('autoprefixer');
var notify = require('gulp-notify');
var mqpacker = require("css-mqpacker");
var gutil = require('gulp-util');
var config = require('../config');
// var csso = require('postcss-csso');

var processors = [
    autoprefixer({browsers: ['IE 9', 'IE 10', 'IE 11', 'Opera 12', 'iOS 7', 'ios_saf 7', 'iOS 8', 'ios_saf 8', 'last 5 versions'],
        cascade: false
    }),
    // require('lost'),
    mqpacker({
        sort: function (a, b) {
            a = a.replace(/\D/g,'');
            b = b.replace(/\D/g,'');
            return b-a;
            // replace this with a-b for Mobile First approach
        }

    })
];

var reportError = function (error) {
    var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

    notify({
        title: 'Task Failed [' + error.plugin + ']',
        message: lineNumber + 'See console.',
        sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
    }).write(error);

    gutil.beep(); // Beep 'sosumi' again

    // Inspect the error object
    //console.log(error);

    // Easy error reporting
    //console.log(error.toString());

    // Pretty error reporting
    var report = '';
    var chalk = gutil.colors.white.bgRed;

    report += chalk('TASK:') + ' [' + error.plugin + ']\n';
    report += chalk('PROB:') + ' ' + error.message + '\n';
    if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }
    if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }
    console.error(report);

    // Prevent the 'watch' task from stopping
    this.emit('end');
};

// var sassOption = {
//     errLogToConsole: false,
//     onError: function (err) {
//         console.log(err);
//         notify().write({
//             title: 'Gulp: CSS',
//             message: 'Error'
//         });
//     }
// };

gulp.task('sass', function() {

    return sass(config.src.sass+'**/*.sass', {
        sourcemap: true,//true is better
        // style: 'compact',
        style: 'compressed',
        emitCompileError: true
    })
    .on('error', reportError)
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.css));
});


// gulp.task('sass', function() {
//     return gulp
//         .src(config.src.sass + '**/*.sass')
//         .pipe(sourcemaps.init({largeFile: true}))
//         .pipe(plumber({
//             errorHandler: reportError
//         }))
//         .pipe(sass(sassOption))
//         .pipe(postcss(processors))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest(config.dest.css));
// });
gulp.task('sass:watch', function() {
    gulp.watch(config.src.sass + '**/*.sass', ['sass']);
});

