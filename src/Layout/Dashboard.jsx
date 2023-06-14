import { FaBookOpen, FaBookReader, FaHome, FaMoneyBillAlt, FaRegEdit, FaUserTie } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
    
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
 
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
    </label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side  text-white bg-[#090580]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
     

    <ul className="menu p-4 w-80 h-full text-lg ">
      {/* Sidebar content here */}

      <li><Link to='/dashboard/home'><FaHome></FaHome>Student Home</Link></li>
      <li><Link to='/dashboard/history'><FaMoneyBillAlt></FaMoneyBillAlt>Payment History</Link></li>
      <li><Link to='/dashboard/selectedClass'><FaBookReader></FaBookReader>Selected Classes</Link></li>
      <li><Link to='/dashboard/enrolledClass'><FaBookOpen></FaBookOpen>Enrolled Classes</Link></li>
      {/* </ul> */}
      <div className='divider bg-slate-200'></div>
      {/* <ul className="menu p-4 w-80 h-full text-lg "> */}
      <li><Link to='/'><FaHome></FaHome>Home</Link></li>
      <li><Link to='/instructors'><FaUserTie></FaUserTie>Instructors</Link></li>
      <li><Link to='/allClasses'><FaRegEdit></FaRegEdit>Classes</Link></li>
      </ul>
      
    
  
  </div>
</div>
  );
};

export default Dashboard;