/**
 * 方法链式执行器
 * `提供方法循条件串行执行与参数逐层与跨层传递功能，避免回调地狱现象`
 * @module Task
 * @see module:Task
 * @author Hungrated zhang295415658@qq.com
 *
 * @example
 * new Task()
 *     .add(function (next, args) { // 传参或条件跳转：声明next；接收参数：声明args
 *         console.log('task 1 executed');
 *         console.log(args()); // [0]
 *         let objA = {
 *             a: 'a'
 *         };
 *         next(objA, 0, 1);
 *     })
 *     .add(function (next, args) {
 *         console.log(args()[0], args()[1], args()[2]);  // {a: 'a'} 0 1
 *         console.log('task 2 executed');
 *         next();
 *     })
 *     .add(function (next, args) {
 *         console.log(args(2));  // [{a: 'a'}, 0, 1]
 *         if(!args().length) { // next可实现条件跳转，跳过不必要的代码
 *             next();
 *         } else {
 *             console.log('task 3 will not be executed'); // 此行将不会被执行
 *         }
 *     })
 *     .add(function (next, args) {
 *         console.log(args(1), args(2)); // [0] [{a: 'a'}] （参数跨层传递）
 *         console.log('task 4 executed');
 *     })
 *     .add(function () {
 *         console.log('task 5 will not be executed'); // 此行将不会被执行
 *     })
 *     .execute(0); // 最后用execute()来执行所有操作，可传参数
 *
 * // 注意事项：
 * // 1. 若要使用args参数，则必须与next一起传递（注意顺序：next在前，args在后）
 * // 2. next不在方法体内写明时，将执行到当前方法为止
 */

class Task {
  constructor () {
    this.tasks = [];
    this.argArr = [];
  }

  /**
   * 开启链式执行器 `可传递参数`
   * @function execute
   */
  execute () {
    if (this.tasks.length) {
      Task.next(this, arguments);
      return this;
    }
  }

  /**
   * 顺序新增一个方法
   * @function add
   * @param {Function} _taskFn 自定义逻辑中的某个方法
   * 通常写作 `add(function([next[, args]]){})`
   * 其中 `next` 和 `args` 类型都是 `Function`
   * @returns {Object} Task对象
   */
  add (_taskFn) {
    let _this = this;
    this.tasks.push(function (_args) {
      _taskFn(
        // next([args])
        function () {
          Task.next(_this, arguments);
        },
        // args([index])
        function (_index) {
          return Task.args(_this, _args, _index);
        }
      );
    });
    return this;
  }

  /**
   * 执行链式操作的下一个方法
   * @function next
   * @param {Object} _this Task对象
   * @param {Object} [_args] 上一方法传递的参数
   */
  static next (_this, _args) {
    if (_this.tasks.length) {
      _this.argArr.push(_args || []);
      (_this.tasks.shift())(_args);
    }
  }

  /**
   * 传递参数
   * @function args
   * @param {Object} _this Task对象
   * @param {Object} _args 上一方法传递的参数
   * @param {Object} [_index] 方法索引 `从1开始`
   * 例如：`_index` 为1时，返回方法链中第一个方法接收到的参数
   */
  static args (_this, _args, _index) {
    return (_index && _index > 0) ? _this.argArr[_index - 1] : _args;
  }

  /**
   * 清空方法链
   * @function clear
   */
  clear () {
    this.tasks = [];
    this.argArr = [];
    return this;
  }
}

export {
  Task
};
