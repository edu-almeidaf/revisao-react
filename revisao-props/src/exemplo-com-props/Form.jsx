import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { todoInput, handleChange, handleClick } = this.props;
    return (
      <form>
        <input
          className="todo-input"
          type="text"
          placeholder="Digite uma tarefa"
          name="todoInput"
          value={ todoInput }
          onChange={ handleChange }
        />
        <button
          className="btn"
          type="submit"
          onClick={ (event) => handleClick(event, todoInput) }
        >
          Criar Tarefa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  todoInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Form;
