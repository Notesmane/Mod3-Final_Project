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
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  console.log(user);
const formattedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);

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
      <div className="flex">
        <h3 className="mx-2 flex justify-start text-2xl w-1/2">Welcome, {formattedName}</h3>
        <Link to="" className="mx-2 text-indigo-950 font-bold flex justify-end text-lg w-1/2 hover:text-fuchsia-200" onClick={handleLogout}>Log Out</Link>
      </div>
      {user ? (
        <div className="container mx-auto rounded-xl shadow p-8 m-10 bg-slate-900 max-w-none min-w-min drop-shadow-md">
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
    </div>
  );
}

export default App;