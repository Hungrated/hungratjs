import * as Fs from 'fs';

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
