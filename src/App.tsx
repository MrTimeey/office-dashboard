import './styles.css'
import {useEffect, useState} from "react";
import TodoForm from "./TodoForm.tsx";
import TodoList from "./TodoList.tsx";
import {ToDo} from "./types.ts";



export default function App() {

    const [todos, setTodos] = useState<Array<ToDo>>(() => {
        const localValue = localStorage?.getItem('ITEMS') ?? ''
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(todos))
    }, [todos])
    function addTodo(title: string) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false}
            ]
        })
    }
    function toggleTodo(id: string, completed: boolean) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed}
                }
                return todo
            })
        })
    }
    function deleteTodo(id: string) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }
    return (
        <>
            <TodoForm onSubmit={addTodo}/>
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </>
    )
}
