import { useState } from "react";
import ToDoActions from "./ToDoActions";

const ToDoItem=({task,deleteById,editById})=>{
    const [open,setOpen]=useState(false);
    const onDelete=()=>{
        deleteById(task.id);
    }

    const onEdit=()=>{
        setOpen(!open);
    }

    const handleSubmit=(id,newName)=>{
        setOpen(false);
        editById(id,newName);
    }

    let content=<h3>{task.name}</h3>

    if(open){
        return<ToDoActions task={task} onSubmit={handleSubmit}/>
    }
    return(
        <div>
            {content}
            <button onClick={onDelete}>Borrar</button>
            <button onClick={onEdit}>Editar</button>
        </div>
    );
}
export default ToDoItem;