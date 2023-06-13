/* eslint-disable react/prop-types */
import  { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllClassCard = ({ item }) => {
  const {user} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSelect = (item) => {
    console.log(item);
    if (user) {
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
              title: 'Your Cart has been selected',
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
        title: 'Login first to select the course',
       
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Please Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })

    }
  }
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
