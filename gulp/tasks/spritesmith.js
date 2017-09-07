var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var spritesmith = require('gulp.spritesmith');
var notify = require('gulp-notify');
var buffer      = require('vinyl-buffer');
var imagemin    = require('gulp-imagemin');
var config      = require('../config');

gulp.task('sprite', function() {
    var spriteData = gulp.src(config.src.img + '/icons/*.png')
    .pipe(plumber({
        errorHandler: function() {
                var args = Array.prototype.slice.call(arguments);
                notify.onError({
                    title: 'Compile Error',
                    message: '<%= error.message %>',
                    sound: 'Submarine'
                }).apply(this, args);
                this.emit('end');
            }
    }))

    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite-png.sass',
        imgPath: '../img/sprite.png',
        // retinaSrcFilter: config.src.iconsPng + '/*@2x.png',
        // retinaImgName: 'sprite@2x.png',
        // retinaImgPath: '../img/sprite@2x.png',
        padding: 10,
        algorithm: 'binary-tree',
        cssTemplate: config.src.helpers + '/sprite.template.mustache'
        // ,
        // cssVarMap: function(sprite) {
        //     sprite.name = 'icon-' + sprite.name;
        // }
    }));
    spriteData.img
        .pipe(buffer())
        // .pipe(imagemin({
        //     optimizationLevel: 3
        // }))
        .pipe(gulp.dest(config.src.img));
    spriteData.css
        .pipe(gulp.dest(config.src.sass+'lib/'))
        .pipe(notify("New sprite created!"));
});

gulp.task('sprite:watch', function() {
    gulp.watch(config.src.img + 'icons/*.png', ['sprite']);
});
