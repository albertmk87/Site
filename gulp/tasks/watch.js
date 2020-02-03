var gulp=require("gulp");
var watch=require("gulp-watch");

var browserSync=require("browser-sync").create();
require("./styles.js");

gulp.task("watch",function(){
	browserSync.init({
			server:	{
				baseDir:"app"
			}

	});

	watch(["./app/index.html"],function(){
		browserSync.reload()

	});

	gulp.watch(["./app/assets/styles/**/*.css"],gulp.series("cssInject"));
	// gulp.watch(["./app/assets/scripts/**/*.js"],gulp.series("scripts"));
	
	
});


gulp.task("cssInject",gulp.series("styles", function(){
		return gulp.src("./app/temp/styles/styles.css")
		.pipe(browserSync.stream());




}));
