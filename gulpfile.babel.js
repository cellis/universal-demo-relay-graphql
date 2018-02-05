// build the client and server
// upload client files to s3
// push to heroku
import webpack from 'webpack';
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpackFactory from './internal/webpack/webpackFactory';

const BUILD_DIR = 'build';

function getCheckDone(trackCompleted, done) {
  return configType => {
    trackCompleted[configType] = true;
    if (trackCompleted.client && trackCompleted.server) {
      console.log('BUILD COMPLETED');
      done();
    }
  };
}


function runWebpackFactory(configType, env, callback) {
  return webpack(webpackFactory(configType, env), (err, stats) => {
    if (!err) {
      gutil.log(`[webpack ${configType} ${env}]`, stats.toString({
        // options
      }));

      callback(configType);
    } else {
      throw new gutil.PluginError('webpack', err);
    }
  });
}

gulp.task('buildDev', done => {
  const buildCompleted = {};

  runWebpackFactory('client', 'development', getCheckDone(buildCompleted, done));
  runWebpackFactory('server', 'development', getCheckDone(buildCompleted, done));
});

gulp.task('buildProd', done => {
  const buildCompleted = {};

  runWebpackFactory('client', 'production', getCheckDone(buildCompleted, done));
  runWebpackFactory('server', 'production', getCheckDone(buildCompleted, done));
});
