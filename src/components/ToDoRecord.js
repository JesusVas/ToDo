
import ToDoItem from "./ToDoItem";
const ToDoRecord=({tasks,deleteById,editById})=>{
    const renderedToDo=tasks.map((task)=>{
        return <ToDoItem key={task.id} task={task} deleteById={deleteById} editById={editById}/>
    })
    return(
        <div>
            
            {renderedToDo}
        </div>
    );
}
export default ToDoRecord;