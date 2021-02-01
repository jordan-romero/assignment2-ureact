import React, { Component } from 'react'

import './App.css';

export default class App extends Component {

  state = {
    string: '',
  }

  onChange = (event) => {
    let string = {...this.state.string}
    string = event.target.value
    this.setState({string: string})
  }
  render() {
    console.log(this.state)
  return (
    <div className="App">
      <input onChange={((event) => this.onChange(event))}/>
    </div>
  );
  }
}


