export interface Todo {
  id: string;
  title: string;
}

export interface UseTodos {
  todos: Todo[];
  loading: boolean;
  fetchTodos: () => Promise<void>;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}
