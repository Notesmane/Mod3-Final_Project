import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as taskService from '../utilities/tasks-service';


function InitiationPage() {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        async function getTask() {
            const res = await taskService.getTask("initiation")
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
            <span>Initiation Page</span>
            {tasks && tasks.map((task) => {
                return (
                    <div>
                        <div key={task._id}>
                            <h2 className="rounded-md bg-slate-800 flex-1 justify-start">{task.text}</h2>
                        </div>
                        <div>
                            <Link>
                                Edit
                            </Link>
                            <Link to="" onClick={() => deleteTask(task._id)}>
                                Delete
                            </Link>
                        </div>
                    </div>
                    )
            })}
        </div>
    )
}

export default InitiationPage;