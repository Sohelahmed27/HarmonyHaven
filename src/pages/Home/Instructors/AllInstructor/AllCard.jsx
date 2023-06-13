/* eslint-disable react/prop-types */


const AllCard = ({mentor}) => {
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src= {mentor.instructorImage} className="h-[400px] w-[100%]" /></figure>
    <div className="card-body font-semibold">
      <h1 className="card-title">{mentor.instructor}</h1>
      <p>Class : {mentor.name}</p>
      <p>Class Taken: {mentor.classTaken}</p>
      <p>Email: {mentor.instructorEmail}</p>
     
      
     
    </div>
  </div>
  );
};

export default AllCard;