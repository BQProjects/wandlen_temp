import React from 'react';

const Footer = () => (
  <div className="w-full bg-[#2a341f] py-16 px-8">
    <div className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {/* Logo and Company Info Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm-3.5 28l-8.5-8.5 2.5-2.5 6 6L28 11l2.5 2.5L16.5 28z" fill="#A6A643"/>
            </svg>
            <span className="text-[#ede4dc] font-['Poppins'] text-lg font-medium">
              Virtueel Wandelen
            </span>
          </div>
          
          <div className="flex flex-col gap-2 mt-auto">
            <div className="text-[#ede4dc] font-['Poppins'] text-sm">
              © 2025 Virtueel Wandelen
            </div>
            <div className="text-[#ede4dc] font-['Poppins'] text-sm">
              Terms and Conditions | Privacy Policy
            </div>
          </div>
        </div>

        {/* Menu Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#ede4dc] font-['Poppins'] text-2xl font-medium">
            Menu
          </h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-[#ede4dc] font-['Poppins'] hover:text-[#a6a643] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#ede4dc] font-['Poppins'] hover:text-[#a6a643] transition-colors">
              Our Vision
            </a>
            <a href="#" className="text-[#ede4dc] font-['Poppins'] hover:text-[#a6a643] transition-colors">
              Subscriptions
            </a>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#ede4dc] font-['Poppins'] text-2xl font-medium">
            Contact ons
          </h3>
          <div className="flex flex-col gap-4">
            <div className="text-[#ede4dc] font-['Poppins']">
              Tel: 06-43754290
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#ede4dc] font-['Poppins']">Email:</span>
              <span className="text-[#ede4dc] font-['Poppins']">info@virtueelwandelen.nl</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#ede4dc] font-['Poppins']">Dominee C. Keersstraat 79</span>
              <span className="text-[#ede4dc] font-['Poppins']">8151 AB Lemelerveld</span>
            </div>
          </div>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#ede4dc] font-['Poppins'] text-2xl font-medium">
            Socials
          </h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-[#ede4dc] font-['Poppins'] hover:text-[#a6a643] transition-colors">
              Facebook
            </a>
            <a href="#" className="text-[#ede4dc] font-['Poppins'] hover:text-[#a6a643] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-[#ede4dc] font-['Poppins'] hover:text-[#a6a643] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
