import { useState } from "react";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm/LoginForm";

function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (

    <div>

      <h1>Project Management Dashboard</h1>
      <div>
        <span>Welcome to your Project Manangement Dashboard. Here you can create your task lists for all parts of the Project Life Cylce, coordinate and communicate with your team members and add vital information which will be easily accessible for all team members.</span>
      </div>

      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Sign up" : "Log in"}</button>

      {
        showLogin ? (
          <LoginForm setUser={setUser}/>
        ) : (
          <SignUpForm setUser={setUser}/>
        )

      }

    </div>
  );
}

export default AuthPage;