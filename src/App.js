import './App.css';
import React, { useState } from  'react';
import Task from './Components/Task/Task';
import TaskDisplay from './Components/TaskDisplay/TaskDisplay';
import { useLocalStorage } from './Components/useLocalStorage'

function App() {
  const [currentTask, setCurrentTask] = useLocalStorage( "currentTask", [] )
  
  /*
  const [currentTask, setCurrentTask] = useState( () => {
    const saved = localStorage.getItem("currentTask");
    const initialValue = JSON.parse(saved);
    console.log(initialValue);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
  }, [currentTask]);
  */

  const newTaskList = ( newTask ) => {
    let taskArray = [...currentTask];
    taskArray.push( [newTask] );
    setCurrentTask( taskArray );
  }

  const [iconTheme, setIconTheme] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle('dark-theme-variables');
    setIconTheme(!iconTheme);
  }

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <h1>
        Form with Hooks
      </h1>
      <span className='material-icons theme-toggler' onClick={changeTheme}>{iconTheme ? "light_mode" : "dark_mode"}</span>
      <Task newTaskList={ newTaskList }/>
      <TaskDisplay currentTask={ currentTask } setCurrentTask={setCurrentTask} />
    </div>
  );
}

export default App;