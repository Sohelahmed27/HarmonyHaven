import { useEffect, useState } from "react";
import AllCard from "./allCard";


const AllInstructor = () => {
  const [mentors, setMentors] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/allClasses')
    .then((response)=>response.json())
    .then(data =>setMentors(data))
  })
  return (
   <div className="mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {
        mentors.map((mentor) =><AllCard key={mentor._id} mentor={mentor}></AllCard>)
      }
    </div>
   </div>
  );
};

export default AllInstructor;