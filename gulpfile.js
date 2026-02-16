import gulp from 'gulp';
import { spawn } from 'child_process';
import concat from 'gulp-concat';
import htmlmin from 'gulp-htmlmin';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import terser from 'gulp-terser';
import postcss from 'gulp-postcss';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';
import removeComments from 'postcss-discard-comments';
import sourcemaps from 'gulp-sourcemaps';
import { default as log } from 'fancy-log';

// Dev
export const cssDev = () => gulp.src('./_css/style.scss')
    .pipe(sass({
      loadPaths: [
        './_css',
        './node_modules/bootstrap/scss',
      ],
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./css'));

export const cssWatch = () => gulp.watch('./_css/**/*.scss', cssDev);

export const jsDev = () => gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('script.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('js'));

export const jsWatch = () => gulp.watch('./_js/**/*.js', jsDev);

export const eleventyServe = () => {
  const eleventy = spawn('npx', ['@11ty/eleventy', '--serve']);

  const eleventyLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('Eleventy: ' + message);
      });
  };

  eleventy.stdout.on('data', eleventyLogger);
  eleventy.stderr.on('data', eleventyLogger);
}

// Prod
export const cssProd = () => gulp.src('./_css/style.scss')
    .pipe(sass({
      loadPaths: [
        './_css',
        './node_modules/bootstrap/scss',
      ],
    })
    .on('error', sass.logError))
    .pipe(postcss([purgeCSSPlugin({
        content: [
          '_site/**/*.html',
        ]
      }),
      removeComments({ removeAll: true }),
      cssnano()
    ]))
    .pipe(gulp.dest('./_site/css'));

export const jsProd = () => gulp.src([
      './node_modules/bootstrap/dist/js/bootstrap.bundle.js'
    ])
    .pipe(concat('script.js'))
    .pipe(terser({
      toplevel: true,
      format: {
        comments: false
      }
    }))
    .pipe(gulp.dest('_site/js'));

export const eleventy = (gulpCallback) => {
  const eleventy = spawn('npx', ['@11ty/eleventy']);

  const eleventyLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('Eleventy: ' + message);
      });
  };

  eleventy.stdout.on('data', eleventyLogger);
  eleventy.stderr.on('data', eleventyLogger);

  eleventy.on('exit', gulpCallback);
}

export const dev = gulp.series(cssDev, jsDev, gulp.parallel(eleventyServe, cssWatch, jsWatch));

export const build = gulp.series(eleventy, cssProd, jsProd);

export default dev;
