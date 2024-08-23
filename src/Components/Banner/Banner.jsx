// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

const Banner = () => {
  return (
    <div className="flex gap-4">
      <div className="w-2/3">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="w-full h-[520px] bg-cover"
                src="https://i.ibb.co/f9P2VrX/woman-wearing-black-hat-sunglasses-poses-photo-1185498-16694.jpg"
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[520px] bg-cover"
                src="https://i.ibb.co/f9P2VrX/woman-wearing-black-hat-sunglasses-poses-photo-1185498-16694.jpg"
                alt="image"
              />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div>
        <p>hello</p>
      </div>
    </div>
  );
};

export default Banner;
