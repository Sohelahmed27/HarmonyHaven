import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";


const PopularInstructor = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/classes')
    .then((response) => response.json())
    .then(data =>setClasses(data))
  })
  return (
    <div className="container mt-40 mb-40">
    <h1 className="text-5xl font-bold text-center  mb-20">Our Popular Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
    
      {classes.map((course) =><InstructorCard key={course._id} course={course}></InstructorCard>)}
    </div>
    </div>
  );
};

export default PopularInstructor;