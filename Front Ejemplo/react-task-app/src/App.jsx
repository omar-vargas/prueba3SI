import TaskList from "./Task.List" 
import TaskForm from "./TaskForm"


function App(){
 



  return (
    <main className="bg-zing-900 h-screen">
      <div className="container mx-auto ">
      <TaskList />
      <TaskForm />
    </div>
    </main>
  )
}
export default App