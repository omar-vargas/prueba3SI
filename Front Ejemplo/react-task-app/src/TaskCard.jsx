
import {useContext} from 'react';
import {TaskContext}from './context/TaskContext'
function TaskCard({task,deleteTask}) {

    const valor = useContext(TaskContext)

function mostarAlerta(){
      task= task.filter()
}

return(
    
        <div className="bg-gray-800 text-white p-4 rounded-md">
                       <h1 className='text-1 font-bold capitalize'>{task.title}</h1>
                       <p className='textgray-500 textsm'>{task.descripcion}</p>

                       <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={()=>deleteTask(task.id)}>
                        Eliminar Tarea
                    </button>
                    </div>
              



);



}
export default TaskCard
