import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import "./todo.css";

export default function Todo() {
    // Corrected the selector to return state.todo.todos
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    };

    const markHandler = (id) => {
        dispatch(markAsDone({id}));
        const todo = todos.find((todo) => todo.id === id);
        console.log(todo.isDone);
    };

    return (
        <div>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.isDone ? "todo-item underline": "todo-item"}>
                        {todo.task}&nbsp;&nbsp;
                        <button onClick={() => clickHandler(todo.id)}>X</button>
                        &nbsp;&nbsp;<button onClick={() => markHandler(todo.id)}>Done✅</button>
                    </li> // Explicitly returning the <li> element
                ))}
            </ul>
        </div>
    );
}
