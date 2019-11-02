interface Todo {
  description: string;
  done: boolean;
}

export class App {
  public heading = 'Todos';
  public readonly todos: Todo[] = [];
  public todoDescription = '';

  public addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }

  public removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
