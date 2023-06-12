import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
  const location = useLocation()
  const {user, loading} = useContext(AuthContext);
if (loading) {
  return <span className="loading loading-bars loading-sm"></span>
}

  if (user){
       return   children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;