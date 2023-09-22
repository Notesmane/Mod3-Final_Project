//^ new task ==> tasks-service ==> task-api ==> server ==> tasks route ==> tasks controller

import * as tasksApi from './tasks-api';

export async function createTask(taskData) {
    const task = await tasksApi.createTask(taskData);
    return(task);
}
