import React, { Component } from 'react';
import '../css/App.css';

class SemProps extends Component {
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
        <h1>To-Do List Sem Props</h1>
        <form>
          <input
            className="todo-input"
            type="text"
            placeholder="Digite uma tarefa"
            name="todoInput"
            value={ todoInput }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            className="btn"
            onClick={ (event) => this.handleClick(event, todoInput) }
          >
            Criar Tarefa
          </button>
        </form>

        <section className="todo-list">
          {
            todoList.map((tarefa, index) => (
              <div key={ index } className="todo-card">
                <div className="content">
                  <input
                    type="checkbox"
                    name="todoCheck"
                    checked={ todoCheck }
                    onChange={ this.handleChange }
                  />
                  <p
                    className={ todoCheck ? 'todo-checked' : 'todo-non-checked' }
                  >
                    { tarefa }
                  </p>
                </div>
                <button
                  className="btn"
                  onClick={ () => this.handleDelete(index) }
                >
                  Deletar
                </button>
              </div>
            ))
          }
        </section>
      </>
    );
  }
}

export default SemProps;
