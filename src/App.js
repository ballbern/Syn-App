import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Details from './components/pages/Details';
import './App.css';
// https://github.com/axios/axios
import axios from 'axios';

// https://github.com/kelektiv/node-uuid#readme
// import uuid from 'uuid';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    //fetch todo data from https://jsonplaceholder.typicode.com/
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    const { todos } = this.state
    //delete todo using filter func
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] });

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    const { todos } = this.state
    //add new todo to list
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }

    // this.setState({ todos: [...this.state.todos, newTodo] })

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...todos, res.data] }));
  }

  render() {

    const { 
      todos 
    } = this.state

    const { 
      addTodo,
      toggleComplete,
      delTodo 
    } = this

    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header />

            <Route exact path = "/" render = { props => (
              <Fragment>
                <AddTodo 
                  addTodo={ addTodo } />

                <Todos 
                  todos={ todos } 
                  toggleComplete={ toggleComplete } 
                  delTodo={ delTodo } />
              </Fragment>
            )} />
            
            <Route 
              path="/about" 
              component={ About } />

            <Route 
              path="/details" 
              component={ Details } />

          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
