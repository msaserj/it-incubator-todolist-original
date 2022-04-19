import React from 'react';

type TodolistPropsType = {
    title: string
    task: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input type="text"/>
                    <button>+</button>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" checked={props.task[0].isDone}/>
                        <span>{props.task[0].title}</span>
                    </li>
                    <li>
                        <input type="checkbox" checked={props.task[1].isDone}/>
                        <span>{props.task[1].title}</span>
                    </li>
                    <li>
                        <input type="checkbox" checked={props.task[2].isDone}/>
                        <span>{props.task[2].title}</span>
                    </li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};
