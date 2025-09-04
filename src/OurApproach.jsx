import React from "react";
import deermountain from "./assets/deermountain.jpg";
import PlantSvg from "./assets/plant.svg";
import ScrollDown from "./assets/scrollDown.svg";
import PartnersSection from "./components/PartnersSection";
import OurWalking from "./components/WhyVirtualWalking";
import Testimonial from "./components/common/TestimonialScroll";
import FaqQuestions from "./components/common/FaqQuestions";

const OurApproach = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex-shrink-0 bg-secondary">
      <div className="flex-shrink-0 py-20 pl-20 pr-20">
        <div className="inline-flex flex-col items-start gap-4">
          <div className="text-primary font-poppins text-[2rem] font-semibold leading-[136%]">
            Our Approach
          </div>
          <div className=" w-[654px] text-brown font-poppins text-5xl font-semibold leading-[136%]">
            Making Nature Accessible, Anywhere
          </div>
        </div>
        <div className="flex items-start gap-20 justify-center">
          <img
            src={deermountain}
            className="w-[662px] h-[963px] rounded-2xl object-cover"
          />
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-5 pb-4">
                <div className="w-[424px] text-brown text-justify font-poppins text-xl leading-[136%]">
                  Virtual Walking opens the door to nature for everyone —
                  regardless of physical limitations. Through authentic,
                  real-life walking videos, we bring the beauty, peace, and
                  familiarity of local landscapes to people who may no longer be
                  able to experience them in person.
                </div>
                <div className=" w-[424px] text-brown text-justify font-poppins text-xl leading-[136%]">
                  From seniors with dementia to those with limited mobility, our
                  videos bring calm, spark recognition, and support well-being —
                  strengthening connections with the world and with oneself.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 py-2 px-5 rounded-lg bg-primary  text-white font-poppins text-xl font-medium leading-[136%]">
              Start Your Journey
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pr-20 flex justify-end">
        <img
          src={ScrollDown}
          onClick={handleScrollDown}
          className="cursor-pointer"
        />
      </div>
      <div className="mt-10 flex justify-end">
        <img src={PlantSvg} />
      </div>
      <PartnersSection />
      <OurWalking />
      <Testimonial />
      <FaqQuestions />
    </div>
  );
};

export default OurApproach;
