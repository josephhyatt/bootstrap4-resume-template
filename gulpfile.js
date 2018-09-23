// Include the three packages we need
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var PORT = process.env.PORT || 5000;
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    // places above code into "src/js"
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});


//Heroku login 
server.listen(PORT, function () {
  console.log('Chat server running');
});

/*
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  // launch a localhost:3000
  browserSync.init({
    server: "./src"
  });
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});
*/
// Any gulp task thats named 'default' 
// allows us to simply jump into the command line
// and run any command specified in the square brackets
gulp.task('default', ['js', 'serve']);