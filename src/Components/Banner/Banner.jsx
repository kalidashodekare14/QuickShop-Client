import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination, Navigation} from "swiper/modules";
import img from "../../assets/offer.jpg";
import img2 from "../../assets/women.jpg";
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:h-[80vh]">
      <div className="lg:w-[70%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="lg:h-[80vh]">
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:h-[80vh]">
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 lg:h-[80vh]">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
