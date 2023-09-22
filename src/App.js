import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TaskHistoryPage from "./pages/TaskHistoryPage";
import OrderHistoryPage from "./pages/NewTask";
import AuthPage from "./pages/AuthPage";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  console.log(user);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user}/>
          <Routes>
            <Route path="/orders/new" element={<TaskHistoryPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;