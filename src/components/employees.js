import React, {Component} from 'react';
import '../styles.css';
import axios from 'axios';
import EmployeeList from './employeelist';
import { Container } from 'react-bootstrap';
import Searchbar from './searchbar';

export default class Employees extends Component {

  constructor(props){
    super(props);
      this.state = {
          employee: [],
          filteredEmployee:[],
          sort: 'asc',
      }
  }

  handleSort = (category) => {
  if (this.state.sort === "des") {
    this.setState({ sort: "asc" });
  } else {
    this.setState({ sort: "des" });
  }

  const compareEmployeesNames = (a, b) => {
    if (this.state.sort === "asc") {
       if (category === "name") {
        return a[category].first.localeCompare(b[category].first);
      } 
    } else {
       if (category === "name") {
        return b[category].first.localeCompare(a[category].first);
      }}
  };
  const usersSorted = this.state.filteredEmployee.sort(compareEmployeesNames);
  this.setState({ filteredEmployee: usersSorted });
};

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=20&nat=gb')
    .then(res => {
      this.setState({ 
          employee: res.data.results,
          filteredEmployee: res.data.results,
        });
      console.log(res.data.results)
    });
  }

  searchFilter = (e) => {
    const filter = e.target.value;
    const filteredEmployeeList = this.state.employee.filter((employees) => {
      let employeeValues = Object.values(employees).join("").toLowerCase();
      return employeeValues.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployee: filteredEmployeeList });
  };

    render() {
        return (
            <Container className="justify-content-center">
                <Searchbar handleSort={this.handleSort} searchFilter={this.searchFilter}/>
                <EmployeeList employee={this.state.filteredEmployee}/>
            </Container>
        )
    }
}