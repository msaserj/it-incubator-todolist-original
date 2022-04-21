import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList = (props: TodolistPropsType) => {
    //локальный стейт
    const [title, setTitle] = useState<string>("")
    // триммирование пробелов
    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        }
        setTitle("")
    }

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onClickAddTask()
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const changeFilter = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }



    // map позволяет преобразовать массив элементов одного типа в масси элементов jsx
    const tasksListItems = props.tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => {
                    props.removeTask(t.id)
                }}>X
                </button>
            </li>
        )
    })
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input
                        value={title}
                        onChange={onChangeSetTitle}
                        onKeyPress={onKeyPressAddTask}
                    />
                    <button onClick={onClickAddTask}>+</button>
                </div>
                <ul>
                    {tasksListItems}
                </ul>
                <div>
                    <button onClick={changeFilter("all")}>All</button>
                    <button onClick={changeFilter("active")}>Active</button>
                    <button onClick={changeFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
};
