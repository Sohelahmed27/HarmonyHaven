/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const AllClassCard = ({ item }) => {
  const { name, price, totalSeats, instructor } = item;
  console.log(item);
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart()

 

  const handleSelect = (item) => {
    console.log(item);

    
    const uniqueId = `${item.name}-${Math.floor(Math.random() * 1000)}`;

    if (user && user.email) {
  
      item._id = uniqueId;
      const cartItem = {
        uniqueId,
        name,
        totalSeats,
        price,
        instructor,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class has been selected",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "An error occurred",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      // Handle case when user is not logged in
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Please log in before selecting the course",
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

        <button onClick={() => handleSelect(item)} className="btn btn-primary ">
          Select
        </button>
      </div>
    </div>
  );
};

export default AllClassCard;
