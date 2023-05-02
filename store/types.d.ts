interface TodoState {
  todos: Todo[];
}

interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

interface TodoAction {
  type: string;
  payload: Todo;
}

interface TodosReducerProps {
  state: TodoState;
  action: TodoAction;
}
