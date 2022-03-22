import React, { useState } from  'react';
import './Task.css';



const Task = ( props ) => {
    const [taskName, setTaskName] = useState('');
    const [taskNameError, setTaskNameError] = useState('  ');
    
    const createTask = ( e ) => {
        e.preventDefault();
        const newTask = { taskName };
        setTaskName( () => newTask['taskName'] );
        setTaskNameError('  ');
        props.newTaskList( taskName );
    };

    const handleTaskName = ( e ) => {
        setTaskName(e.target.value);
        ( e.target.value.length === 0 || e.target.value.length > 3 ) ? setTaskNameError(' ') :
                             setTaskNameError( 'The task name must have at least 3 characters.' );
    };

    return(
        <div className='form'>
            <form onSubmit={ createTask }>
                <div className='inp-container'>
                    <label htmlFor='taskName' className='inp'>
                        <input type='text' id='taskName' className='inp-input' placeholder=' ' value={taskName} onChange={handleTaskName} />
                        <span className='inp-label'>Task</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{taskNameError}</p>
                    </label>
                </div>
                <button type={(taskNameError.length > 1 ) ? 'reset' : 'submit'} className={(taskNameError.length > 1 ) ? 'submit not-submit' : 'submit'}>
                    Add
                </button>
            </form>
        </div>
    );
};
    
export default Task;