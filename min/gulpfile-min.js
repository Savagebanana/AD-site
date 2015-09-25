var gulp=require("gulp"),browserSync=require("browser-sync"),sass=require("gulp-sass"),prefix=require("gulp-autoprefixer"),cp=require("child_process"),jade=require("gulp-jade"),messages={jekyllBuild:'<span style="color: grey">Running:</span> $ jekyll build'};gulp.task("jekyll-build",function(s){return browserSync.notify(messages.jekyllBuild),cp.spawn("jekyll",["build"],{stdio:"inherit"}).on("close",s)}),gulp.task("jekyll-rebuild",["jekyll-build"],function(){browserSync.reload()}),gulp.task("browser-sync",["sass","jekyll-build"],function(){browserSync({server:{baseDir:"_site"}})}),gulp.task("sass",function(){return gulp.src("assets/css/main.scss").pipe(sass({includePaths:["css"],onError:browserSync.notify})).pipe(prefix(["last 15 versions","> 1%","ie 8","ie 7"],{cascade:!0})).pipe(gulp.dest("_site/assets/css")).pipe(browserSync.reload({stream:!0})).pipe(gulp.dest("assets/css"))}),gulp.task("jade",function(){return gulp.src("_jadefiles/*.jade").pipe(jade()).pipe(gulp.dest("_includes"))}),gulp.task("watch",function(){gulp.watch("assets/css/**",["sass"]),gulp.watch("assets/js/**",["jekyll-rebuild"]),gulp.watch(["index.html","_layouts/*.html","_posts/*","_includes/*"],["jekyll-rebuild"]),gulp.watch("_jadefiles/*.jade",["jade"])}),gulp.task("default",["browser-sync","watch"]);