import { useState } from "react";
import {signUp} from '../../utilities/users-service';

// SignUpForm.jsx <-> users-service.js <-> users-api.js <-> routes/users.js <--> controller/users.js

function SignUpForm({setUser}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        error: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);

      // copy the form data
      const userFormData = {...formData}
      // delete the extra properties
      delete userFormData.confirm
      delete userFormData.error

      // calling user service signUp function
      const user = await signUp(userFormData);
      console.log('USER', user);
      setUser(user);
      

    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        error: 'Sign Up Failed - Try Again'
      });
    }
  };

  return (
    <div className=" border-solid ">
      {/* <div className="form-container"> */}
      <div className="p-5 ring-2 ring-slate-600 rounded-3xl bg-slate-950">
        <h4 className='p-0 mb-7 border-solid'>Please enter your information, then press 'Sign Up'.</h4>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="decoration-fuchsia-600">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>Confirm Password:</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />

          <button type="submit" disabled={disable}>Sign Up</button>
        </form>
      </div>
      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default SignUpForm;