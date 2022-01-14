import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeService from '../services/EmployeeService';


class ListEmployeesComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {

            employees: [ ]

        }
        //Binding methods / eventhandlers function to Constructor
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);

    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        });
    }
    //Add -  Navigating to add user page
     addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    //edit -  Navigaing to edit page
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);

    }
   

    render() {
        return (
            <div> 
                <h2 className='text-center'>Employee List</h2>
                <div className = "btn"> 
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
        
                <div className='row'>
                <table className='table table-striped table-bordered'>
  
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.employees.map (
                            employee => 
                                <tr key = {employee.id}>

                                    <td> {employee.firstName} </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.emailId} </td>
                                    <td>
                                        <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>

                                    </td>

                                </tr>
                            
                        )
                    }
                
                </tbody>
                </table>
                </div>
            </div>
        );
    }
}
 
export default ListEmployeesComponent;
