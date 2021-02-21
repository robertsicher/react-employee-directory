import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';

export default class PersonList extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=20')
    .then(res => {
      this.setState({ results: res.data.results});
    })
  }
  render () {
       console.log(this.state.results, 'this.state')
       return (this.state.results.map(result => 
      <div class="card col-4 m-1 justify-content-center text-center" style={{width: 18 +'rem'}}>
        <img src={ result.picture.large } alt="Staff profile picture" class="mx-auto" width="200" height="200"></img>
        <h5 class="card-title">{ result.name.first } { result.name.last }</h5>
        <p class="card-text mb-1"><i class="fas fa-envelope"></i> { result.email }</p>
        <p class="card-text mb-1"><i class="fas fa-phone-alt"></i> { result.cell }</p>
        <p class="card-text mb-1">Gender: { result.gender } | Age: { result.registered.age }</p>
      </div>
      )) ; }
      
}





