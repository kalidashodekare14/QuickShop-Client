import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import img from '../../assets/offer.jpg'
import img2 from '../../assets/women.jpg'
const Banner = () => {
  return (
    <div className="md:flex gap-4 mt-4">
      <div className="md:w-2/3">
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
                className="w-full md:h-[520px] bg-cover"
                src="https://i.ibb.co/f9P2VrX/woman-wearing-black-hat-sunglasses-poses-photo-1185498-16694.jpg"
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full md:h-[520px] bg-cover"
                src="https://i.ibb.co/DVhb8mx/stylish-male-model-business-suits-relaxed-fit-fashion-1277187-22649.jpg"
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full md:h-[520px] bg-cover"
                src="https://i.ibb.co/Xj28JH0/little-girl-model-studio-shopping-1303-7461.jpg"
                alt="image"
              />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div></div>
    <div className='flex gap-5 h-[80vh]'>
      <div className='w-[70%]'>
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
            <div className='h-[80vh]'>
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80vh]'>
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-5 h-[80vh]'>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;