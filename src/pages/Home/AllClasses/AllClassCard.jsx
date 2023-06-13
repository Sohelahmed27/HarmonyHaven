/* eslint-disable react/prop-types */
import  { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllClassCard = ({ item }) => {
  const {user} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation();

  const handleSelect = (item) => {
    console.log(item);
  
    // Generate a new unique identifier using the name and a random number
    const uniqueId = `${item.name}-${Math.floor(Math.random() * 1000)}`;
  
    if (user) {
      // Update the item object with the new unique _id value
      item._id = uniqueId;
  
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'warning',
              title: 'Something went wrong',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'An error occurred',
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      // Handle case when user is not logged in
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Please log in before selecting the course',
        showConfirmButton: false,
        timer: 1500,
        
      });
    }
  };
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={item.classImage} className="h-[400px] w-[100%]" />
      </figure>
      <div className="card-body font-semibold">
        <h1 className="text-xl">Class :{item.name}</h1>
        <p className="card-title">{item.instructor}</p>
        <p>Price:${item.price}</p>
        <p>Available Set:{item.totalSeats}</p>
      
            <button onClick={() =>handleSelect(item)} className="btn btn-primary ">Select</button>
      </div>
    </div>
  );
};

export default AllClassCard;