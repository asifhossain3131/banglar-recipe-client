import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const RightNav = () => {
    return (
        <div className='mx-12 my-auto'>
           <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1152493500/photo/authentic-indian-dishes-and-snacks.jpg?s=612x612&w=0&k=20&c=IF969JnN1lKLMHyZ_Sc0q7beVYOmWAOOCja_UeMSOv0=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://nijhoom.b-cdn.net/wp-content/uploads/2017/07/kachchi-biryani-bangladeshi-food-600-o.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5cca784792441b9dfd02ed1a/13931d55-eadc-45b1-94e7-3d45c083c8b1/287312127_551904919733828_4226940053637968816_n.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://tds-images.thedailystar.net/sites/default/files/feature/images/food_9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-media-eng.dhakatribune.com/uploads/2019/03/sf-mar18-19-pg8-1-1552911515242.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static01.nyt.com/images/2019/01/02/dining/02korai6/merlin_147967416_2c367d7a-0a38-494a-8825-19f0ac6eadcf-superJumbo.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default RightNav;