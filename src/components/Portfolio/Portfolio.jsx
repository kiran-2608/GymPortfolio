import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import personalTraining from '../../img/personalTrainingCertificate.jpg';
import mrTelangana from "../../img/mrTelanganaCertificate.jpg";
import pic0 from "../../img/0.jpg";
import pic1 from "../../img/1.jpg";
import pic22 from "../../img/22.jpg";
import pic2 from "../../img/2.jpg";
import pic3 from "../../img/3.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Winning</span>
      <span>Awards</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={personalTraining} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mrTelangana} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic0} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic22} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
