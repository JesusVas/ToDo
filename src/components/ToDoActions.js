import { useState } from "react";

const ToDoActions=({task,onSubmit})=>{
    const[name,setName]=useState(task.name);
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(task.id,name);
    }

    const handleChange=(e)=>{
        setName(e.target.value);
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={name}/>
            <button>Guardar</button>
        </form>
    );
}
export default ToDoActions;