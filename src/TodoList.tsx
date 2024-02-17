import {ToDo} from "./types.ts";
import TodoItem from "./TodoItem.tsx";

interface TodoListProps {
    todos: Array<ToDo>
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}

export default function TodoList({todos, toggleTodo, deleteTodo}: TodoListProps) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} />
                )
            })}

        </ul>
    )
}
