

# Assignment Details for Project
Title: MOD3 - Final Project
Chosen Idea: Project Management Dashboard
Assigned: Friday, Sept 15
Due: Tuesday Sept 26 we will be presenting
Link: https://perscholas.instructure.com/courses/1513/assignments/297645?module_item_id=966251
REFER TO: SEI-Cafe & MERN-Infrastructure


# Deliverables
1.
- trello board with: icebox: for users stories not completed, current/MVP: holds users stores that needs to be completed, completed: user stories that have been completed, 
- Wireframes: Sketches of each screens's user interface for the major functionality of the application.
- Entity-Relationship-Diagram(ERD): A diagram of the app's models (one per data entity) and the relationships between them
2. 
- source code for back and front end hosted on github repo
- frequent commites
- ReadMe file with: introduction, technologies used, getting started, unsolved problems, future enhancements 
3. 
- A functioning full-stack, single-page application for (Express) and a CDN service for (React).
- Incorporate the technologies of the MERN-stack
- Well-styled interactive front-end that communicates with the Express backend via AJAX
- Implement token-based authentication
- Implement authorization by restricting functionality to authenticated users.
- Navigation should respond to the login status of the user.
- One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
- Have a comprehensive feature-set with either:
        - Full CRUD distributed across all Data Entities. OR
        - (Easy) - Consume a third-party API and display API data in components. OR


======================================================


## Introduction
For my final project I've decided to build a Project Management Dashboard. This will serve a double purpose as it will also be the first iteration of my own personal PM Dashboard that I hope to use for future projects. The Project Life Cycle is composed of 4 main stages; Initiation, Planning, Execution and Closing. Along with the tasks neccessary to complete a given project there are also random tasks that fall into grey areas or are short term tasks that dont need to fall into any of the stages. This app will help to keep all tasks and info organized. 

To do this, I will be using the MERN-Infrastructure App to clone my project from. Then I will be referring to the Todo App from Mod2 to get the basic functionality of the CRUD operations to implement on my tasks.


## User Stories
- As a registered user, I want to create new tasks so that I can organize to-do's
- As a registered user, I want to be able to edit a task
- As a registered user, I want to be able to delete a task


## Technologies Used
Below are the technologies that I've used to create this application. 
- HTML
- CSS
- JavaScript
- MongoDB
- Mongoose
- Express
- React
- Node
- JSX 
- Tailwind


## Getting Started
- Trello board: https://trello.com/b/a632ofcF/mod2-project
- Deployed App: https://pm-dashboard-vkjl.onrender.com/orders/planning


## Future Enhancements
- In the 2.0 version of this app, I will compile all of the current pages (initiation, planning, execution, closing) together onto one single page. On that page the the pages will be individual lists. This page will then be called Stages.
- The alternate page to stages will be named Dashboard. The Dashboard page will look similar to the Stages page although here, there will be no lists when the page is first open. Instead, there will be a link to create a list. Then when a list is created, the user will be able to create a task right there in the list. Edit and delete functions will also take place right at the task. 
- When a new task is created, the user must also pick the stage that the task should go into. Once created, the task will then populate on the chosen Stage list as well as on its current list.
- there will be a Project Resource list, with all necessary data. Contacts, Venue info, important dates, etc.
- there will be Admin users and Team Member users. Admins will be able to delete any user, or any users task. Team Member users will only be able to delete their own account and edit or delete their own tasks.
- The final addition I would like to add is a functional chat feature where all users can communicate, leaving messages that pertain to the project and its tasks. 


## Resources
- Youtube, Google, MDN, w3schools.com
- Markdown Cheatsheet - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
- https://app.diagrams.net/ (for wire framing)
- freepik.com for background photo and eventual colorscheme
- trello.com
- mongodb

