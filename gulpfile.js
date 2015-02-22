var gulp = require('gulp'),
	connect=require('gulp-connect');

	gulp.task('webserver', function(){
		connect.server();
	});

var gutil = require('gulp-util');

gulp.task('default', ['webserver']);