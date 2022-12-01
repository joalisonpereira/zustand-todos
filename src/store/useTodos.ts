import api from "src/services/api";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { UseTodos } from "./types";

export const useTodos = create<UseTodos>()(
  devtools((set, get) => ({
    todos: [],
    loading: false,
    fetchTodos: async () => {
      try {
        set({ loading: true });

        const { data } = await api.get("/todos");

        set({ todos: data, loading: false });
      } catch (error) {
        set({ loading: false });
      }
    },
    addTodo: async (todo) => {
      try {
        set({ loading: true });

        await api.post("/todos", todo);

        set({ loading: false });

        get().fetchTodos();
      } catch (error) {
        set({ loading: false });
      }
    },
    removeTodo: async (id) => {
      try {
        set({ loading: true });

        await api.delete(`/todos/${id}`);

        set({ loading: false });

        get().fetchTodos();
      } catch (error) {
        set({ loading: false });
      }
    },
  }))
);
