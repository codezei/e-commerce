import {Link} from 'react-router-dom'
import slide1 from '../images/slide1.png'

import SwiperCore, {  Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import './Promo.scss'

SwiperCore.use([ Pagination]);

function Promo () {
    return (
        <section className="promo">
            <div className="">
                <div className="promo-slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true,
                        renderBullet: (index, className)=>{return '<span class="' + className + '">' + (index + 1) + '</span>';}} }
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                    >
                    <SwiperSlide>
                    <div className="promo-slider__item container">
                        <div className="promo-slider__item-info">
                            <h3 className="promo-slider__item-title">
                            SMART AND TRENDY
                            </h3>
                            <p className="promo-slider__item-text">
                            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                            </p>
                            <Link className="promo-slider__item-btn btn" to="/list">
                                Shop Now
                            </Link>

                        </div>
                        <div className="promo-slider__item-media">
                            <img src={slide1} alt="" className="promo-slider__item-img" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="promo-slider__item container">
                        <div className="promo-slider__item-info">
                            <h3 className="promo-slider__item-title">
                            SMART AND TRENDY
                            </h3>
                            <p className="promo-slider__item-text">
                            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                            </p>
                            <Link className="promo-slider__item-btn btn" to="/list">
                                Shop Now
                            </Link>

                        </div>
                        <div className="promo-slider__item-media">
                            <img src={slide1} alt="" className="promo-slider__item-img" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="promo-slider__item container">
                        <div className="promo-slider__item-info">
                            <h3 className="promo-slider__item-title">
                            SMART AND TRENDY
                            </h3>
                            <p className="promo-slider__item-text">
                            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                            </p>
                            <Link className="promo-slider__item-btn btn" to="/list">
                                Shop Now
                            </Link>

                        </div>
                        <div className="promo-slider__item-media">
                            <img src={slide1} alt="" className="promo-slider__item-img" />
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>



                </div>
            </div>
        </section>
    )
}

export default Promo;