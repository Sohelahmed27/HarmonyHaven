import { Link } from 'react-router-dom';
import logo from '../../assets/Yuga -logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../Hooks/useCart';

const Navbar = () => {
  const {user,  logOut} = useContext(AuthContext)
  const [carts] =useCart()

  const handleLogout = () => {
    logOut()
   .then(() => {})
   .catch((error) =>console.log(error))
  }

  const navOption = (<div className="flex items-center text-xl">
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/instructors'>Instructors</Link>
    </li>
    <li>
      <Link to='/allClasses'>Classes</Link>
    </li>
    <li>
      <Link to='/dashboard'><button className="btn">
  Inbox
  <div className="badge badge-secondary">{carts?.length || 0}</div>
</button></Link>
    </li>
    {
      user? <>
      <li>
      <Link onClick={handleLogout} >Logout</Link>
      </li>
  
      
       <li>
    <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={user.photoURL}/>
  </div>
</div>
    </li></>
      
     
     :
    <li>
      <Link to='/login'>SignIn</Link>
    </li>
    }
  </div>)
  
  
  return (
    <div>
      <div className="navbar fixed z-10 opacity-60 text-white font-bold bg-[#090580] max-w-screen-xl mx-auto">
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