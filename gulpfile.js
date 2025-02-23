const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


//transforma os arquivos sass em css na pasta dist/css
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}


exports.default = styles;
//watch faz com que o servidor detecte alterações no codigo e já atualize sem precisar ficar digitando gulp toda vez
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}