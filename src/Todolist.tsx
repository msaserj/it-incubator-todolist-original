import React from 'react';
import {FilterValuesType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: TodolistPropsType) => {
 // map позволяет преобразовать массив элементов одного типа в масси элементов jsx
    const tasksListItems = props.tasks.map(t => {
        return(
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={()=>{props.removeTask(t.id)}}>X</button>
            </li>
        )
    })
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input type="text"/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksListItems}
                </ul>
                <div>
                    <button onClick={() => props.changeFilter("all")}>All</button>
                    <button onClick={() => props.changeFilter("active")}>Active</button>
                    <button onClick={() => props.changeFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
};
