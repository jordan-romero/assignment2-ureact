import logo from './logo.svg';
import './App.css';

function App() {

  state = {
    string: ''
  }

  onChange = (event) => {
    const string = {...this.state.string}
    string = event.target.value
    this.setState({string: string})
  }

  return (
    <div className="App">
      <input onChange={((event) => this.onChange(event))}/>
    </div>
  );
}

export default App;
