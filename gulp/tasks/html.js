import gulp from 'gulp'
import include from 'gulp-file-include'
import replace from 'gulp-replace'
import browsersync from 'browser-sync'
import gulpif from 'gulp-if'
import htmlmin from 'gulp-htmlmin'

import { gulpConfig } from './../gulpconfig.js'

export const html = () => {
  return gulp
    .src(gulpConfig.path.html.src)
    .pipe(
      include({
        prefix: '@@',
        basepath: '@file',
      }),
    )
    .pipe(
      gulpif(
        gulpConfig.isProduction,
        htmlmin({
          collapseWhitespace: true,
          removeComments: true,
        }),
      ),
    )
    .pipe(gulpif(gulpConfig.isProduction, replace('.css', '.min.css')))
    .pipe(gulpif(gulpConfig.isProduction, replace('.js', '.min.js')))
    .pipe(gulp.dest(gulpConfig.path.html.dest))
    .pipe(gulpif(gulpConfig.isDevelopment, browsersync.stream()))
}
