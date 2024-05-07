import { useState } from "react";
import ToDoCreate from "./components/ToDoCreate";
import ToDoRecord from "./components/ToDoRecord";
let i=0;
const App=()=>{
    const [tasks,setTasks]=useState([])
    const createTask=(t)=>{
        const updatedTask=[
            ...tasks,{id:i++,name:t}
        ]
        setTasks(updatedTask);
        console.log("the task is: "+t);
    }
    tasks.map((task)=>{
        console.log(task);
    })
    return(
        <div>
            App
            <ToDoCreate submitTask={createTask}/>
            <ToDoRecord/>
        </div>
    );
}
export default App;