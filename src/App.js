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
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  console.log(user);

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow p-8 m-10 bg-slate-900">
      {/* <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p> */}
    <main className="App">
      {user ? (
        <>
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
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
    </div>
  );
}

export default App;