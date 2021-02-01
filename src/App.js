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
  
  deleteChar = (index) => {
    
    const charArray = this.state.string.split('')
    charArray.splice(index, 1)
    const updatedString = charArray.join('')
    this.setState({string: updatedString})
  }

  render() {
  return (
    <div className="App">
      <input onChange={((event) => this.onChange(event))}/>
      <Validation text={this.state.string} />
      {this.state.string.split('').map((char, index) => {
        console.log(char)
        return <Char char={char} 
        key={index} 
        onClick={() => this.deleteChar(index)} />
      })}
    </div>
  );
  }
}


