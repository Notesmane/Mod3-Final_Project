import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import TaskHistoryPage from "./pages/TaskHistoryPage";
import NewTask from "./pages/NewTask";
import EditTask from './pages/EditTask';
import PlanningPage from './pages/PlanningPage';
import ExecutionPage from './pages/ExcecutionPage';
import ClosingPage from './pages/ClosingPage';
import InitiationPage from './pages/InitiationPage';
import AuthPage from "./pages/AuthPage";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service";
import { Link } from "react-router-dom";
import * as usersService from './utilities/users-service';
import logo from '../src/Jotlogo.png';
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  console.log(user);
// const formattedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);

const handleLogout = () => {
  usersService.logOut();
  setUser(null);
}


return (
    <div>
      {/* <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p> */}
    <main className="App">
      <div className="flex justify-between">
        {/* <h3 className="mx-2 flex justify-start text-2xl ">Welcome, {formattedName}</h3> */}
        <img className="bg-contain" src={logo} title="JotLogo" alt=''/>
        <Link to="" className="m-2 text-indigo-950 font-bold flex justify-end text-lg w-1/6 hover:text-fuchsia-200" onClick={handleLogout}>Log Out</Link>
      </div>
      {user ? (
        <div className="mx-auto rounded-xl shadow p-4 m-10 bg-slate-900 max-w-none min-w-min drop-shadow-md">
          <NavBar user={user}/>
          <Routes>
            <Route path="/orders/new" element={<NewTask />} />
            <Route path="/orders/edit/:id" element={<EditTask />} />
            <Route path="/orders/planning" element={<PlanningPage />} />
            <Route path="/orders/execution" element={<ExecutionPage />} />
            <Route path="/orders/initiation" element={<InitiationPage />} />
            <Route path="/orders/Closing" element={<ClosingPage />} />
            {/* <Route path="/orders" element={<TaskHistoryPage />} /> */}
          </Routes>
        </div>
      ) : (
        <div className="container mx-auto rounded-xl shadow p-8 m-10 bg-slate-900 max-w-2xl min-w-min drop-shadow-md">
          <AuthPage setUser={setUser} />

        </div>
      )}
    </main>
    
    <div className='flex justify-center pt-10 text-center text-xs'>
            <p>Website powered by: NotesMane of Noteworthy Productions   |   All Rights Reserved. Copyright, NYC - 2023</p>
        </div>
    </div>
  );
}

export default App;


// {/* <div className="footer">
//           <br></br>
//           {/* <button>Email</button> */}
//           <a
//             href="https://www.linkedin.com/in/ron-powell-nyc212/"
//             target="_blank"
//             rel="noreferrer"

//           >
//             <img className="linkedin" src={linkedin} title="LinkedIn" alt=''/>
//           </a>
//           <a
//             href="https://github.com/Notesmane"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img className="github" src={github} title="Github" alt=''/>
//           </a>
//           <a
//             href="mailto:ronpowell156@gmail.com"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img className="email" src={email} title="Contact" alt=''/>
//           </a>
//           {/* <button>Contact</button> */}
//           {/* <button href="https://github.com/Notesmane">Github</button> */}
//           <br></br>
//         </div> */}