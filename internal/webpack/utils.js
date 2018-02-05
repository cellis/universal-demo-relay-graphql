import HappyPack from 'happypack';
import notifier from 'node-notifier';
import colors from 'colors';

// Generates a HappyPack plugin.
// @see https://github.com/amireh/happypack/
export function happyPackPlugin({ name, loaders }) {
  return new HappyPack({
    id: name,
    verbose: false,
    threads: 4,
    loaders,
  });
}

// :: [Any] -> [Any]
export function removeEmpty(x) {
  return x.filter(y => !!y);
}

// :: bool -> (Any, Any) -> Any
export function ifElse(condition) {
  return (then, or) => (condition ? then : or);
}

// :: ...Object -> Object
export function merge() {
  const funcArgs = Array.prototype.slice.call(arguments); // eslint-disable-line prefer-rest-params

  return Object.assign.apply(
    null,
    removeEmpty([{}].concat(funcArgs))
  );
}

export function createNotification(options = {}) {
  const title = options.title
    ? `${options.title.toUpperCase()}`
    : undefined;

  notifier.notify({
    title,
    message: options.message,
    open: options.open,
  });

  const level = options.level || 'info';
  const msg = `==> ${title} -> ${options.message}`;

  switch (level) {
    case 'warn': console.log(colors.red(msg)); break;
    case 'error': console.log(colors.bgRed.white(msg)); break;
    case 'info':
    default: console.log(colors.green(msg));
  }
}
