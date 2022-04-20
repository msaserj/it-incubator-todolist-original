import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {
    const todoListTitle = "What to learn"

    const tasks: TaskType[] = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist
                title={todoListTitle}
                task={tasks}
            />


        </div>
    );
}

export default App;
