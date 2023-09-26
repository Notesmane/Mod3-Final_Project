import { Link } from "react-router-dom";
// import * as usersService from '../utilities/users-service';

function NavBar({user, setUser}) {
  // const handleLogout = () => {
  //   usersService.logOut();
  //   setUser(null);
  // }

  return (
    <nav className='flex justify-between pt-0 pb-6 px-24'>
      {/* <Link to="/orders">New Task</Link>&nbsp; | &nbsp; */}
      <Link className='hover:text-fuchsia-300' to="/orders/new">New Task</Link>&nbsp; | &nbsp;
      <Link className='hover:text-fuchsia-300' to="/orders/initiation">Initiation</Link>&nbsp; | &nbsp;
      <Link className='hover:text-fuchsia-300' to="/orders/planning">Planning</Link>&nbsp; | &nbsp;
      <Link className='hover:text-fuchsia-300' to="/orders/execution">Execution</Link>&nbsp; | &nbsp;
      <Link className='hover:text-fuchsia-300' to="/orders/closing">Closing</Link>
      {/* <Link to="" onClick={handleLogout}>Log Out</Link> */}
    </nav>
  );
}

export default NavBar;