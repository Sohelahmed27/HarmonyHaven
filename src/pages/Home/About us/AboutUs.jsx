import img from "../../../assets/class/class1.jpg";
import './About.css'

const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg-cover bg-center aboutUs mt-32"  >
      <div className="hero-content flex-col lg:flex-row ">
        <img src={img} className="w-[400px] h-[400px]"/>
        <div className="w-[50%]">
          <h1 className="text-5xl font-bold">About us!</h1>
          <p className="py-6 px-4  mr-20 text-xl">
            Welcome to Harmony Haven, your sanctuary for yoga and meditation. At
            Harmony Haven, we are dedicated to creating a peaceful and nurturing
            space where individuals can find balance, cultivate inner harmony,
            and enhance their overall well-being.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
