import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import img from "../../assets/offer.jpg";
import img1 from "../../assets/offer1.avif";
import img3 from "../../assets/offer2.jpg";
import bannerR from '../../assets/banner.avif'
import bannerR1 from '../../assets/banner.webp'
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
              <img className="w-full lg:h-[80vh]" src={img3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:h-[80vh]">
              <img className="w-full lg:h-[80vh]" src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:h-[80vh]">
              <img className="w-full lg:h-[80vh]" src={img} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-1  gap-5 lg:h-[80vh]">
          <div>
            <img className="lg:h-[40vh]" src={bannerR1} alt="" />
          </div>
          <div>
            <img className="lg:h-[37vh]" src={bannerR} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
