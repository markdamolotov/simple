import gulp from 'gulp'

import { clean } from './gulp/tasks/clean.js'
import { html } from './gulp/tasks/html.js'
import { scss } from './gulp/tasks/scss.js'
import { scripts } from './gulp/tasks/scripts.js'
import { fonts } from './gulp/tasks/fonts.js'
import { images } from './gulp/tasks/images.js'
import { serve } from './gulp/tasks/serve.js'

export const del = clean

export const dev = gulp.series(
  clean,
  gulp.parallel(html, scss, scripts, fonts, images),
  gulp.parallel(serve),
)

export const prod = gulp.series(
  clean,
  gulp.parallel(html, scss, scripts, fonts, images),
)