import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"
function App() {
    console.log(v1())

    const todoListTitle: string = "What to learn"
// исходный стейт state, setState
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ])
    // delete tasks filter function
    const removeTask = (taskID: string) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    //Add task
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
      setTasks(tasks.map(t => t.id === taskID ? {...t, isDone: isDone} : t))
    }

    // новый стейт для трех кнопок
    const [filter, setFilter] = useState<FilterValuesType>("all")
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
        console.log(filter)
    }


    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
                filter={filter}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
