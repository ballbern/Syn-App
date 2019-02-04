import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    const { todoCompleted } = this.props

    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      //if todo.completed true return 'line-through' else return 'none'.
      textDecoration: todoCompleted ? 'line-through' : 'none'
    }
  }

  render() {

    const {
      todoId, 
      todoTitle,
      delTodo,
      toggleComplete
    } = this.props;

    return (
      <div style={this.getStyle()}>
        <p>
          <span style={ checkBoxStyle }>
            {/* onChange pass id to Todos comp then to App comp  */}
            <input type="checkbox" onChange={ toggleComplete.bind(this, todoId) }/> 
          </span>
            { todoTitle }
          <button onClick={ delTodo.bind(this, todoId) } style={ btnStyle }>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todoId: PropTypes.number.isRequired,
  todoTitle: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const checkBoxStyle = {
  paddingRight: '20px'
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
