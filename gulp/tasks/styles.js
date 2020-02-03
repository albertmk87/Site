var gulp=require("gulp");
var postcss=require("gulp-postcss");
var postcss1=require("postcss-simple-vars");
var autoprefixer=require("autoprefixer");
var nested=require("postcss-nested");
var imported=require("postcss-import");
var postMixin=require("postcss-mixins");
var hexrgba=require("postcss-hexrgba");



gulp.task("styles",function(){
	return gulp.src("./app/assets/styles/styles.css")
	.pipe(postcss([imported, postMixin, postcss1, nested, hexrgba, autoprefixer]))
	.on("error", function(errInfo){
		console.log(errInfo.toString());
		this.emit("end");
	})
	.pipe(gulp.dest("./app/temp/styles"));
})