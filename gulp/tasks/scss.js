import gulp from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleancss from 'gulp-clean-css'
import sourcemaps from 'gulp-sourcemaps'
import gulpif from 'gulp-if'
import rename from 'gulp-rename'
import browsersync from 'browser-sync'

import { gulpConfig } from './../gulpconfig.js'

const sass = gulpSass(dartSass)

export const scss = () => {
  return gulp
    .src(gulpConfig.path.scss.src)
    .pipe(gulpif(gulpConfig.isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpif(gulpConfig.isProduction, autoprefixer()))
    .pipe(gulpif(gulpConfig.isProduction, cleancss()))
    .pipe(
      gulpif(
        gulpConfig.isProduction,
        rename({
          suffix: '.min',
        }),
      ),
    )
    .pipe(gulpif(gulpConfig.isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest(gulpConfig.path.scss.dest))
    .pipe(gulpif(gulpConfig.isDevelopment, browsersync.stream()))
}
