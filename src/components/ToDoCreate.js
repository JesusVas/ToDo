import { useState } from "react";

const ToDoCreate=({submitTask})=>{
    const [name,setName]=useState("");
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        submitTask(name);
        setName("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleChange}/>
                <button>Agregar tarea</button>
            </form>
        </div>
    );
}
export default ToDoCreate;