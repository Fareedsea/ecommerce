"use client"

import React from 'react';
import Slider from 'react-slick';
import Slide from "./Slide";

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    }; 
const slidesData = [
    {
        id: 0,
        img: "/banner-1.jpg",
        title: "Trending Item",
        mainTitle: "WOMAN LATEST FASION SALE",
        price: "$20",
    },
    {
        id: 1,
        img: "/banner-2.jpg",
        title: "Trending Accessories",
        mainTitle: "MODERN SUNGLASSES",
        price: "$15",
    },
    {
        id: 2,
        img: "/banner-3.jpg",
        title: "Sale Offer",
        mainTitle: "NEW FASION SUMMER SALE",
        price: "$30",
    }
];
    
  return <div>
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}></Slider>

            </div>
        </div>;
};

export default Hero;