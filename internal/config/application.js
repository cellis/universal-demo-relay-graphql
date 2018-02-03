/**
 * Basic settings for running the app are in here.
 * Do not put anything sensitive (API Keys, Passwords, etc)
 * in this file.
 */

const packageFile = require('../../package.json');

const SERVER_PORT = '1337';
const SERVER_HOST = `http://${packageFile.name}.test`;
const EMAIL_HOST = packageFile.metadata.domain;
const EMAIL_HOST_URL = `http://${packageFile.name}.test:1337`;
const SVC_ROUTE = 'svc';
const EMAILS_ON = 'true';
const CLIENT_DEVSERVER_PORT = '7331';
const DISABLE_SSR = 'false';
const COOKIE_DOMAIN = `${packageFile.name}.test:1337`;
const BUNDLE_OUTPUT_PATH = './build';
const BUNDLE_ASSETS_FILENAME = 'assets.json';
const BUNDLE_CHUNKS_FILENAME = 'chunkManifest.json';
const CLIENT_BUNDLE_HTTP_PATH = '/client/';
const CLIENT_BUNDLE_CACHE_MAXAGE = '365d';
const USE_DEV_DLL = 'true';
const RELAY_SCHEMA_PATH = './relay';
const PG_USER = 'cameronellis';
const PG_PASSWORD = '';
const PG_HOST = 'localhost';
const PG_PORT = 5432;
const PG_DATABASE = packageFile.name;
const PG_DEFAULT_ROLE = `${packageFile.name}_anonymous`;
const DB_CONNECTION_STRING = `postgres://${PG_HOST}:${PG_PORT}/${packageFile.name}`;

module.exports = {
  SERVER_PORT,
  SERVER_HOST,
  EMAIL_HOST,
  EMAIL_HOST_URL,
  SVC_ROUTE,
  EMAILS_ON,
  CLIENT_DEVSERVER_PORT,
  DISABLE_SSR,
  COOKIE_DOMAIN,
  BUNDLE_OUTPUT_PATH,
  BUNDLE_ASSETS_FILENAME,
  BUNDLE_CHUNKS_FILENAME,
  CLIENT_BUNDLE_HTTP_PATH,
  CLIENT_BUNDLE_CACHE_MAXAGE,
  USE_DEV_DLL,
  RELAY_SCHEMA_PATH,
  DB_CONNECTION_STRING,
  PG_USER,
  PG_PASSWORD,
  PG_HOST,
  PG_PORT,
  PG_DATABASE,
  PG_DEFAULT_ROLE,
};
