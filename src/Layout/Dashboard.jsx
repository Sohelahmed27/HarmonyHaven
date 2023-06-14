import { FaBookOpen, FaBookReader, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full text-lg  text-white bg-[black]">
      {/* Sidebar content here */}
      <li><a><FaBookReader></FaBookReader>Selected Classes</a></li>
      <li><Link to='/'><FaBookOpen></FaBookOpen>Enrolled Classes</Link></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;