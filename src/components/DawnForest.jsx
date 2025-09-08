import React from "react";
import DawnForestImage from "../assets/dawnforest.png";

const DawnForest = () => (
  <div className="flex-shrink-0 w-screen h-[998px] bg-[#1f1915] relative">
    {/* Background Layer */}
    <div className="flex-shrink-0 w-full h-[998px] bg-[#1f1915]" />
    
    {/* Image Section - Left side */}
    <div className="flex-shrink-0 w-[647px] h-[998px] bg-gray-300 bg-cover bg-no-repeat bg-center absolute top-0 left-0">
      <img src={DawnForestImage} alt="Dawn Forest" className="w-full h-full object-cover" />
    </div>
    
    {/* Content Section - Right side */}
    <div className="absolute inset-0 flex flex-col justify-center items-end px-20 md:px-10">
      <div className="w-full max-w-[563px]">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2 w-[513px] md:w-full mb-16">
          <div className="self-stretch text-[#a6a643] font-['Poppins'] text-[2rem] md:text-[1.5rem] font-semibold leading-[136%]" 
               style={{letterSpacing: '-0.32px'}}>
            Why Virtual Walking?
          </div>
          <div className="self-stretch text-[#ede4dc] font-['Poppins'] text-5xl md:text-3xl font-semibold leading-[136%]" 
               style={{letterSpacing: '-0.48px'}}>
            Experience nature, wherever you are.
          </div>
        </div>

        {/* Features List */}
        <div className="inline-flex flex-col items-start gap-9 w-full max-w-[563px]">
        {/* Divider */}
        <div className="w-[531px] md:w-full h-px bg-[#d9bbaa]" />
        
        {/* Memory Stimulation */}
        <div className="flex items-start gap-4">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="aspect-square flex-shrink-0">
            <g clipPath="url(#clip0_1152_17446)">
              <path d="M20.6641 28.6667C20.6641 28.6667 11.9974 29.3333 7.33073 24C2.66406 18.6667 2.66406 2.66667 2.66406 2.66667C2.66406 2.66667 18.6641 2 23.9974 6C29.3307 10 27.9974 21.3333 27.9974 21.3333" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.3307 29.3346C29.3307 29.3346 21.8779 23.7023 17.3307 18.668C12.7836 13.6336 10.6641 8.66797 10.6641 8.66797" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.3281 18.6667L17.9948 10" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.3307 18.6667L10.6641 18" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1152_17446">
                <rect width={32} height={32} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col items-start gap-2">
            <div className="self-stretch text-white font-['Poppins'] text-2xl md:text-xl font-semibold leading-[136%]" 
                 style={{letterSpacing: '-0.24px'}}>
              Memory Stimulation
            </div>
            <div className="w-[483px] md:w-full text-[#b3b1ac] font-['Poppins'] leading-[136%]" 
                 style={{letterSpacing: '-0.16px'}}>
              Familiar sights and sounds bring back memories, sparking joy and recognition.
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-[531px] md:w-full h-px bg-[#d9bbaa]" />
        
        {/* Mood & Social Boost */}
        <div className="flex items-start gap-4">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="aspect-square flex-shrink-0">
            <path d="M5.62693 29.328V24.5946C5.62693 22.9 5.18293 22.0186 4.31093 20.5453C3.2479 18.7455 2.67984 16.6965 2.66439 14.6063C2.64893 12.516 3.18663 10.4589 4.22292 8.64352C5.25921 6.82818 6.75723 5.31924 8.565 4.26978C10.3728 3.22032 12.426 2.6677 14.5163 2.66797C17.659 2.66832 20.673 3.91676 22.8956 6.13879C25.1181 8.36081 26.3672 11.3745 26.3683 14.5173C26.3683 15.2906 26.3683 15.6773 26.4003 15.8933C26.4776 16.4106 26.7203 16.856 26.9563 17.3173L29.3309 21.9226L27.4643 22.856C26.9243 23.1253 26.6536 23.26 26.4656 23.5093C26.2776 23.7586 26.2243 24.0413 26.1189 24.6026L26.1083 24.6586C25.8643 25.9493 25.5963 27.3733 24.8416 28.272C24.5749 28.588 24.2443 28.8453 23.8723 29.028C23.2576 29.328 22.5016 29.328 20.9896 29.328C20.2896 29.328 19.5883 29.344 18.8883 29.328C17.2309 29.2866 15.9976 27.892 15.9976 26.2746" stroke="#A6A643" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.1811 14.0441C18.6131 14.0441 18.0944 13.8281 17.7011 13.4748M19.1811 14.0441C19.1811 15.5721 18.2958 17.0228 16.5918 17.0228C14.8878 17.0228 14.0024 18.4734 14.0024 20.0014M19.1811 14.0441C22.0478 14.0441 22.0478 9.57612 19.1811 9.57612C18.9198 9.577 18.6722 9.61923 18.4384 9.70278C18.5784 6.37212 13.7771 5.46812 12.6891 8.58812M12.6891 8.58812C13.4824 9.12278 14.0024 10.0321 14.0024 11.0641M12.6891 8.58812C10.2198 6.92145 6.92911 9.91211 8.49445 12.5788C5.86778 12.9721 6.14778 17.0228 8.82378 17.0228C9.18058 17.0226 9.53206 16.9362 9.84826 16.7709C10.1645 16.6056 10.436 16.3663 10.6398 16.0734" stroke="#A6A643" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col items-start gap-2">
            <div className="self-stretch text-white font-['Poppins'] text-2xl md:text-xl font-semibold leading-[136%]" 
                 style={{letterSpacing: '-0.24px'}}>
              Mood &amp; Social Boost
            </div>
            <div className="w-[483px] md:w-full text-[#b3b1ac] font-['Poppins'] leading-[136%]" 
                 style={{letterSpacing: '-0.16px'}}>
              Virtual walks spark conversation — enjoy alone or share with family and caregivers.
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-[531px] md:w-full h-px bg-[#d9bbaa]" />
        
        {/* Safe & Accessible */}
        <div className="flex items-start gap-4">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="aspect-square flex-shrink-0">
            <path d="M22.6641 26.6654H29.3307V23.9987C29.3307 23.1674 29.0716 22.3568 28.5896 21.6795C28.1075 21.0023 27.4265 20.492 26.6411 20.2197C25.8556 19.9474 25.0049 19.9265 24.2071 20.1601C23.4093 20.3936 22.704 20.8699 22.1894 21.5227M22.6641 26.6654H9.33073M22.6641 26.6654V23.9987C22.6641 23.124 22.4961 22.288 22.1894 21.5227M22.1894 21.5227C21.6943 20.2853 20.8397 19.2246 19.7361 18.4775C18.6324 17.7304 17.3302 17.3311 15.9974 17.3311C14.6646 17.3311 13.3624 17.7304 12.2587 18.4775C11.1551 19.2246 10.3005 20.2853 9.8054 21.5227M9.33073 26.6654H2.66406V23.9987C2.66412 23.1674 2.92318 22.3568 3.40521 21.6795C3.88725 21.0023 4.56831 20.492 5.35373 20.2197C6.13915 19.9474 6.9899 19.9265 7.78771 20.1601C8.58553 20.3936 9.29077 20.8699 9.8054 21.5227M9.33073 26.6654V23.9987C9.33073 23.124 9.49873 22.288 9.8054 21.5227M19.9974 9.33203C19.9974 10.3929 19.576 11.4103 18.8258 12.1605C18.0757 12.9106 17.0583 13.332 15.9974 13.332C14.9365 13.332 13.9191 12.9106 13.169 12.1605C12.4188 11.4103 11.9974 10.3929 11.9974 9.33203C11.9974 8.27117 12.4188 7.25375 13.169 6.5036C13.9191 5.75346 14.9365 5.33203 15.9974 5.33203C17.0583 5.33203 18.0757 5.75346 18.8258 6.5036C19.576 7.25375 19.9974 8.27117 19.9974 9.33203ZM27.9974 13.332C27.9974 14.0393 27.7164 14.7176 27.2163 15.2176C26.7162 15.7177 26.038 15.9987 25.3307 15.9987C24.6235 15.9987 23.9452 15.7177 23.4451 15.2176C22.945 14.7176 22.6641 14.0393 22.6641 13.332C22.6641 12.6248 22.945 11.9465 23.4451 11.4464C23.9452 10.9463 24.6235 10.6654 25.3307 10.6654C26.038 10.6654 26.7162 10.9463 27.2163 11.4464C27.7164 11.9465 27.9974 12.6248 27.9974 13.332ZM9.33073 13.332C9.33073 14.0393 9.04978 14.7176 8.54968 15.2176C8.04958 15.7177 7.37131 15.9987 6.66406 15.9987C5.95682 15.9987 5.27854 15.7177 4.77844 15.2176C4.27835 14.7176 3.9974 14.0393 3.9974 13.332C3.9974 12.6248 4.27835 11.9465 4.77844 11.4464C5.27854 10.9463 5.95682 10.6654 6.66406 10.6654C7.37131 10.6654 8.04958 10.9463 8.54968 11.4464C9.04978 11.9465 9.33073 12.6248 9.33073 13.332Z" stroke="#A6A643" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col items-start gap-2">
            <div className="self-stretch text-white font-['Poppins'] text-2xl md:text-xl font-semibold leading-[136%]" 
                 style={{letterSpacing: '-0.24px'}}>
              Safe &amp; Accessible
            </div>
            <div className="w-[483px] md:w-full text-[#b3b1ac] font-['Poppins'] leading-[136%]" 
                 style={{letterSpacing: '-0.16px'}}>
              Bring nature indoors for those who can't walk outside, with no risk of falling or getting lost.
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-[531px] md:w-full h-px bg-[#d9bbaa]" />
        
        {/* Stress & Anxiety Relief */}
        <div className="flex items-start gap-4">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="aspect-square flex-shrink-0">
            <g clipPath="url(#clip0_1152_17473)">
              <path d="M20.6641 28.6667C20.6641 28.6667 11.9974 29.3333 7.33073 24C2.66406 18.6667 2.66406 2.66667 2.66406 2.66667C2.66406 2.66667 18.6641 2 23.9974 6C29.3307 10 27.9974 21.3333 27.9974 21.3333" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.3307 29.3346C29.3307 29.3346 21.8779 23.7023 17.3307 18.668C12.7836 13.6336 10.6641 8.66797 10.6641 8.66797" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.3281 18.6667L17.9948 10" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.3307 18.6667L10.6641 18" stroke="#A6A643" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1152_17473">
                <rect width={32} height={32} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col items-start gap-2">
            <div className="self-stretch text-white font-['Poppins'] text-2xl md:text-xl font-semibold leading-[136%]" 
                 style={{letterSpacing: '-0.24px'}}>
              Stress &amp; Anxiety Relief
            </div>
            <div className="w-[483px] md:w-full text-[#b3b1ac] font-['Poppins'] leading-[136%]" 
                 style={{letterSpacing: '-0.16px'}}>
              Natural images and sounds help calm the mind and ease tension.
            </div>
          </div>
        </div>
        
        {/* Final Divider */}
        <div className="w-[531px] md:w-full h-px bg-[#d9bbaa]" />
        </div>
      </div>
    </div>
  </div>
);

export default DawnForest;
