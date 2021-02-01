import React, { Component } from 'react'
import Validation from './components/Validation'
import Char from './components/Char'

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

  charHandler = () => {
    this.state.string.map(char => {
      return <Char char={char}/>
    })
  }

  render() {
    console.log(this.state)
  return (
    <div className="App">
      <input onChange={((event) => this.onChange(event))}/>
      <Validation text={this.state.string} />
      charHandler()
    </div>
  );
  }
}


