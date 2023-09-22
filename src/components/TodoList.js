import Todo from './Todo';
import '../App.css';

function TodoList(props) {
    const { todos, addTodo, completeTodo, initiationTodo, editTodoText, deleteTodo } = props;  // object structuring

    console.log("FROM TODOLIST", todos);

    return (
        <div classname="taskContainer">
            <h2>Create a New Task</h2>
            {/* CREATE NEW TODO INPUT  */}
            <input type = "text"
                onKeyDown={(e) => e.key === 'Enter' && addTodo(e)}
            />

            {/* MAPPING OVER DATA  */}
            {todos.length ? (
                <>
                    <h2>Task List</h2>
                    
                    {/* PEDNING TODOS, TODOS THAT ARE NOT COMPLETED  */}
                    <ul>
                        {todos
                            .filter((item) => !item.completed) 
                            .map((item) => (
                                <Todo 
                                key={item.id}
                                todo={item} 
                                completeTodo={completeTodo} // renders a new instance of the todo function
                                initiationTodo={initiationTodo}
                                editTodoText={editTodoText} 
                                deleteTodo={deleteTodo}
                                />
                            ))}
                    </ul>

                    <h2>Completed To-Do's</h2>
                    {/* COMPLETED TODOS  */}
                    <ul>
                        {todos
                            .filter((item) => item.completed) 
                            .map((item) => (
                                <Todo
                                key={item.id}
                                todo={item} 
                                completeTodo={completeTodo}
                                initiationTodo={initiationTodo}
                                editTodoText={editTodoText}
                                deleteTodo={deleteTodo}
                                /> // passes the function
                        ))}
                    </ul>
                </>
            
            ) : (
                <h2>No To-Do's</h2>
            )}       
        </div>
    );
}

export default TodoList;