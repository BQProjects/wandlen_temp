import React, { useState } from "react";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Virtueel Wandelen brengt de natuur tot leven met rustgevende natuurwandelvideo’s voor ouderen en mensen met dementie.",
    },
    {
      text: "Een geweldige ervaring die helpt bij het verminderen van stress en het verbeteren van de stemming.",
    },
    {
      text: "Perfect voor mensen die niet meer kunnen wandelen, maar wel willen genieten van de natuur.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative flex-shrink-0 h-[400px] bg-accent">
      <img
        src={LeftArrow}
        alt="Previous"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={prevTestimonial}
      />
      <div className="flex flex-col justify-center items-center gap-10 w-[864px] mx-auto h-full">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="self-stretch text-primary text-center font-['Poppins'] text-[2rem] font-semibold leading-[136%]">
            Testimonial
          </div>
          <div className="self-stretch text-secondary text-center font-['Poppins'] text-5xl font-semibold leading-[136%]">
            Our Success Stories
          </div>
        </div>
        <div className="flex justify-center items-center w-[864px] h-[3.375rem] flex-shrink-0 text-secondary text-center font-['Poppins'] text-xl leading-[136%]">
          {testimonials[currentIndex].text}
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-secondary opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <img
        src={RightArrow}
        alt="Next"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={nextTestimonial}
      />
    </div>
  );
};

export default Testimonial;
