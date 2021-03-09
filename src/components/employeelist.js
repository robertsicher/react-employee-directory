import React from 'react';
import { Row } from 'react-bootstrap';
import EmployeeCard from './employeecard';

const EmployeeList = (props) => {
    return(
            <Row className="justify-content-center">
            {
                props.employee.map((employee, i) => {
                    return <EmployeeCard 
                                    image={employee.picture.large}
                                    firstName={employee.name.first}
                                    lastName={employee.name.last}
                                    email={employee.email}
                                    phone={employee.cell}
                                    gender={employee.gender}
                                    age={employee.registered.age}

                                    />
                })
            }
            </Row>
    )
}

export default EmployeeList