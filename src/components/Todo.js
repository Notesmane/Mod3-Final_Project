import {useState} from 'react';

function Todo(props) {
    const {todo, completeTodo, initiationTodo, editTodoText, deleteTodo} = props; // this destructures todo

    // showInput is the useState and setShowInput is the function of the useState
    const [showInput, setShowInput] = useState(false); // this initializes it to false
    return (
        <div>
            {/* // this line renders the text */}
            <li onClick={() => setShowInput(!showInput)}>{todo.text}</li> 
            {/* EDIT TEXT INPUT  */}
            <input type = "text"
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        editTodoText(todo.id, e);
                        setShowInput(false); 
                    }
                }} 
                // below shows: is showInput true (the question mark) or fasle (the colon, which is actuall 'else') if its true, display block if its false display none, this is conditional rendering
                // the yellow brakcets is a literary object
                style={{display: showInput ? 'block' : 'none'}}
                />
                {/* CHECK INPUT  */}
            <label>
                Complete
                <input 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => completeTodo(todo.id)}
                />
            </label>
            <label>
                Initiation
                <input 
                    type="checkbox"
                    checked={todo.initiation}
                    onChange={() => initiationTodo(todo.id)}
                />
            </label>
                {/* DELETE BUTTON  */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default Todo;