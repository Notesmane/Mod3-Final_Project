import { useState } from "react";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm/LoginForm";

function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (

    <div>

      <h1 className="text-2xl text-violet-200 mb-8">Project Management Dashboard</h1>
      <div className="mb-8">
        <span>Welcome to WhiteBoard, your comprehensive all-in-one resource for your Project's organization. Here you can store and track all data necessary for the completion of your project. </span>
      <div>

      </div>
        <br />
        <span> - Create task lists - Coordinate and communicate with your team members - Store vital information - Keep it all safe so only team members have access to it. </span>
        <br />
        <span>Sign Up or Log In below to get started.</span>
      </div>

      <button class="rounded-full px-10 py-1 pb-1.5 mb-8 bg-fuchsia-900 hover:bg-fuchsia-300 hover:text-fuchsia-900 drop-shadow-md" onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Sign Up" : "Log In"}</button>

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