import React, { useEffect } from 'react'
import TaskCard from './TaskCard'
import {useContext} from 'react'
import { TaskContext } from './context/TaskContext'

function TaskList(){
const {tasks,deleteTask}= useContext(TaskContext)

    return(
        <div className="grid grid-cols-4 gap-2">
            { tasks.map((task)=>( <TaskCard  key={task.id} task={task} deleteTask={deleteTask}/> 
            ))}
        </div>
    )

}
export default TaskList