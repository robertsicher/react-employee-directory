import React, {Component} from 'react';
import '../styles.css';
import axios from 'axios';
import EmployeeList from './employeelist';
import Filtergroup from './filtergroup';
import { Container } from 'react-bootstrap';

class Employees extends Component {

    constructor(props){
        super(props);
        this.state = {
            employee: [],
            sort: '',
        }
    }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=20')
    .then(res => {
      this.setState({ employee: res.data.results});
      console.log(res.data.results)
    })
  }

  handleSort = (e) =>{
      console.log(e.target.value)
      this.setState({sort: e.target.value})
  }
  

    render() {
        const sortedEmployees = this.state.employee.sort((a,b) => {
            if(this.state.sort === 'Youngest' ) {
                return parseInt(a.registered.age.subString(0,1)) - parseInt(b.registered.age.subString(0,1))
            }
            else if (this.state.sort === 'Oldest' ) {
                return parseInt(b.registered.age.subString(0,1)) - parseInt(a.registered.age.subString(0,1))
            }
        })

        return (
            <Container className="justify-content-center">
                <Filtergroup handleSort={this.handleSort}/>
                <EmployeeList employee={sortedEmployees}/>
            </Container>
        )
    }
}

export default Employees; 