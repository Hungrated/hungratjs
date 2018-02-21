import * as Fs from 'fs';

const mkdir = function (_dir) {
  Fs.mkdir(_dir, 0o777, function (err) {
    if (err) {
      console.log('dir: `' + _dir + '` exists.');
    } else {
      console.log(_dir + ' created.');
    }
  });
};

const mkdirIfNotExist = function (_dir) {
  Fs.access(_dir, function (err) {
    if (err && err.code === 'ENOENT') {
      mkdir(_dir);
    } else {
      console.log('dir: `' + _dir + '` exists.');
    }
  });
};

const writeFile = function (path, str) {
  Fs.writeFile(path, str, function (err) {
    if (err) {
      throw err;
    }
    console.log('output: ' + path);
  });
};

export {
  writeFile,
  mkdirIfNotExist
};
