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
      console.log(res.data.results[0].name.first, 'results')
      this.setState({ results: res.data});
    })
  }
  render() {
    console.log(this.state.results, 'this.state')
    return (
    <ul>
      { this.state.results[0] !== undefined ?
 (this.state.results.map(result => <li>{result.first}</li>)):(<></>)}
    </ul>);
    }
}

