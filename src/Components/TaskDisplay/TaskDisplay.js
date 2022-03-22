import React, { useState } from  'react';
import './TaskDisplay.css';



const TaskDisplay = ( props ) => {
    const [checked, setChecked] = useState( [] );
    
    const handleCheck = ( e ) => {
        let updatedList = [...checked];
        if ( e.target.checked ) {
            updatedList = [...checked, e.target.value];
        }
        else {
            updatedList.splice( checked.indexOf( e.target.value ), 1 );
        }
        setChecked( updatedList );
    };

    let isChecked = ( item ) => checked.includes( String( item ) ) ? "checked-item" : "not-checked-item";

    let deleteTask = ( item ) => {
        props.setCurrentTask(props.currentTask.filter(i => i !== item));
    }

    const checkedItems = checked.length ? checked.reduce((total, item) => {
        return total + ", " + item; }) : "";
  
    return (
        <div>
            <div className='container'>
                {
                props.currentTask.map( ( item, i ) => 
                <div key={ i } className='task-container'>
                    <span className={isChecked(item)}>{item}</span>
                    <input className='input-checkbox' value={item} type="checkbox" onChange={handleCheck} />
                    <button className='delete' type='button' onClick={() => deleteTask(item)}>Delete</button>
                </div> )
                }
            </div>
            <div>
                <h2>
                    Quehaceres finalizados:
                </h2>
                <p>
                    {checkedItems}
                </p>
            </div>
        </div>
    );
};

export default TaskDisplay;