import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Scrollcard = () => (
<div className="w-full max-w-[1900px] h-[514px] bg-[#1f1915] flex flex-col justify-center items-center relative">
  <div className="flex flex-col justify-center items-center gap-10 w-full max-w-[864px] px-8">
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="text-[#a6a643] text-center font-['Poppins'] text-[2rem] font-semibold leading-[136%]" style={{letterSpacing: '-0.32px'}}>Testimonial</div>
      <div className="text-[#ede4dc] text-center font-['Poppins'] text-4xl lg:text-5xl font-semibold leading-[136%]" style={{letterSpacing: '-0.48px'}}>Our Success Stories</div>
    </div>
    <div className="flex items-center justify-between w-full">
      <button className="flex-shrink-0 w-12 h-12 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center border border-white text-white text-2xl font-bold transition-all cursor-pointer">
        <FaArrowLeft />
      </button>
      <div className="text-[#ede4dc] text-center font-['Poppins'] text-xl leading-[136%] flex-1 mx-8" style={{letterSpacing: '-0.2px'}}>
        Virtueel Wandelen brings nature to life with soothing nature walking videos for seniors and people with dementia.
      </div>
      <button className="flex-shrink-0 w-12 h-12 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center border border-white text-white text-2xl font-bold transition-all cursor-pointer">
        <FaArrowRight />
      </button>
    </div>
  </div>
</div>
);

export default Scrollcard;
