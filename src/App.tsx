import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {
    const todoListTitle_1 = "What to learn"
    const todoListTitle_2 = "What to buy"
    // const todoListTitle_3 = "What to read"

    const tasks_1: TaskType[] = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]
const tasks_2: TaskType[] = [
        {id: 1, title: "Milk", isDone: true},
        {id: 2, title: "Sugar", isDone: true},
        {id: 3, title: "Salt", isDone: false}
    ]

  return (
    <div className="App">
      <Todolist
          title={todoListTitle_1}
          task={tasks_1}
      />
<Todolist
          title={todoListTitle_2}
          task={tasks_2}
      />



    </div>
  );
}

export default App;
