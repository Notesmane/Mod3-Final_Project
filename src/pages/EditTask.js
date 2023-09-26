import {useState, useEffect } from 'react';
import {editTask} from '../utilities/tasks-service';
import * as taskService from '../utilities/tasks-service';
import {useParams, useNavigate} from 'react-router-dom';


// import * as usersService from '../utilities/users-service';

// grabbed from twitter-app/views/New.jsx

function EditTask() {
  const {id} = useParams() 
  const navigate = useNavigate()
  console.log(id)
   
    const [task, setTask] = useState(null)

    const handleChange = (e) => {
      setTask({
          ...task,
          [e.target.name]: e.target.value,
      });
    };

    useEffect(() => {
      const getTaskById= async () => {
          const task = await taskService.getTaskById(id)
          setTask(task)
        console.log(task)
      };
      getTaskById()
    }, [])
    console.log(task)

    const handleSubmit = async (e) => {
      e.preventDefault()
      const updatedTask = await editTask(id, task);
      console.log(updatedTask)
      navigate(`/orders/${task.stage}`)
    }

    return (
      <div className="flex justify-center p-4 bg-blue-600">
        <div>
          <h1>Edit Task</h1> 
              {/* action points to where the POST data will be sent */}
          {task && <form className="formContainer" onSubmit={handleSubmit}> 
            
            <div className="newTaskFormContainer">
              Task: <input type="text" name="text" defaultValue={task?.text} onChange={handleChange}/>
            </div>

            <select name="stage" defaultValue={task?.stage} onChange={handleChange} style={{color:'black'}}>
              <option value="initiation">Initiation</option>
              <option value="planning">Planning</option>
              <option value="execution">Execution</option>
              <option value="closing">Closing</option>
            </select>

            <div>
              <input type="submit" value="Submit"/>
            </div>

          </form>}
        </div>
      </div>
    );
  }
  
  export default EditTask;