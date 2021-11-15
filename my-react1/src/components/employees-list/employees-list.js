import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => {

    const  elements = data.map(item=>{
        const {id, ...itemProps} = item; // key was created
        return (
            <EmployeesListItem key={id} {...itemProps} />
              //name={item.name} salary={item.salary} the same
                                                  
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;