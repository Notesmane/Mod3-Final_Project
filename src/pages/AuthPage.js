import { useState } from "react";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm/LoginForm";

function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (

    <div>

      <h1 className="text-2xl text-violet-200 mb-8">Project Management Dashboard</h1>
      <div className="mb-8">
        <span>Welcome to WhiteBoard, your comprehensive Project Manangement Dashboard. Here you can create your task lists for all parts of the Project Life Cylce, coordinate and communicate with your team members and add vital information which will be easily accessible for all team members.</span>
      </div>

      <button class="rounded-full px-5 py-1 pb-1.5 mb-8 bg-fuchsia-900 hover:bg-fuchsia-300 hover:text-fuchsia-900" onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Sign up" : "Log in"}</button>

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