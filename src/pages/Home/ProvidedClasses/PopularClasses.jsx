/* eslint-disable react/prop-types */


const PopularClasses = ({course}) => {
  console.log(course)
  
  return (
    <div className="card w-96 glass">
     
    <figure><img src={course.
classImage} className="h-[300px] w-[100%]"/></figure>
    <div className="card-body">
      <h2 className="card-title">{course.name}</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
  );
};

export default PopularClasses;