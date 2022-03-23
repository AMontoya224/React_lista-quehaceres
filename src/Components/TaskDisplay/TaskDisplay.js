import './TaskDisplay.css';
import { useLocalStorage } from '../useLocalStorage'


const TaskDisplay = ( props ) => {
    const [checked, setChecked] = useLocalStorage( "checked", [] )
    
    const handleCheck = ( e ) => {
        let updatedList = [...checked];
        if ( e.target.checked ) {
            updatedList = [...checked, e.target.value];
        }
        else {
            updatedList = updatedList.filter( i => i !== e.target.value )
        }
        setChecked( updatedList );
    };

    let isChecked = ( item ) => checked.includes( String( item ) ) ? "checked-item" : "not-checked-item";

    let deleteTask = ( item ) => {
        let deleteChecked = [...checked];
        deleteChecked = deleteChecked.filter( i => i !== String( item ) );
        setChecked(deleteChecked);
        props.setCurrentTask(props.currentTask.filter( i => i !== item ));
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
                    <input className='input-checkbox' value={item} type="checkbox" checked={checked.includes( String( item ))} onChange={handleCheck} />
                    <button className='delete' type='button' onClick={() => deleteTask(item)}>Delete</button>
                </div> )
                }
            </div>
            <div className='finalizados'>
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