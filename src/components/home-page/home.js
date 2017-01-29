import ko from 'knockout';
import homeTemplate from 'text!./home.html';

class Todo {
  constructor(data) {
    this.data = data;
  }
}

class HomeVM {
  constructor(route) {
    this.newTodo = ko.observable();

    this.todos = ko.observableArray([
        new Todo("buy milk"),
        new Todo("build app"),
    ]);

    this.addTodo = function () {
      const newTodoData = this.newTodo();
      const newTodo = new Todo(newTodoData);
      this.todos.push(newTodo);
      this.newTodo('');
    }
  }
}

export default { viewModel: HomeVM, template: homeTemplate };
