// build the client and server
// upload client files to s3
// push to heroku
import webpack from 'webpack';

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

const BUILD_DIR = 'build';
const clientWebpackConfig = require('./internal/webpack/client.prod.babel');
const serverWebpackConfig = require('./internal/webpack/server.prod.babel');

gulp.task('build', done => {
  webpack([clientWebpackConfig, serverWebpackConfig]).run((err, stats) => {
    done();
  });
});
