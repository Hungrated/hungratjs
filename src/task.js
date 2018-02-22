/**
 * 方法链式执行器 `提供方法（条件）串行执行与参数传递功能`
 * @module Task
 * @see module:Task
 * @author Hungrated zhang295415658@qq.com
 *
 * @example
 * new Task()
 *     .add(function (next) { // 若要传参或条件跳转则声明next参数
 *         console.log('task 1 executed');
 *         let objA = {
 *             a: 'a'
 *         };
 *         next(objA, 0, 1);
 *     })
 *     .add(function (next, args) {
 *         console.log(args[0], args[1], args[2]);  // {a: 'a'}, 0, 1
 *         console.log('task 2 executed');
 *         next();
 *     })
 *     .add(function (next, args) {
 *         console.log(args[0], args[1], args[2]);  // undefined undefined undefined
 *         if(!args[0]) { // next可实现条件跳转，跳过不必要的代码
 *             next();
 *         } else {
 *             console.log('task 3 will not be executed'); // 此行将不会被执行
 *         }
 *     })
 *     .add(function () {
 *         console.log('task 4 executed');
 *     })
 *     .add(function () {
 *         console.log('task 5 will not be executed'); // 此行将不会被执行
 *     })
 *     .execute(); // 最后用execute()来执行所有操作
 *
 * // 注意事项：
 * // 1. 若要使用args参数，则必须与next一起传递（注意顺序：next在前，args在后）
 * // 2. next不在方法体内写明时，将执行到当前方法为止
 */

class Task {
  constructor () {
    this.tasks = [];
  }

  /**
   * 开启链式执行器
   * @function execute
   */
  execute () {
    Task.next(this);
  }

  /**
   * 顺序新增一个方法
   * @function add
   * @param {Function} _taskFn 自定义逻辑中的某个方法
   * @returns {Object} Task对象
   */
  add (_taskFn) {
    let _this = this;
    this.tasks.push(function (_args) { // args in 3
      _taskFn(
        function () {
          Task.next(_this, arguments); // args out 1
        },
        _args
      );
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
      (_this.tasks.shift())(_args); // args out 2
    }
  }
}

export {
  Task
};
