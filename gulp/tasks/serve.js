import gulp from 'gulp'
import browsersync from 'browser-sync'

import { html } from './html.js'
import { scss } from './scss.js'
import { scripts } from './scripts.js'
import { fonts } from './fonts.js'
import { images } from './images.js'

import { gulpConfig } from './../gulpconfig.js'

export const serve = () => {
  browsersync.init({
    server: gulpConfig.path.html.dest,
    notify: false
  })

  gulp.watch(gulpConfig.path.html.watch, html)
  gulp.watch(gulpConfig.path.scss.watch, scss)
  gulp.watch(gulpConfig.path.js.watch, scripts)
  gulp.watch(gulpConfig.path.fonts.watch, fonts)
  gulp.watch(gulpConfig.path.images.watch, images)
}