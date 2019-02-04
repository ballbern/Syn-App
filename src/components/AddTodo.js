import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    //destructor
    const { title } = this.state
    const { addTodo } = this.props
    //

    e.preventDefault();
    addTodo( title );
    this.setState({ title: '' });
  }

  //get value from title input and update title state onChange.
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {

    const {
      title
    } = this.state

    const { 
      onSubmit, 
      onChange 
    } = this

    return (
      <form onSubmit={ onSubmit } style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..." 
          value={ title }
          onChange={ onChange }
        />

        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
