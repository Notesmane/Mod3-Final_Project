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

    async function deleteTask(id) {
        window.location.reload(true)
        await taskService.deleteTask(id)
    }
    
    return(
        <div>
            <h2>Closing Page</h2>
            {tasks && tasks.map((task) => {
                return (
                    <div key={task._id}>
                        <h2>{task.text}</h2>
                        <Link to={`/orders/edit/${task._id}`}>Edit Task</Link>
                        <Link to="" onClick={() => deleteTask(task._id)}>
                            Delete
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ClosingPage;