import {useState} from 'react';
import {createTask} from '../utilities/tasks-service';
// import * as usersService from '../utilities/users-service';

// grabbed from twitter-app/views/New.jsx

function NewTask() {
    const [newTask, setNewTask] = useState({
      text:"",
      stage:"initiation"
    })

    const handleChange = (e) => {
      setNewTask({
          ...newTask,
          [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault()
      const task = await createTask(newTask);
      console.log(task)
    }

    return (
      <div className="flex justify-center p-4 bg-blue-600">
        <div>
          <h2>Create a Task</h2> 
              {/* action points to where the POST data will be sent */}
          <form className="formContainer" onSubmit={handleSubmit}> 
            
            <div className="newTaskFormContainer">
              Task: <input type="text" name="text" value={newTask.text} onChange={handleChange} />
            </div>

            <select name="stage" value={newTask.stage} onChange={handleChange}>
              <option value="initiation">Initiation</option>
              <option value="planning">Planning</option>
              <option value="execution">Execution</option>
              <option value="closing">Closing</option>
            </select>

            <div>
              <input type="submit" value="Submit"/>
            </div>

          </form>
        </div>
      </div>
    );
  }
  
  export default NewTask;