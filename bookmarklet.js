const gulp = require('gulp');
const bookmarklet = require('gulp-bookmarklet');
const Bookmarklet = require('js-bookmarklet-creator');

gulp.task('bookmarklet', function() {
    return gulp.src('path/to/your/javascript.js')
        .pipe(bookmarklet())
        .pipe(gulp.dest('path/to/output/folder'))
        .on('end', function() {
            const bm = new Bookmarklet("Bookmarklet name", "path/to/output/folder/bookmarklet.js");
            if(bm.exists()){
                bm.update();
            }else{
                bm.createBookmark();
            }
        });
});
