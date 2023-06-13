/* eslint-disable react/prop-types */


const AllCard = ({mentor}) => {
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src= {mentor.instructorImage} className="h-[400px] w-[100%]" /></figure>
    <div className="card-body font-semibold">
      <h1 className="card-title">{mentor.instructor}</h1>
      <p>Email: {mentor.instructorEmail}</p>
      <p>Class Taken: {mentor.classTaken}</p>
      <p>Class : {mentor.name}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default AllCard;