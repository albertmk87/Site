var gulp=require("gulp");

var sprites=require("gulp-svg-sprite");
var rename=require("gulp-rename");

var config= {
	mode:{
		css:{
			render:{
				css:{
					template:"./gulp/templates/sprite.css"
				}
			}
		}
	}
}

gulp.task("createSprite", function(){
	return gulp.src("./app/assets/images/icons/**/*.svg")
	.pipe(sprites(config))
	.pipe(gulp.dest("./app/temp/sprite/"));

});

gulp.task("copySpriteCSS", function(){

	return gulp.src("./app/temp/sprite/css/*.css")
	.pipe(rename("_sprite.css"))
	.pipe(gulp.dest("./app/assets/styles/modules"));
})