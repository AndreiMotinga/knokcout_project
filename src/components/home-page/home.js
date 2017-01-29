import ko from 'knockout';
import homeTemplate from 'text!./home.html';

// fix: extract to models folder
class Todo {
  constructor(text) {
    this.text = text;
  }
}

class HomeVM {
  constructor(route) {
    this.newTodo = ko.observable('');
    this.upcasedTodo = ko.computed(() => {
      return this.newTodo().toUpperCase();
    });

    // fix: is this the right place to define it?
    this.todos = ko.observableArray([
        new Todo("buy milk"),
        new Todo("build app"),
    ]);

    this.removeTodo = (todo) => {
      this.todos.remove(todo);
    };

    this.addTodo = () => {
      const text = this.upcasedTodo();
      const newTodo = new Todo(text);
      this.todos.push(newTodo);
      this.newTodo('');
    }
  }
}

export default { viewModel: HomeVM, template: homeTemplate };
