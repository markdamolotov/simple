import gulp from 'gulp'
import gulpif from 'gulp-if'
import ttf2woff2 from 'gulp-ttf2woff2'
import browsersync from 'browser-sync'

import { gulpConfig } from './../gulpconfig.js'

export const fonts = () => {
  return gulp
    .src(gulpConfig.path.fonts.src)
    .pipe(ttf2woff2())
    .pipe(gulp.dest(gulpConfig.path.fonts.dest))
    .pipe(gulpif(gulpConfig.isDevelopment, browsersync.stream()))
}