import {useState, useEffect } from 'react';
import {createTask} from '../utilities/tasks-service';
import * as taskService from '../utilities/tasks-service';
import {useParams} from 'react-router-dom';

// import * as usersService from '../utilities/users-service';

// grabbed from twitter-app/views/New.jsx

function EditTask() {
  const {id} = useParams() 
  console.log(id)
    const [editTask, setEditTask] = useState({
      text:"",
      stage:"initiation"
    
    })

    const [task, setTask] = useState(null)

    // const handleChange = (e) => {
    //   setEditTask({
    //       ...editTask,
    //       [e.target.name]: e.target.value,
    //   });
    // };

    useEffect(() => {
      const getTaskById= async () => {
          const task = await taskService.getTaskById(id)
          setTask(task)

      };
      getTaskById()
    }, [])
    console.log(task)

    // const handleSubmit = async (e) => {
    //   e.preventDefault()
    //   const task = await createEditTask(editTask);
    //   console.log(task)
    // }

    return (
      <div className="taskContainer">
        <div>
          <h1>Edit Task</h1> 
              {/* action points to where the POST data will be sent */}
          <form className="formContainer"> 
            
            <div className="newTaskFormContainer">
              Task: <input type="text" name="text"/>
            </div>

            <select name="stage" >
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
  
  export default EditTask;