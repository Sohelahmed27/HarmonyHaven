import { useEffect, useState } from "react";
import PopularClasses from "./PopularClasses";

const ProvidedClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://harmony-haven-server.vercel.app/classes")
      .then((response) => response.json())
      .then((data) => setClasses(data));
  });

  return (
    <div className="container mt-40 mb-40">
      <h1 className="text-5xl font-bold text-center  mb-20">
        Our Popular Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {classes.map((course) => (
          <PopularClasses key={course._id} course={course}></PopularClasses>
        ))}
      </div>
    </div>
  );
};

export default ProvidedClasses;
