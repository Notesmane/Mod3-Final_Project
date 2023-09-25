//^ new task ==> tasks-service ==> task-api ==> server ==> tasks route ==> tasks controller

import * as tasksApi from './tasks-api';

export async function createTask(taskData) {
    const task = await tasksApi.createTask(taskData);
    return(task);
}

export async function deleteTask(id) {
    await tasksApi.deleteTask(id)
}

export async function getTask(page) {
    const task = await tasksApi.getTask(page);
    return(task);
}

export async function getTaskById(id) {
    const task = await tasksApi.getTaskById(id) 
    return task
}

// export async function editTask(id) {
//     await tasksApi.editTask(id)
// }