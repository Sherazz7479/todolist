import React, {useEffect} from "react";

const Form = ({ setInputText, todos, setTodos, inputText,setStatus,editTodo,setEditTodo }) => {
  //here is Javascript code and function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const updateTodo = (text,completed,id) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {text,completed,id} : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  }

  useEffect(() => {
      if (editTodo) {
        setInputText(editTodo.text)
      } else {
        setInputText("")
      } 
  } , [setInputText,editTodo])

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!editTodo){
      if (inputText) {
        setTodos([
          ...todos , {text: inputText , completed: false , id : Math.random() * 1000}
        ]);
        setInputText("");
      } else {
        alert("Add task to the input field as a to-do")
      }
    } else {
      updateTodo(inputText, editTodo.completed, editTodo.id)

    }  
  }

  const statusHandler = (e) =>{
    setStatus(e.target.value);
}


return(
  <form>
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Enter to-do task here..."/>
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
);
};

export default Form;
