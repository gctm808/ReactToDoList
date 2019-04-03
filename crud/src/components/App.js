import React, { Component } from 'react';
import List from './List'
import { EventEmitter } from 'events';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: ['eggs', 'milk'],
      newTerm: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onChange(eventInput){
    this.setState({
      newTerm: eventInput.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()
    this.setState(prevState => ({
      newTerm: '',
      list: [...prevState.list, this.state.newTerm]
    }))
  }

  onDelete(item){
    this.setState({
      list: this.state.list.filter(listItems => listItems !== item)
    })
  }

  render() {
    return (
      <div>
        <h1>CRUD To-do App</h1>
        <List items={this.state.list} removeItem={this.onDelete}/>
        <form onSubmit={this.onSubmit}>
          <input 
            value={this.state.newTerm}
            onChange={this.onChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
