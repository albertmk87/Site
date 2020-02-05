var gulp=require("gulp");
var imagemin=require("gulp-imagemin");
var usemin=require("gulp-usemin");
var rev=require("gulp-rev");
var cssnano=require("gulp-cssnano");
var uglify=require("gulp-uglify");
var browserSync=require("browser-sync").create();
var del=require("del");


gulp.task("previewDist",function(){
	browserSync.init({
			server:	{
				baseDir:"dist"
			}

	});
})

gulp.task("deleteDist", function(){
	return del("./dist");
})
gulp.task("optimize-images",gulp.series("deleteDist" ,function(){
	return gulp.src("./app/assets/images/**/*")
	.pipe(imagemin({
		progressive:true,
		interlaced:true,
		multipass:true
	}))
	.pipe(gulp.dest("./dist/assets/images"));
}))

gulp.task("usemin",gulp.series("deleteDist" ,"styles", "scripts" ,function(){
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css:[function(){return rev()}, function(){return cssnano()}],
		js:[function(){return rev()}, function(){return uglify()}]
	}))
	.pipe(gulp.dest("./dist"));
}))

gulp.task("build",gulp.series("deleteDist","optimize-images","usemin"));