import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import class1 from "../../../assets/class/class1.jpg";
import class2 from "../../../assets/class/class2.jpg";

import class4 from "../../../assets/class/class4.jpg";
import class5 from "../../../assets/class/class5.jpg";
import class6 from "../../../assets/class/class6.jpg";
import class7 from "../../../assets/class/class7.jpg";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Classes = () => {
  return (
    <div >
      <h1 className="text-center text-5xl font-bold mb-10 mt-20">
        Popular Classes
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img src={class2} alt="" className="h-[400px] w-[400px]" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold">
            Mindful meditation
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={class4} alt=""  className="h-[400px] w-[400px]"/>
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold">
            Stress management
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class5} alt="" className="h-[400px] w-[400px]"/>
          <h3 className="text-3xl uppercase text-center -mt-16 text-gray-600 font-bold">
            Kids Meditation
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class6} alt="" className="h-[400px] w-[400px]"/>
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold">
            Boys Yoga
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class7} alt="" className="h-[400px] w-[400px]"/>
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold">
            Girls Yoga
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={class1} alt="" className="h-[400px] w-[400px]"   />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold">
            Kids Yoga
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Classes;
