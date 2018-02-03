/**
 * Rename this file to `development.js`
 * Then place custom settings for local dev in here
 */

const application = require('./application');

const APP_SECRET = '8FkWJamYmNgHLYDfEs,VjxUp';
const FACEBOOK_APP_ID = 'get this';
const FACEBOOK_APP_SECRET = 'get this';
const PAYPAL_ACCESS_TOKEN = 'n/a';
const CLOUDFRONT_IMG_ENDPOINT = 'n/a';
const AWS_BUCKET = 'n/a';
const AWS_IMG_ENDPOINT = 'n/a';
const AWS_IMG_BUCKET = 'n/a';
const AWS_IMG_LAMDA = 'n/a';
const AWS_IMG_LAMDA_FN = 'n/a';
const AWS_REGION = 'n/a';
const AWS_CLOUDFRONT_ID = 'n/a';
const AWS_ACCESS_KEY_ID = 'n/a';
const AWS_SECRET_ACCESS_KEY = 'n/a';
const SENDGRID_API_KEY = 'n/a';

module.exports = Object.assign({}, application, {
  APP_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  PAYPAL_ACCESS_TOKEN,
  CLOUDFRONT_IMG_ENDPOINT,
  AWS_BUCKET,
  AWS_IMG_ENDPOINT,
  AWS_IMG_BUCKET,
  AWS_IMG_LAMDA,
  AWS_IMG_LAMDA_FN,
  AWS_REGION,
  AWS_CLOUDFRONT_ID,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  SENDGRID_API_KEY,
});
