import { useEffect, useState } from "react";
import AllClassCard from "./AllClassCard";

const AllClasses = () => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/allClasses')
    .then((response)=>response.json())
    .then(data =>setItems(data))
  }, [])
  return (
    <div className="mx-auto">
    <div className="py-50">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     {
       items.map((item) =><AllClassCard key={item._id} item={item}></AllClassCard>)
     }
   </div>
    </div>
  </div>
  );
};

export default AllClasses;
