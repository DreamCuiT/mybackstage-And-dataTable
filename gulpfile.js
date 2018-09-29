//定义模块
//导入工具包 require(node_modules里对应的模块)
let gulp = require("gulp");
let gulpSass = require("gulp-sass");

gulp.task("copy",function(){
	gulp.src("myBackstage/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\myBackstage"));
});

//定义任务
gulp.task('sass',function(){
    gulp.src('myBackstage/scss/**/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('myBackstage/css'))
    //本来在style下面还有个css的文件夹，然而发现装的这个sass编译路径时只能向上跳一级，故而直接放在style文件夹下了,anyone有方法求赐教
});

gulp.task("watch",function(){
    gulp.watch("myBackstage/**/*",["copy"])
    gulp.watch("myBackstage/scss/**/*.scss",["sass"])
})
