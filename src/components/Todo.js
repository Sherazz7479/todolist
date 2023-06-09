import React from "react";

const Todo = ({text, todo, todos, setTodos, setEditTodo}) => {
  //Events
  const completehandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id){
        return {
          ...item , completed: !item.completed
        }
      }
      return item;
    }))
  }

  const editHandler = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
  }

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  
  return(
    <div className="todo">  
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completehandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => editHandler(todo)} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
};

export default Todo;
