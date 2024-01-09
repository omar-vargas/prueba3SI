import { useContext, useState } from "react"
import {TaskContext} from './context/TaskContext'
function TaskForm(){
const [title,setTitle]= useState('')
const [descripcion,setDescripcion]= useState('')
const {createTask} = useContext(TaskContext)

const HandleSumbit = (e) => {
    e.preventDefault();
    const newTask = {
        title 
    }
    console.log(newTask)
    createTask({title,descripcion})

};
    return (
            <div className="max-w-md mx-auto**"> Agregar Tareas
                    <form onSubmit={HandleSumbit} className= 'bg-slate-800 p-10 mb-4'> 
                        <input placeholder="inscribe tu tarea"
                        onChange={function(e){setTitle(e.target.value)}}
                        value={title}
                        className='bg-slate-300 p-3 w-full mb-2'
                        autoFocus
                        
                        ></input>
                        <textarea placeholder="Escribe la descripcion y el estado de la tarea" onChange={function(e){setDescripcion(e.target.value)}}
                         value={descripcion}>
                       

                        </textarea>
                        <button className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
                    </form>


            </div>


    )
}
export default TaskForm