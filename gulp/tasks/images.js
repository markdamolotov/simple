import gulp from 'gulp'
import gulpif from 'gulp-if'
import newer from 'gulp-newer'
import browsersync from 'browser-sync'
import webp from 'gulp-webp'

import { gulpConfig } from './../gulpconfig.js'

export const images = () => {
  return gulp
    .src(gulpConfig.path.images.src)
    .pipe(newer(gulpConfig.path.images.dest))
    .pipe(webp())
    .pipe(gulp.dest(gulpConfig.path.images.dest))
    .pipe(gulp.src(`${gulpConfig.path.images.src}.svg`))
    .pipe(newer(gulpConfig.path.images.dest))
    .pipe(gulp.dest(gulpConfig.path.images.dest))
    .pipe(gulpif(gulpConfig.isDevelopment, browsersync.stream()))
}