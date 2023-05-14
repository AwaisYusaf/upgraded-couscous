"use client";
import React, { useEffect, useState } from "react";
import Swiper, { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Card1 from "./SwiperSlides/Card1";
import Card2 from "./SwiperSlides/Card2";
import Card3 from "./SwiperSlides/Card3";
// import Swiper styles
import "swiper/css";

type Props = {};

function Slider({}: Props) {
  const [swiper, setSwiper] = useState<any>(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [interval, setIntervalID] = useState<any>(null);

  useEffect(() => {
    let myswiper = new Swiper(".swiper", {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    setSwiper(myswiper);
  }, []);
  function updateInterval() {
    if (!autoPlay) {
      const i = setInterval(() => {
        swiper.slideNext();
      }, 2000);
      setIntervalID(i);
      setAutoPlay(true);
    } else {
      clearInterval(interval);
      setAutoPlay(false);
    }
  }

  return (
    <div className="my-8 flex flex-col">
      <div className="swiper mx-auto w-[97%] md:w-[90%] lg:w-[85%]">
        <div className="swiper-wrapper">
          <div className="swiper-slide" data-swiper-autoplay="2000">
            <Card1 />
          </div>
          <div className="swiper-slide" data-swiper-autoplay="2000">
            <Card2 />
          </div>
          <div className="swiper-slide" data-swiper-autoplay="2000">
            <Card3 />
          </div>
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-scrollbar"></div>
      </div>

      <div className="flex justify-center space-x-16 mt-4">
        <div
          className="swiper-button-prev"
          onClick={() => {
            if (swiper.slidePrev) {
              swiper.slidePrev();
            }
          }}
        >
          <Image
            src="/assets/slider-arrow.png"
            width={40}
            height={40}
            alt=""
            className="rotate-90 h-[20px] w-[20px] transition-all p-[5px] opacity:70 hover:opacity-100 hover:scale-150 hover:bg-gray-100 rounded-full cursor-pointer"
          />
        </div>
        <button onClick={updateInterval}>
          {autoPlay ? (
            <Image
              src="/assets/pause.png"
              className="h-[20px] w-[20px] p-[5px] opacity-60 hover:opacity-100 hover:bg-gray-100 rounded-full cursor-pointer"
              alt=""
              width={40}
              height={40}
            />
          ) : (
            <Image
              src="/assets/play.png"
              className="h-[20px] w-[20px] p-[5px] opacity-60 hover:opacity-100 hover:bg-gray-100 rounded-full cursor-pointer"
              alt=""
              width={40}
              height={40}
            />
          )}
        </button>

        <div
          className="swiper-button-next"
          onClick={() => {
            if (swiper.slideNext) {
              swiper.slideNext();
            }
          }}
        >
          <Image
            src="/assets/slider-arrow.png"
            width={40}
            height={40}
            alt=""
            className="-rotate-90 h-[20px] w-[20px] transition-all p-[5px] opacity:70 hover:opacity-100 hover:scale-150 hover:bg-gray-100 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
