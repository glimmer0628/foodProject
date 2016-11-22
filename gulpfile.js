var gulp = require("gulp");
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './www',
    livereload: true
  });
});

gulp.task('copy-index',function(){
	gulp.src('./src/index.html')
	.pipe(gulp.dest('./www'))
	.pipe(connect.reload())
})

gulp.task('cssTask',function(){
return	gulp.src('./src/css/*.*')
	.pipe(gulp.dest('./www/css'))
	.pipe(connect.reload())
})

gulp.task('fontsTask',function(){
return	gulp.src('./src/fonts/*.*')
	.pipe(gulp.dest('./www/fonts'))
	.pipe(connect.reload())
})

gulp.task('jsTask',function(){
return	gulp.src('./src/js/*.*')
	.pipe(gulp.dest('./www/js'))
	.pipe(connect.reload())
})

gulp.task('htmlTemplateTask',function(){
return  gulp.src('./src/template/*.*')
  .pipe(gulp.dest('./www/template'))
  .pipe(connect.reload())
})

gulp.task('watch',function(){
  gulp.watch('./src/index.html',['copy-index']);
  gulp.watch('./src/css/*.*',['cssTask']);
  gulp.watch('./src/js/*.*',['jsTask']);
  gulp.watch('./src/template/*.*',['htmlTemplateTask']);
  
})

gulp.task('default',['connect','watch']);