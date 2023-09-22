import {useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import ProjectResources from '../components/ProjectResources';
// import todosData from '../data/todosData';
import '../App.css';

function TaskHistoryPage() {
  const [todos, setTodos] = useState([]); /// array structuring

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }

  } , []);

  // add todos
  const addTodo = (e) => {
    const newTodo = {
      id: new Date(),
      text: e.target.value,
      completed: false,
      initiation: false //& added
    }
    setTodos([...todos, newTodo]);
    e.target.value = '';
    // this sets it to the local storage in applications. 'todos' is what we name it, we store an array with all of the todos (...todos) and the newTodo's
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  // complete todo function
  const completeTodo = (id) => {
    const todosCopy = [...todos]; // makes a copy of todos
    const indexOfTodo = todosCopy.findIndex(item => item.id === id)
    // todosCopy[2].completed = !todosCopy[2].completed
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    setTodos([...todosCopy]);
    localStorage.setItem('todos', JSON.stringify([...todosCopy]))
  };

  //& Initiation todo function
  const initiationTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex(item => item.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    setTodos([...todosCopy]);
    localStorage.setItem('todos', JSON.stringify([...todosCopy]))
  };

  const editTodoText = (id,e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex(item => item.id === id);
    todosCopy[indexOfTodo].text = e.target.value;
    setTodos([...todosCopy]);
    e.target.value = ''; // this clears the value
    localStorage.setItem('todos', JSON.stringify([...todosCopy]));
  };

  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo=todosCopy.findIndex(item=>item.id === id);
    todosCopy.splice(indexOfTodo, 1)
    setTodos([...todosCopy])
    localStorage.setItem('todos', JSON.stringify([...todosCopy]));
  };

  return (
    <div className="listContainers">
      {/* <h1>To-Do's App</h1> */}
      <div className="allContainers">
        <div className="taskContainer">
          <TodoList 
            todos={tasks} 
            addTodo={addTodo}
            completeTodo={completeTodo}
            initiationTodo={initiationTodo}
            editTodoText={editTodoText}
            deleteTodo={deleteTodo}
          />
        </div>
        {/* added here */}
        <div className="taskContainer">
          <ProjectResources 
            todos={todos} 
            addTodo={addTodo}
            completeTodo={completeTodo}
            initiationTodo={initiationTodo}
            editTodoText={editTodoText}
            deleteTodo={deleteTodo}
          />
        </div>

      </div>
      <div className="messageContainer">
        <div className="messageBox">
          <h1>Message Box</h1>
          <section className="messages">

          </section>
        </div>
      </div>
      
    </div>
  );
}

// export default App;





// function NewOrderPage() {
//     return (
//       <div>
//         <h1>New Order Page</h1>
//       </div>
//     );
//   }
  
  export default TaskHistoryPage;