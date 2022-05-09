import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {Fullinput} from "./components/Fullinput";

export type FilterValuesType = "all" | "active" | "completed";
type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    const editTodolist = (todolistID: string, newTitle: string) => {
        setTodolists(todolists.map(el=>el.id===todolistID ? {...el, title:newTitle}: el))
    }
    
    const addTodoList = (newTitle: string) => {
        let newID = v1()
        let newTodoList: todolistsType = {id: newID, title: newTitle, filter: 'all'}
        setTodolists([...todolists, newTodoList])
        setTasks({...tasks, [newID]:[]})
    }
    
    const removeTodolist = (todolistID: string) => {
      setTodolists(todolists.filter(el=>el.id !== todolistID))
        // delete tasks from memory
        delete tasks[todolistID]

    }
    function removeTask(todolistID: string, taskId: string) {
       setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el=>el.id !== taskId)})
    }
    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: true}
        setTasks({...tasks, [todolistID]:[newTask, ...tasks[todolistID]]})

    }
    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]:tasks[todolistID].map(el=>el.id === taskId ? {...el, isDone} : el)})

    }
    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
    }

    return (
        <div className="App">
            <Fullinput callBack={addTodoList}/>
            {
                todolists.map((el) => {
                    let tasksForTodolist
                    switch (el.filter) {
                        case "active":
                            tasksForTodolist = tasks[el.id].filter(t => !t.isDone)
                            break
                        case "completed":
                            tasksForTodolist = tasks[el.id].filter(t => t.isDone)
                            break
                        default:
                            tasksForTodolist = tasks[el.id];
                    }
                    return (
                        <Todolist
                            id={el.id}
                            key={el.id}
                            todolistID={el.id}
                            title={el.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={el.filter}
                            removeTodolist={removeTodolist}
                            editTodolist={editTodolist}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
