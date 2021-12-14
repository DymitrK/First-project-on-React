import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in company</h1>
            <h2>Total number of employees: {employees} </h2>
            <h2>Bonus will receive: {increased} </h2>


        </div>
    )
}
export default AppInfo;