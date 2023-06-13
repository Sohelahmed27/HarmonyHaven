import AboutUs from "../About us/AboutUs";
import Banner from "../Banner/Banner";

import Gallary from "../Gallary/Gallary";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import ProvidedClasses from "../ProvidedClasses/ProvidedClasses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ProvidedClasses></ProvidedClasses>
      <Gallary></Gallary>
      <PopularInstructor></PopularInstructor>

    </div>
  );
};

export default Home;
