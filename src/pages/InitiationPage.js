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
        <div className="flex">
            <div className="w-3/4 mb-4 ml-4 mr-4 bg-slate-950 rounded-lg">
            <h1 className="flex justify-start text-xl py-4 pb-8 pl-4 text-fuchsia-300">Initiation</h1>
            {tasks && tasks.map((task) => {
                return (
                    <div key={task._id}>
                        <h2 className="bg-slate-800 rounded-md py-2 mx-4">{task.text}</h2>
                        <div clasName="pb-8 text-slate-300">
                            <Link className="text-slate-600 text-md hover:text-slate-300" to={`/orders/edit/${task._id}`}>Edit</Link>&nbsp; | &nbsp;
                            <Link className="text-slate-600 text-md hover:text-slate-300" to="" onClick={() => deleteTask(task._id)}>
                                Delete
                            </Link>
                        </div>
                    </div>
                )
            })}

            </div>
            <div className="w-1/4 m-2 min-w-150">
                <div className= "bg-slate-800 rounded-md py-2 text-sm">
                    <h2>MESSAGES</h2>
                </div>
                <div className="bg-slate-800/50 my-.5 rounded-md h-5/6 text-sm py-4 text-left px-2">
                    <span>Ronnie: who's idea was it to make a full-stack app?</span>
                    <br/>
                    <span className="text-xs text-slate-500 pb-2">09.26.23-04:49</span>
                    <br />
                    <br />
                    <span>Johnny: Not mine... I just want to get that doe, where the jobs at???</span>
                    <br/>
                    <span className="text-xs text-slate-500">09.26.23-04:51</span>
                    <br />
                    <br />
                    <span>Clement: Guys, if we just focus on our work we can get it done.</span>
                    <br/>
                    <span className="text-xs text-slate-500">09.26.23-04:51</span>
                    <br />
                    <br />
                    <span>Clarence: but if this was python... </span>
                    <br/>
                    <span className="text-xs text-slate-500">09.26.23-04:52</span>
                    <br />
                    <br />
                    <span>Colton: You guys got this!! </span>
                    <br/>
                    <span className="text-xs text-slate-500">09.26.23-04:53</span>
                    <br />
                    <br />
                </div>
                <div>
                    <h5 className="bg-slate-800 rounded-md pt-4 flex justify-start px-2">Enter message... </h5>
                </div>
            </div>
        </div>
    )
}

export default InitiationPage;