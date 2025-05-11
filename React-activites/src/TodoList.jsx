import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    }

    let updateTodoTask = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        let copy = todos.filter((todo) => todo.id != id);
        setTodos(todos.filter((todo) => todo.id != id));
        console.log(copy);
    }

    // let upperCaseAll = () => {
    //     setTodos((prevTodo) => {
    //         prevTodo.map((todo) => {
    //             return {
    //                 ...todo,
    //                 task: todo.task.toUpperCase()
    //             };
    //         })
    //     });
    //     // console.log(newArray);
    // }
    let upperCaseAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase()
            }));
        });
    };
    let markAllDone = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => ({
                ...todo,
                isDone: true
            }));
        });
    };

    let markAsDone = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                }
                else {
                    return todo;
                }
            })
        });
    };
    // let upperCaseOne = (id) => {
    //     setTodos((prevTodo) => {
    //         return prevTodo.map((todo) => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo,
    //                     task: todo.task.toUpperCase()
    //                 };
    //             }
    //             else {
    //                 return todo;
    //             }
    //         })
    //     });
    // };

    // or 


    // let upperCaseOne = (id) => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) =>
    //             todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
    //         )
    //     );
    // };


    return (
        <div>
            <input
                type="text"
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoTask}
            />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><hr />
            <h2>Tasks Todo</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}><span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>&nbsp;&nbsp;&nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
                    </li>
                ))}
            </ul>

            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    );
}
