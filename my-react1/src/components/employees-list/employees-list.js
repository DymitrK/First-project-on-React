import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const  elements = data.map(item=>{
        const {id, ...itemProps} = item; // key was created
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}    //name={item.name} salary={item.salary} the same
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}  />                                 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;