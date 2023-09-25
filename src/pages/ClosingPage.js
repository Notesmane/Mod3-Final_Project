import {useEffect, useState} from 'react';
import * as taskService from '../utilities/tasks-service';
import {Link} from 'react-router-dom'; 


function ClosingPage() {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        async function getTask() {
            const res = await taskService.getTask("closing")
            // const data = await res.json()
            setTasks(res)
        }
        getTask();
    }, []) 
    
    console.log(tasks)

    return(
        <div>
            <h2>Closing Page</h2>
            {tasks && tasks.map((task) => {
                return (
                    <div key={task._id}>
                        <h2>{task.text}</h2>
                        <select name="stage" value={task.stage} title='Edit Stage'>
                            <option value="initiation">Initiation</option>
                            <option value="planning">Planning</option>
                            <option value="execution">Execution</option>
                            <option value="closing">Closing</option>
                        </select>
                        <Link>
                            Delete
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ClosingPage;