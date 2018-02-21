/**
 * 文件操作模块
 * @module File
 * @see module:File
 * @author Hungrated zhang295415658@qq.com
 */

import * as fs from 'fs';

/**
 * 创建目录
 * @function mkdir
 * @param {String} _dir 目录
 */
const mkdir = function (_dir) {
  fs.mkdir(_dir, 0o777, function (err) {
    if (err) {
      console.log('dir: `' + _dir + '` exists.');
    } else {
      console.log(_dir + ' created.');
    }
  });
};

/**
 * 若目录不存在则创建目录
 * @function mkdirIfNotExist
 * @param {String} _dir 目录
 */
const mkdirIfNotExist = function (_dir) {
  fs.access(_dir, function (err) {
    if (err && err.code === 'ENOENT') {
      mkdir(_dir);
    } else {
      console.log('dir: `' + _dir + '` exists.');
    }
  });
};

/**
 * 将内容写入指定文件
 * @function writeFile
 * @param {String} _path 目标文件路径
 * @param {String} _str 写入内容
 */
const writeFile = function (_path, _str) {
  fs.writeFile(_path, _str, function (err) {
    if (err) {
      throw err;
    }
    console.log('output: ' + _path);
  });
};

export {
  writeFile,
  mkdirIfNotExist
};
