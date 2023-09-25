import {useEffect, useState} from 'react';
import * as taskService from '../utilities/tasks-service';
import {Link} from 'react-router-dom';


function ExecutionPage() {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        async function getTask() {
            const res = await taskService.getTask("execution")
            // const data = await res.json()
            setTasks(res)
        }
        getTask();
    }, []) 
    
    console.log(tasks)

    return(
        <div>
            <h2>Execution Page</h2>
            {tasks && tasks.map((task) => {
                return (
                    <div key={task._id}>
                        <h2>{task.text}</h2>
                        <Link>
                            Edit
                        </Link>
                        <Link>
                            Delete
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ExecutionPage;