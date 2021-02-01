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
    this.state.string.split('').map(char => {
      console.log(char)
      return <Char char={char} />
    })
  }

  render() {
  return (
    <div className="App">
      <input onChange={((event) => this.onChange(event))}/>
      <Validation text={this.state.string} />
      {this.state.string.split('').map(char => {
        console.log(char)
        return <Char char={char} />
      })}
    </div>
  );
  }
}


