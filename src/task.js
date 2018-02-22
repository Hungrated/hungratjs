class Task {
  constructor () {
    this.tasks = [];
  }

  execute () {
    this.next(this);
  }

  add (_taskFn) {
    let _this = this;
    this.tasks.push(function () {
      _taskFn(function () {
        console.log(arguments);
        _this.next(_this);
      });
      _this.next(_this);
    });
    return this;
  }

  next (_this) {
    if (_this.tasks.length) {
      (_this.tasks.shift())();
    }
  }
}

export {
  Task
};
