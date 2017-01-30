import ko from 'knockout';
import homeTemplate from 'text!./home.html';

// fix: extract to models folder
class Todo {
  constructor(text, state) {
    this.text = text;
    this.completed = ko.observable(state);
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
        new Todo("buy milk", false),
        new Todo("build app", true),
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

    this.removeAll = () => {
      this.todos([]);
    };

    this.toggleCompleted = (todo) => {
      return todo.completed(!todo.completed());
    }

    this.markAllCompleted  = () => {
      this.todos().forEach((v) => {
        return v.completed(!v.completed());
      });
    }
  }
}

export default { viewModel: HomeVM, template: homeTemplate };
