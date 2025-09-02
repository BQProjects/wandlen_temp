import React from "react";
import PartnerOne from "../../src/assets/partner1.png";
import PartnerTwo from "../../src/assets/partner2.png";

const PartnersSection = () => (
  <div className="flex-shrink-0 w-full min-h-[1035px] bg-[#2a341f] py-16 px-8">
    <div className="flex-shrink-0 w-full text-[#a6a643] text-center font-['Poppins'] text-[2.5rem] font-semibold leading-[136%] mb-4">
      Our Collaborating Partners
    </div>
    <div className=" w-full text-white text-center font-['Poppins'] text-[2rem] font-medium leading-[160%] mb-8">
      Working together to bring nature closer to everyone.
    </div>
    <div className="flex gap-4 mb-8">
      <div className="flex flex-shrink-0 justify-center items-center w-2/6 h-[21.375rem] rounded-2xl bg-[#1f1915]">
        <img
          src={PartnerOne}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-shrink-0 justify-center items-center gap-2.5 p-6 w-4/6 h-[21.375rem] rounded-3xl bg-[#1f1915]">
        <span className="text-white text-center font-['Poppins'] text-3xl font-medium leading-[160%]">
          We work together with{" "}
          <span className="text-[#a6a643] underline">10 Natuurlijk</span> to
          encourage physical outdoor experiences and greening in healthcare.
        </span>
      </div>
    </div>
    <div className="flex gap-4">
      <div className="flex flex-shrink-0 justify-center items-center gap-2.5 p-6 w-4/6 h-[21.375rem] rounded-3xl bg-white">
        <span className="text-[#381207] text-center font-['Poppins'] text-2xl font-medium leading-[160%]">
          <span className="underline text-[#5B6502]">
            The Society Document Foundation
          </span>
          <br />
          This foundation is dedicated to creating documentaries, films, and
          documents with social utility and/or impact, as well as preserving
          intangible heritage for future generations. Volunteers who enjoy
          making videos for this platform are given access to a camera through
          the foundation.
        </span>
      </div>
      <div className="inline-flex flex-shrink-0 justify-center items-center w-2/6 h-[21.375rem] rounded-2xl bg-white">
        <div className="flex flex-shrink-0 justify-center items-center h-[21.375rem] rounded-2xl bg-[#1f1915]">
          <img
            src={PartnerTwo}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
);

export default PartnersSection;
