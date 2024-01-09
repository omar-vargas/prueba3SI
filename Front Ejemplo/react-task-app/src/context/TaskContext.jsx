import { createContext,useState ,useEffect} from "react"
import{tareas} from '../task'
export const TaskContext= createContext()

export function TaskContextProvider(props) {
    const [tasks,setTasks]= useState([])
    function createTask (task){
        setTasks([...tasks,{
          title: task.title
          ,id:tasks.length,
          descripcion : task.descripcion
      
      
        }])
      }


      
function deleteTask(taskId){
    setTasks( tasks.filter(task=>task.id!==taskId))
  }

  useEffect(()=>{
    setTasks(tareas)
},[])


    return(
       <TaskContext.Provider value={{tasks:tasks,
       deleteTask: deleteTask,
       createTask:createTask}}>
        {props.children}
       </TaskContext.Provider>
    )

}
