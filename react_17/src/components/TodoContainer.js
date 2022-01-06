import React from "react";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  /*
  handleChange = (id) => {todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
       
       return todo;     }      
  }
    console.log("clicked", id);
  };
  */
 handleChange = id => {
    this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          }),
        }
      }
    )};

    delTodo = id => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });
      };

  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <TodosList 
            todos={this.state.todos} 
            handleChangeProps={this.handleChange} 
            deleteTodoProps = { this.delTodo }
        />
      </div>
    );
  }
}
export default TodoContainer;
