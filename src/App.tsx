import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Todolist";

function App() {


// исходный стейт state. setState
    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ])

    const todoListTitle = "What to learn"




    // delete tasks filter function
    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
                removeTask={removeTask}
            />


        </div>
    );
}

export default App;
