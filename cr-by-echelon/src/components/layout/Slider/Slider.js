// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../img/room.JPG";
import image2 from "../../../img/junior.JPG";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (

        <>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide><div className="slide">
                    <div className="slide-img"><img src={image1} alt="" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image2} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image1} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image2} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image1} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image2} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image1} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image2} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image1} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
                <SwiperSlide><div className="slide">   <div className="slide-img"><img src={image2} alt="sliders" /></div>
                    <div className="slide-text">Lorem ipsum dolor.</div></div></SwiperSlide>
            </Swiper>
        </>
    );
}