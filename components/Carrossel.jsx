"use client"; // Indica que é um componente do lado do cliente

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards } from 'swiper/modules';

export default function Carrossel() {
  return (
    <div className="flex justify-center items-center mb-10">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[240px] h-[320px]" // Substitui o estilo do swiper
      >
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-red-600 rounded-lg"><img src="/assets/imagens/2.png" alt="teste" className="w-full h-full"/></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-blue-600 rounded-lg"><img src="/assets/imagens/teste.png" alt="teste" className="w-full h-full"/></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-green-600 rounded-lg">Slide 3</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-orange-600 rounded-lg">Slide 4</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-yellow-600 rounded-lg">Slide 5</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-pink-600 rounded-lg">Slide 6</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-purple-600 rounded-lg">Slide 7</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-blue-800 rounded-lg">Slide 8</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-white text-2xl font-bold bg-red-800 rounded-lg">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
