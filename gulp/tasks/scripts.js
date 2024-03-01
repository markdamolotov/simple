import gulp from 'gulp'
import gulpif from 'gulp-if'
import webpack from 'webpack'
import rename from 'gulp-rename'
import webpackstream from 'webpack-stream'
import browsersync from 'browser-sync'

import { webpackConfig } from './../../webpack.config.js'
import { gulpConfig } from './../gulpconfig.js'

webpackConfig.mode = gulpConfig.isProduction ? 'production' : 'development'
webpackConfig.devtool = gulpConfig.isProduction ? false : 'source-map'

export const scripts = () => {
  return gulp
    .src(gulpConfig.path.js.src)
    .pipe(webpackstream(webpackConfig), webpack)
    .pipe(
      gulpif(
        gulpConfig.isProduction,
        rename({
          suffix: '.min',
        }),
      ),
    )
    .pipe(gulp.dest(gulpConfig.path.js.dest))
    .pipe(gulpif(gulpConfig.isDevelopment, browsersync.stream()))
}
