import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task!", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // console.log("new task added");
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    };

    let removeATask = (id) => {
        // console.log(id);
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id != id)
        );
    };

    let UpperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return { ...todo, task: todo.task.toUpperCase() };
            })
        );
    };

    let UpperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
                } else {
                return todo;
                }
            })        
        );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
                } else {
                return todo;
                }
            })        
        );
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <hr />
            <button onClick={addNewTask}>Add Task</button>
            <hr />
            <br />
            <br />
            <br />
            <h3>Tasks Todo</h3>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecoration: "line-through" } : null}>{todo.task}</span> &nbsp;&nbsp;&nbsp;
                            <button onClick={() => removeATask(todo.id)}>X</button>
                            <button onClick={() => markAsDone(todo.id)}>Done</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
