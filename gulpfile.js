const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


//transforma os arquivos sass em css na pasta dist/css
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}


exports.default = gulp.parallel(styles, images);
//watch faz com que o servidor detecte alterações no codigo e já atualize sem precisar ficar digitando gulp toda vez
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}