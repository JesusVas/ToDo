import { useEffect, useState } from "react";
import ToDoCreate from "./components/ToDoCreate";
import ToDoRecord from "./components/ToDoRecord";
import axios from "axios";

const App=()=>{
    const [tasks,setTasks]=useState([])

    const fetchData=async()=>{
        const response=await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
    }

    useEffect(()=>{
        fetchData();
    },[])

    const createTask=async(name)=>{
        const response=await axios.post('http://localhost:3001/tasks',{
            name,
        })
        const updatedTask=[
            ...tasks,response.data,
        ]
        setTasks(updatedTask);
        console.log("the task is: "+response.data.name);
    }

    const deleteById=async(id)=>{
        await axios.delete(`http://localhost:3001/tasks/${id}`)
        const updatedList=tasks.filter((task)=>{
            return task.id!==id;
        })
        setTasks(updatedList);
    }

    const editById=async(id,newName)=>{
        const response=await axios.put(`http://localhost:3001/tasks/${id}`,{
            name:newName,
        })
        const updatedList=tasks.map((task)=>{
            if(task.id===id){
                return{...task,...response.data};
            }
            return task;
        })
        setTasks(updatedList);
    }

    return(
        <div>
            To Do List
            <ToDoCreate submitTask={createTask}/>
            <ToDoRecord tasks={tasks} deleteById={deleteById} editById={editById}/>
        </div>
    );
}
export default App;