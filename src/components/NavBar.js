import { Link } from "react-router-dom";
import * as usersService from '../utilities/users-service';

function NavBar({user, setUser}) {
  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav className='bg-purple-400'>
      <h3>Welcome, {user.name}</h3>
      {/* <Link to="/orders">New Task</Link>&nbsp; | &nbsp; */}
      <Link to="/orders/new">New Task</Link>&nbsp; | &nbsp;
      <Link to="/orders/initiation">Initiation</Link>&nbsp; | &nbsp;
      <Link to="/orders/planning">Planning</Link>&nbsp; | &nbsp;
      <Link to="/orders/execution">Execution</Link>&nbsp; | &nbsp;
      <Link to="/orders/closing">Closing</Link>&nbsp; | &nbsp;
      <Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}

export default NavBar;