import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as taskService from '../utilities/tasks-service';


function PlanningPage() {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        async function getTask() {
            const res = await taskService.getTask("planning")
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
        <div className="bg-fuchsia-600">
            <h2>Planning Page</h2>
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

export default PlanningPage;