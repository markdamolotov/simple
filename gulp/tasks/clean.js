import { deleteAsync } from 'del'

import { gulpConfig } from './../gulpconfig.js'

export const clean = () => {
  return deleteAsync(gulpConfig.path.dest)
}