import {useState} from 'react';
import {createTask} from '../utilities/tasks-service';
import {useNavigate} from 'react-router-dom';
// import * as usersService from '../utilities/users-service';

// grabbed from twitter-app/views/New.jsx

function NewTask() {
    const [newTask, setNewTask] = useState({
      text:"",
      stage:"initiation"
    })
    const navigate = useNavigate()

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
      navigate(`/orders/${task.stage}`)
    }

    return (
      <div className="flex justify-center p-4 mx-4 mb-4 bg-slate-950 rounded-lg">
        <div>
          <h2 className="text-fuchsia-300 text-xl pb-10">Create a Task</h2> 
              {/* action points to where the POST data will be sent */}
          <form className="" autoComplete="off" onSubmit={handleSubmit}> 
            
            <div className="flex justify-around w-800">
              Task: <input className="" type="text" name="text" value={newTask.text} onChange={handleChange} />
            </div>
            <div className="">
            <select name="stage" value={newTask.stage} onChange={handleChange} style={{color:'black'}}>
              <option value="initiation">Initiation</option>
              <option value="planning">Planning</option>
              <option value="execution">Execution</option>
              <option value="closing">Closing</option>
            </select>
            </div>


          </form>
            <div className="flex justify-center pt-4 m-0 pb-6">
              <input type="submit" value="Submit"/>
            </div>
        </div>
        <p className="error-message">{newTask.error}</p>
      </div>
    );
  }
  
  export default NewTask;