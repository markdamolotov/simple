export const gulpConfig = {
  path: {
    html: {
      src: './src/index.html',
      dest: './docs/',
      watch: ['./src/index.html', './src/views/**/*.html']
    },
    scss: {
      src: './src/scss/main.scss',
      dest: './docs/css/',
      watch: './src/scss/**/*.scss'
    },
    js: {
      src: './src/js/index.js',
      dest: './docs/js/',
      watch: './src/js/**/*.js'
    },
    fonts: {
      src: './src/fonts/**/*',
      dest: './docs/fonts/',
      watch: './src/fonts/**/*'
    },
    images: {
      src: './src/img/**/*',
      dest: './docs/img/',
      watch: './src/img/**/*'
    },
    dest: './docs/',
  },
  isProduction: process.argv.includes('--production'),
  isDevelopment: !process.argv.includes('--production')
}