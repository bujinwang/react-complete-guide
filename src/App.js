import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: "Stephanie", age: 26}
    ]
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      font: 'inhert',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>
        <Person
          changed={this.nameChanged}
          clickHandler={() => {
            this.switchName('Burt')
          }}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>My hobby this swimming
        </Person>
        < Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby this swimming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobby this swimming</Person>
      </div>);
    }
    return (
      <div className="App">
        <h1>Hi, this is my first react!</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }

  switchName = (newName) => {

    let p = this.state.persons[0];
    this.setState({
      persons: [
        {name: newName, age: 29},
        {name: 'Max', age: 28},
        {name: "Stephanie", age: 26}
      ],
      otherState: "test",
      showPersons: false
    });
    console.log('switch name clicked ' + p.name);
  }

  nameChanged = (event) => {

    let p = this.state.persons[0];
    this.setState({
      persons: [
        {name: event.target.value, age: 29},
        {name: 'Max', age: 28},
        {name: "Stephanie", age: 26}
      ],
      otherState: "test"
    });
    console.log('switch name clicked ' + p.name);
  }

  togglePersonHandler = () => {
    const showperson = this.state.showPersons;
    this.setState({
      showPersons:
        !showperson
    });
  }
}

export default App;
