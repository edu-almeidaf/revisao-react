import React, { Component } from 'react';
import '../css/App.css';
import Form from './Form';
import ToDo from './ToDo';

class ComProps extends Component {
  state = {
    todoInput: '',
    todoList: [],
    todoCheck: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event, todoInput) => {
    event.preventDefault();
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, todoInput],
      todoInput: '',
    }));
  };

  handleDelete = (indexToRemove) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((_tarefa, index) => index !== indexToRemove),
    });
  };

  render() {
    const { todoInput, todoList, todoCheck } = this.state;
    return (
      <>
        <h1>To-Do List Com Props</h1>
        <Form
          todoInput={ todoInput }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />

        <ToDo
          todoList={ todoList }
          todoCheck={ todoCheck }
          handleChange={ this.handleChange }
          handleDelete={ this.handleDelete }
        />
      </>
    );
  }
}

export default ComProps;
