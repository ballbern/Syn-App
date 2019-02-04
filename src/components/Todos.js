import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem 
        key={ todo.id } 
        todoId={ todo.id }
        todoCompleted={ todo.completed }
        todoTitle={ todo.title } 
        toggleComplete={ this.props.toggleComplete } 
        delTodo={ this.props.delTodo } />
    ));
  }
}

Todos.propTypes = {
  todoTitle: PropTypes.string,
  todoCompleted: PropTypes.bool,
  todoId: PropTypes.string,
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;