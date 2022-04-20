import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./Todolist";


export type FilterValuesType = "all" | "active" | "completed"

function App() {
    console.log("App rendered")

    const todoListTitle: string = "What to learn"
// исходный стейт state, setState
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ])

    // delete tasks filter function
    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    // новый стейт для трех кнопок
    const [filter, setFilter] = useState<FilterValuesType>("all")
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
        console.log(filter)
    }

    let tasksForRender;
    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(t => t.isDone === true)
            break
        case "active":
            tasksForRender = tasks.filter(t => t.isDone === false)
            break
        default:
            tasksForRender = tasks
    }

    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />


        </div>
    );
}

export default App;
