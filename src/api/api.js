import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';

export default class PersonList extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log(res, 'results')
      this.setState({ results: res.data});
    })
  }
  col
  render() {
    return (
    <ul>
      { this.state.results.map(result => <li>{result.name}</li>)}
    </ul>);
    }
}
