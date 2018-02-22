/**
 * 链式方法执行器 `提供方法串行执行与参数传递功能`
 * @module Task
 * @see module:Task
 * @author Hungrated zhang295415658@qq.com
 *
 * @example
 * new Task()
 *     .add(function (next) { // next参数可选，若要传参或条件跳转则声明next参数
 *         console.log('task 1 executed');
 *         let objA = {
 *             a: 'a'
 *         };
 *         next(objA, 0, 1, 2);
 *     })
 *     .add(function (args) { // 若无特殊需求则next可省略
 *         console.log(args[0], args[1], args[2]);  // {a: 'a'}, 0, 1
 *         console.log('task 2 executed');
 *     })
 *     .add(function (next, args) {
 *         console.log(args[0], args[1], args[2]);  // undefined undefined undefined
 *         if(!args[0]) { // next可实现条件跳转，跳过不必要的代码
 *             next();
 *         }
 *         console.log('task 3 executed'); // 此段将不会执行
 *     })
 *     .add(function () {
 *         console.log('task 4 executed');
 *     })
 *     .execute(); // 最后用execute()来执行所有操作
 */

class Task {
  constructor () {
    this.tasks = [];
  }

  /**
   * 开启链式方法执行器
   * @function execute
   */
  execute () {
    Task.next(this);
  }

  /**
   * 顺序新增一个方法
   * @function add
   * @param _taskFn
   * @returns {Object} Task对象
   */
  add (_taskFn) {
    let _this = this;
    this.tasks.push(function (_args) {
      _taskFn(function () {
        Task.next(_this, arguments);
      }, _args);
      Task.next(_this);
    });
    return this;
  }

  /**
   * 执行链式操作的下一步
   * @function next
   * @param {Object} _this Task对象
   * @param {Object} [_args] 上一方法传递的参数
   */
  static next (_this, _args) {
    if (_this.tasks.length) {
      (_this.tasks.shift())(_args);
    }
  }
}

export {
  Task
};
