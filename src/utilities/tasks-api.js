//^ new task ==> tasks-service ==> task-api ==> server ==> tasks route ==> tasks controller

// i need to change the routes for the backend, need to create a function thats get all tasks

import { getToken } from "./users-service";

const BASE_URL = '/api/tasks';

export async function createTask(taskData) {
    return await sendRequest(BASE_URL, 'POST', taskData);
}

export async function getTask(page) {
    return await sendRequest(`${BASE_URL}/${page}`);
}

export async function deleteTask(id) {
  console.log("From task api", id)
    return await sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function getTaskById(id) {
  console.log("From task api", id)
  return await sendRequest(`${BASE_URL}/task/${id}`);
}

export async function editTask(id, task) {
  console.log("From task api", id, task)
    return await sendRequest(`${BASE_URL}/${id}`, 'PUT', task);
}



/*--- Helper Functions ---*/
  
async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token) {
      // Ensure the headers object exists
      options.headers = options.headers || {};
      // Add token to an Authorization header
      // Prefacing with 'Bearer' is recommended in the HTTP specification
      options.headers.Authorization = `Bearer ${token}`;
    }
    
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }