class Task {
  constructor () {
    this.tasks = [];
  }

  execute () {
    Task.next(this);
  }

  add (_taskFn) {
    let _this = this;
    this.tasks.push(function (_args) {
      _taskFn(function () {
        const args = arguments;
        Task.next(_this, args);
      }, _args);
      Task.next(_this);
    });
    return this;
  }

  static next (_this, _args) {
    if (_this.tasks.length) {
      (_this.tasks.shift())(_args);
    }
  }
}

export {
  Task
};
