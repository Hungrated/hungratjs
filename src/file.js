import * as Fs from 'Fs';

const makeDir = function (dir) {
  Fs.mkdir(dir, 0o777, function (err) {
    if (err) {
      console.log('dir: `' + dir + '` exists.');
    } else {
      console.log(dir + ' created.');
    }
  });
};

const mkdirIfNotExist = function (dir) {
  Fs.access(dir, function (err) {
    if (err && err.code === 'ENOENT') {
      makeDir(dir);
    } else {
      console.log('dir: `' + dir + '` exists.');
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
  writeFile
};
