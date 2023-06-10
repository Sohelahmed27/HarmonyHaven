import { Link } from 'react-router-dom';
import logo from '../../assets/Yuga -logo.jpg'
const Navbar = () => {
  const navOption = (<div className="flex items-center text-xl">
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/instructors'>Instructors</Link>
    </li>
    <li>
      <Link to='/classes'>Classes</Link>
    </li>
    <li>
      <Link to='/'>Inbox</Link>
    </li>
    <li>
      <Link to='/'>SignIn</Link>
    </li>
    <li>
      <Link to='/'>Logout</Link>
  
    </li>
    <li>
    <div className="avatar">
  <div className="w-16 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
    </li>
  </div>)
  return (
    <div className="">
      <div className="navbar fixed z-10 opacity-50 text-white bg-[#090580]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
      {navOption}
      </ul>
    </div>
    <img src={logo} alt="" />
    <a className="btn btn-ghost normal-case text-2xl ">Harmony Haven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
        {navOption}
    </ul>
  </div>
  
</div>
    </div>
  );
};

export default Navbar;