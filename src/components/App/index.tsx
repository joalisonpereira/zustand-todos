import { FormEvent, useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import { useTodos } from "src/store/useTodos";
import Status from "../Status";
import { Container, ContainerProps } from "./styles";

export interface AppProps extends ContainerProps {}

function App({}: AppProps) {
  const [input, setInput] = useState("");

  const { todos, addTodo, loading, fetchTodos, removeTodo } = useTodos();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    addTodo({ id: uuidV4(), title: input });

    setInput("");
  }

  function handleRemove(id: string) {
    removeTodo(id);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button disabled={loading || input.length === 0} type="submit">
          {loading ? "Carregando..." : "Adicionar"}
        </button>
      </form>
      <div className="list">
        <ul>
          {todos.map((item) => (
            <li id={item.id}>
              {item.title}
              <button
                type="button"
                onClick={() => handleRemove(item.id)}
                disabled={loading}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Status />
    </Container>
  );
}

export default App;
