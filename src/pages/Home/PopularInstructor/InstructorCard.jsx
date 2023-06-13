/* eslint-disable react/prop-types */


const InstructorCard = ({course}) => {
  
  console.log(course);
  return (
    <div className="card w-96 glass">
     
    <figure><img src={course.
instructorImage? course.
instructorImage: 'Image not found' } className="h-[300px] w-[100%]"/></figure>
    <div className="card-body">
      <h2 className="card-title">{course.instructor}</h2>
      
      <div className="card-actions justify-end">
        <button className="btn btn-primary mx-auto">Learn now!</button>
      </div>
    </div>
  </div>
  );
};

export default InstructorCard;