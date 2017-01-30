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
    this.todos = ko.observableArray([]);

    this.removeTodo = (todo) => {
      this.todos.remove(todo);
      window.localStorage.setItem('ko-todos', JSON.stringify(this.todos()));
    };

    this.addTodo = () => {
      const text = this.upcasedTodo();
      const newTodo = new Todo(text);
      this.todos.push(newTodo);
      this.newTodo('');
      window.localStorage.setItem('ko-todos', JSON.stringify(this.todos()));
    }

    this.removeAll = () => {
      this.todos([]);
    };

    this.toggleCompleted = (todo) => {
      return todo.completed(!todo.completed());
    }

    this.markAllCompleted  = () => {
      this.todos().forEach((v) => {
        return v.completed = true;
      });
      window.localStorage.setItem('ko-todos', JSON.stringify(this.todos()));
    }

    // load todos from local storage
    let koTodos = window.localStorage.getItem("ko-todos");
    if(koTodos) {
      let saved = JSON.parse(koTodos).map((v) => new Todo(v.text, v.completed));
      this.todos(saved);
    }
  }
}

export default { viewModel: HomeVM, template: homeTemplate };
