import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDo extends Component {
  render() {
    const { todoList, todoCheck, handleChange, handleDelete } = this.props;
    return (
      <section className="todo-list">
        {
          todoList.map((tarefa, index) => (
            <div key={ index } className="todo-card">
              <div className="content">
                <input
                  type="checkbox"
                  name="todoCheck"
                  checked={ todoCheck }
                  onChange={ handleChange }
                />
                <p className={ todoCheck ? 'todo-checked' : 'non-checked' }>{ tarefa }</p>
              </div>
              <button
                className="btn"
                onClick={ () => handleDelete(index) }
              >
                Deletar
              </button>
            </div>
          ))
        }
      </section>
    );
  }
}

ToDo.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.string).isRequired,
  todoCheck: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDo;
