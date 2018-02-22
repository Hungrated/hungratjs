class Task {
  constructor () {
    this.tasks = [];
  }

  execute () {
    this.next();
  }

  add (_taskFn) {
    let _this = this;
    this.tasks.push(function () {
      _taskFn();
      _this.next();
    });
    return this;
  }

  next () {
    if (this.tasks.length) {
      (this.tasks.shift())();
    }
  }
}

export {
  Task
};
