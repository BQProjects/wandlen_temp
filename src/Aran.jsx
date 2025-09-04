import React from "react";
import Background from "./assets/background.png";
import Background2 from "./assets/Background2.png";
import ForestTrail from "./assets/forest_trail.png";;
import Testimonial from "./components/TestimonialScroll";
import FaqQuestions from "./components/FaqQuestions";
import WhyVirtualWalking from "./components/WhyVirtualWalking";
import SubscribeCard from "./components/SubscribeCard";
import Footer from "./components/Footer";
import RequestCard from "./components/RequestCard";

const Aran = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-subtitle">Virtueel Wandelen</h1>
            <p className="hero-title">
              Wandel door je
              <br />
              herinneringen
            </p>
            <p className="hero-description">
              Virtueel Wandelen brengt de natuur tot leven met rustgevende
              <br />
              natuurwandelvideo's voor ouderen en mensen met dementie.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Request for quote</button>
              <button className="btn-secondary">View subscription plans</button>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="microphone-scroll-indicator">
              <svg width={33} height={46} viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16.5833C2 12.7156 3.53645 9.00626 6.27136 6.27136C9.00626 3.53645 12.7156 2 16.5833 2C20.4511 2 24.1604 3.53645 26.8953 6.27136C29.6302 9.00626 31.1667 12.7156 31.1667 16.5833V29.0833C31.1667 30.9984 30.7895 32.8948 30.0566 34.6641C29.3237 36.4335 28.2495 38.0411 26.8953 39.3953C25.5411 40.7495 23.9335 41.8237 22.1641 42.5566C20.3948 43.2895 18.4984 43.6667 16.5833 43.6667C14.6682 43.6667 12.7719 43.2895 11.0025 42.5566C9.2332 41.8237 7.62555 40.7495 6.27136 39.3953C4.91717 38.0411 3.84297 36.4335 3.11009 34.6641C2.37721 32.8948 2 30.9984 2 29.0833V16.5833Z" stroke="#EDE4DC" strokeWidth="3.125" />
                <path d="M13.4609 15.543C13.4609 14.7142 13.7902 13.9193 14.3762 13.3333C14.9623 12.7472 15.7571 12.418 16.5859 12.418C17.4147 12.418 18.2096 12.7472 18.7956 13.3333C19.3817 13.9193 19.7109 14.7142 19.7109 15.543V19.7096C19.7109 20.5384 19.3817 21.3333 18.7956 21.9193C18.2096 22.5054 17.4147 22.8346 16.5859 22.8346C15.7571 22.8346 14.9623 22.5054 14.3762 21.9193C13.7902 21.3333 13.4609 20.5384 13.4609 19.7096V15.543Z" stroke="#EDE4DC" strokeWidth="3.125" />
                <path d="M16.5859 2V12.4167" stroke="#EDE4DC" strokeWidth="3.125" strokeLinecap="round" />
              </svg>
              <div className="scroll-arrows-new">
                <svg width={19} height={11} viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.8457 9.00488L2.05762 2.14941L2.05176 2.15527L9.34375 9.52344L9.3457 9.52539L9.39844 9.56836C9.40219 9.57091 9.40631 9.57281 9.41016 9.5752L8.8457 9.00488ZM17.1152 2.15039L10.3262 9.00586L9.76855 9.56934C9.78748 9.55661 9.80588 9.54204 9.82227 9.52539L9.82422 9.52344L17.1201 2.15527L17.1152 2.15039Z" fill="#381207" stroke="#EDE4DC" strokeWidth="2.08333" />
                </svg>
                <svg width={19} height={11} viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.8457 9.00488L2.05762 2.14941L2.05176 2.15527L9.34375 9.52344L9.3457 9.52539L9.39844 9.56836C9.40219 9.57091 9.40631 9.57281 9.41016 9.5752L8.8457 9.00488ZM17.1152 2.15039L10.3262 9.00586L9.76855 9.56934C9.78748 9.55661 9.80588 9.54204 9.82227 9.52539L9.82422 9.52344L17.1201 2.15527L17.1152 2.15039Z" fill="#381207" stroke="#D9BBAA" strokeWidth="2.08333" />
                </svg>
                <svg width={19} height={11} viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.8457 9.00488L2.05762 2.14941L2.05176 2.15527L9.34375 9.52344L9.3457 9.52539L9.39844 9.56836C9.40219 9.57091 9.40631 9.57281 9.41016 9.5752L8.8457 9.00488ZM17.1152 2.15039L10.3262 9.00586L9.76855 9.56934C9.78748 9.55661 9.80588 9.54204 9.82227 9.52539L9.82422 9.52344L17.1201 2.15527L17.1152 2.15039Z" fill="#381207" stroke="#D9BBAA" strokeWidth="2.08333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <img src={Background} alt="Nature background" />
          <div className="overlay"></div>
        </div>
      </div>

      <div className="second-hero-container">
        <div className="second-hero-background"></div>
        
        <div className="subtitle-section">
          Digitale wandelingen in de Overijsselse natuur
        </div>

        <div className="main-description">
          Stel je voor: een boswandeling, het ritselen van bladeren en fluitende vogels. Voor mensen met dementie kan zo'n natuurbeleving veel betekenen. Virtueel Wandelen brengt deze ervaring dichtbij, gewoon vanuit huis of een zorginstelling. Het biedt rust, ontspanning en herkenning
        </div>

        <div className="features-container">
          <div className="feature-item">
            <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M72.9351 7.16797L68.9351 8.5013C62.0798 10.8831 54.7593 11.614 47.5684 10.6346C40.0123 9.46201 32.2782 10.504 25.3018 13.6346C21.6034 15.2095 18.3576 17.6844 15.86 20.834C13.3624 23.9836 11.6923 27.708 11.0018 31.668C10.2993 35.4761 10.3712 39.3868 11.2131 43.1666C12.0549 46.9464 13.6495 50.5179 15.9018 53.668C15.7018 54.368 15.5018 55.068 15.3351 55.768C13.9812 61.5247 13.31 67.4209 13.3351 73.3346H20.0018C20.3185 68.4944 20.9757 63.6825 21.9684 58.9346C26.5932 61.432 31.7796 62.7056 37.0351 62.6346C41.9367 62.6313 46.7879 61.6452 51.3018 59.7346C76.6684 48.9013 73.3351 12.868 73.3351 11.368L72.9351 7.16797ZM48.7018 53.6013C40.0018 57.3013 29.6018 56.668 23.7684 52.1013C24.7546 48.8048 26.1075 45.6294 27.8018 42.6346C29.1198 40.4798 30.6738 38.4786 32.4351 36.668C34.2355 34.8386 36.2631 33.2478 38.4684 31.9346C43.0253 29.2098 48.0791 27.4195 53.3351 26.668V23.3346C47.2874 23.1214 41.2762 24.3557 35.8018 26.9346C30.2051 29.6693 25.4578 33.875 22.0684 39.1013C20.8117 41.0978 19.6978 43.1808 18.7351 45.3346C17.1902 41.3825 16.7523 37.0838 17.4684 32.9013C17.9377 29.9731 19.1448 27.2126 20.9759 24.8799C22.8071 22.5472 25.2021 20.7191 27.9351 19.568C31.9194 17.702 36.2689 16.7456 40.6684 16.768C42.7351 16.768 44.7684 16.968 46.9018 17.1346C53.5829 17.9966 60.3662 17.6009 66.9018 15.968C66.6684 25.168 65.0018 46.668 48.7018 53.6013Z" fill="#5B6502" />
            </svg>
            <div className="feature-title">Explore Overijssel's Nature Videos</div>
          </div>
          
          <div className="feature-item">
            <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.5024 15C37.5024 13.0222 38.0889 11.0888 39.1877 9.4443C40.2865 7.79981 41.8483 6.51809 43.6756 5.76121C45.5028 5.00433 47.5135 4.8063 49.4533 5.19215C51.3931 5.578 53.1749 6.53041 54.5735 7.92894C55.972 9.32746 56.9244 11.1093 57.3103 13.0491C57.6961 14.9889 57.4981 16.9996 56.7412 18.8268C55.9843 20.6541 54.7026 22.2159 53.0581 23.3147C51.4136 24.4135 49.4802 25 47.5024 25C44.8502 25 42.3067 23.9464 40.4313 22.0711C38.556 20.1957 37.5024 17.6522 37.5024 15ZM65.0024 42.5C56.0524 42.5 51.9368 38.3438 47.5805 33.9469C46.4774 32.8313 45.3368 31.6781 44.143 30.6406C32.5805 20.5969 14.0743 37.7438 13.293 38.4781C12.8278 38.9361 12.5602 39.5579 12.5474 40.2107C12.5345 40.8634 12.7776 41.4952 13.2245 41.9711C13.6714 42.447 14.2868 42.7292 14.939 42.7574C15.5912 42.7855 16.2286 42.5575 16.7149 42.1219C19.6233 39.4949 22.8233 37.2102 26.2524 35.3125C30.5587 33.0063 34.1868 32.1156 37.0962 32.6313L20.2087 71.5031C19.945 72.1111 19.9335 72.7989 20.1766 73.4153C20.4198 74.0318 20.8978 74.5264 21.5055 74.7906C21.8194 74.9298 22.1591 75.0012 22.5024 75C22.9896 75.0002 23.4663 74.8581 23.8738 74.591C24.2813 74.324 24.6019 73.9437 24.7962 73.4969L35.293 49.35L45.0024 56.2875V72.5C45.0024 73.163 45.2658 73.7989 45.7346 74.2678C46.2035 74.7366 46.8394 75 47.5024 75C48.1654 75 48.8013 74.7366 49.2702 74.2678C49.739 73.7989 50.0024 73.163 50.0024 72.5V55C50.0024 54.6021 49.9074 54.2099 49.7253 53.856C49.5433 53.5022 49.2793 53.1969 48.9555 52.9656L37.3305 44.6625L41.5274 35C42.3524 35.7625 43.1712 36.5844 44.0274 37.45C48.4555 41.9344 53.968 47.5 65.0024 47.5C65.6655 47.5 66.3013 47.2366 66.7702 46.7678C67.239 46.2989 67.5024 45.663 67.5024 45C67.5024 44.337 67.239 43.7011 66.7702 43.2322C66.3013 42.7634 65.6655 42.5 65.0024 42.5Z" fill="#5B6502" />
            </svg>
            <div className="feature-title">Enjoy Unique & Simple Viewing</div>
          </div>
          
          <div className="feature-item">
            <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.0017 1.66797V13.048H33.335V1.66797H40.0017ZM16.6683 10.2846L24.715 18.3313L20.0017 23.0446L11.955 15.0013L16.6683 10.2846ZM61.3817 14.998L53.335 23.0446L48.6217 18.3346L56.6683 10.2846L61.3817 14.998ZM36.6683 22.7013C36 22.7013 35.359 22.9668 34.8864 23.4394C34.4138 23.912 34.1483 24.553 34.1483 25.2213V58.658L19.155 55.3246L18.8217 55.828L30.235 70.6813C30.4713 70.9868 30.7744 71.2343 31.1211 71.4047C31.4677 71.5751 31.8487 71.6641 32.235 71.6646H55.855C56.3839 71.6632 56.8991 71.4962 57.3283 71.1871C57.7575 70.8781 58.0792 70.4424 58.2483 69.9413L64.1883 52.108C64.3705 51.5581 64.3587 50.9623 64.1549 50.4201C63.9511 49.8778 63.5676 49.4218 63.0683 49.128L50.985 42.078C50.5993 41.8537 50.1612 41.7352 49.715 41.7346H39.185V25.2213C39.185 24.5535 38.92 23.9131 38.4481 23.4406C37.9762 22.9681 37.3361 22.7022 36.6683 22.7013ZM27.4817 25.2213C27.5275 22.8156 28.5153 20.5239 30.2329 18.8388C31.9504 17.1536 34.2605 16.2096 36.6667 16.2096C39.0728 16.2096 41.3829 17.1536 43.1005 18.8388C44.818 20.5239 45.8058 22.8156 45.8517 25.2213V35.068H49.715C51.3417 35.068 52.9417 35.5013 54.3483 36.318L66.4283 43.3713C68.2488 44.436 69.6481 46.0939 70.3921 48.0673C71.1361 50.0407 71.1795 52.2098 70.515 54.2113L64.5717 72.0446C63.961 73.8739 62.7909 75.465 61.2267 76.5931C59.6626 77.7212 57.7835 78.3292 55.855 78.3313H32.235C30.8275 78.3304 29.439 78.0066 28.1763 77.3848C26.9136 76.763 25.8104 75.8598 24.9517 74.7446L10.625 56.1013L13.7583 51.3946C14.4598 50.3429 15.4631 49.5279 16.6362 49.0568C17.8093 48.5856 19.0976 48.4803 20.3317 48.7546L27.4817 50.3446V25.2213Z" fill="#5B6502" />
            </svg>
            <div className="feature-title">Watch Instantly with One Click</div>
          </div>
        </div>
      </div>

      {/* Preview Experience Section */}
      <div className="preview-experience-container">
        <div className="preview-experience-background"></div>
        
        <div className="preview-header">
          <div className="preview-title">Preview Your Experience</div>
          <div className="preview-subtitle">See how it looks on laptop, tablet, and mobile</div>
        </div>
        
        <div className="video-preview-section">
          <img src={ForestTrail} alt="Forest Trail" />
          
          <div className="device-selector">
            <div className="device-icon active">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 4.5C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V16.5H3V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25ZM3.75 3C3.15326 3 2.58097 3.23705 2.15901 3.65901C1.73705 4.08097 1.5 4.65326 1.5 5.25V18H22.5V5.25C22.5 4.65326 22.2629 4.08097 21.841 3.65901C21.419 3.23705 20.8467 3 20.25 3H3.75ZM0 18.75H24C24 19.3467 23.7629 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H2.25C1.65326 21 1.08097 20.7629 0.65901 20.341C0.237053 19.919 0 19.3467 0 18.75Z" fill="white" />
              </svg>
            </div>
            <div className="device-icon">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 18H13M5.875 3H18.125C18.608 3 19 3.448 19 4V20C19 20.552 18.608 21 18.125 21H5.875C5.392 21 5 20.552 5 20V4C5 3.448 5.392 3 5.875 3Z" stroke="#4B4741" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="device-icon">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3.25H8C7.04 3.25 6.25 4.04 6.25 5V19C6.25 19.96 7.04 20.75 8 20.75H16C16.96 20.75 17.75 19.96 17.75 19V5C17.75 4.04 16.96 3.25 16 3.25ZM16.25 19C16.25 19.14 16.14 19.25 16 19.25H8C7.86 19.25 7.75 19.14 7.75 19V5C7.75 4.86 7.86 4.75 8 4.75H16C16.14 4.75 16.25 4.86 16.25 5V19ZM13 16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16Z" fill="#4B4741" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <WhyVirtualWalking/>
      
      {/* Discover Nature Videos Section */}
      <div className="flex-shrink-0 w-full min-h-[941px] bg-[#eeebc6] flex flex-col items-center justify-center py-16 px-8">
        <div className="w-full max-w-[1280px] mx-auto text-center">
          {/* Header Section */}
          <div className="mb-16">
            <div className="text-[#5b6502] font-['Poppins'] text-4xl lg:text-5xl font-semibold leading-[136%] mb-4" style={{letterSpacing: '-0.32px'}}>
              Discover Nature Videos
            </div>
            <div className="text-[#381207] font-['Poppins'] text-2xl lg:text-4xl font-semibold leading-[136%]" style={{letterSpacing: '-0.48px'}}>
              Choose a route or season.
            </div>
          </div>

          {/* Video Grid - 2x2 Layout */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-[1050px] mx-auto">
            {/* Video 1 - Mountain/Forest Scene */}
            <div className="relative w-full h-[250px] lg:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-200 via-green-200 to-gray-300 bg-cover bg-center bg-no-repeat" 
                 style={{backgroundImage: "linear-gradient(135deg, #87CEEB 0%, #98FB98 50%, #D3D3D3 100%)"}}>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65px] h-[65px] lg:w-[81px] lg:h-[81px] rounded-full bg-[#DD9219] bg-opacity-80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                  <svg width={28} height={28} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-8 lg:h-8">
                    <path d="M26 14.268C27.3333 15.0378 27.3333 16.9623 26 17.7321L10.5 26.9186C9.1667 27.6884 7.5 26.7261 7.5 25.1865V6.8135C7.5 5.2739 9.1667 4.3116 10.5 5.0814L26 14.268Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Volume Control */}
              <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 flex items-center justify-center p-2 h-8 w-8 lg:h-10 lg:w-10 rounded bg-white bg-opacity-50 backdrop-blur-sm"> 
                <svg width={14} height={10} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-4 lg:h-3">
                  <path d="M8 1V11M4 3.5V8.5M12 2V10M0 4.5V7.5" stroke="#381207" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Video 2 - Purple Lavender Scene */}
            <div className="relative w-full h-[250px] lg:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 bg-cover bg-center bg-no-repeat"
                 style={{backgroundImage: "linear-gradient(135deg, #DDA0DD 0%, #FFB6C1 50%, #FFDAB9 100%)"}}>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65px] h-[65px] lg:w-[81px] lg:h-[81px] rounded-full bg-[#DD9219] bg-opacity-80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                  <svg width={28} height={28} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-8 lg:h-8">
                    <path d="M26 14.268C27.3333 15.0378 27.3333 16.9623 26 17.7321L10.5 26.9186C9.1667 27.6884 7.5 26.7261 7.5 25.1865V6.8135C7.5 5.2739 9.1667 4.3116 10.5 5.0814L26 14.268Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Volume Control */}
              <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 flex items-center justify-center p-2 h-8 w-8 lg:h-10 lg:w-10 rounded bg-white bg-opacity-50 backdrop-blur-sm"> 
                <svg width={14} height={10} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-4 lg:h-3">
                  <path d="M8 1V11M4 3.5V8.5M12 2V10M0 4.5V7.5" stroke="#381207" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Video 3 - Ocean Sunset Scene */}
            <div className="relative w-full h-[250px] lg:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200 bg-cover bg-center bg-no-repeat"
                 style={{backgroundImage: "linear-gradient(135deg, #87CEFA 0%, #DDA0DD 50%, #FFB6C1 100%)"}}>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65px] h-[65px] lg:w-[81px] lg:h-[81px] rounded-full bg-[#DD9219] bg-opacity-80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                  <svg width={28} height={28} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-8 lg:h-8">
                    <path d="M26 14.268C27.3333 15.0378 27.3333 16.9623 26 17.7321L10.5 26.9186C9.1667 27.6884 7.5 26.7261 7.5 25.1865V6.8135C7.5 5.2739 9.1667 4.3116 10.5 5.0814L26 14.268Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Volume Control */}
              <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 flex items-center justify-center p-2 h-8 w-8 lg:h-10 lg:w-10 rounded bg-white bg-opacity-50 backdrop-blur-sm"> 
                <svg width={14} height={10} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-4 lg:h-3">
                  <path d="M8 1V11M4 3.5V8.5M12 2V10M0 4.5V7.5" stroke="#381207" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Video 4 - Winter Forest Scene */}
            <div className="relative w-full h-[250px] lg:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 via-gray-200 to-white bg-cover bg-center bg-no-repeat"
                 style={{backgroundImage: "linear-gradient(135deg, #228B22 0%, #D3D3D3 50%, #FFFFFF 100%)"}}>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65px] h-[65px] lg:w-[81px] lg:h-[81px] rounded-full bg-[#DD9219] bg-opacity-80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                  <svg width={28} height={28} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-8 lg:h-8">
                    <path d="M26 14.268C27.3333 15.0378 27.3333 16.9623 26 17.7321L10.5 26.9186C9.1667 27.6884 7.5 26.7261 7.5 25.1865V6.8135C7.5 5.2739 9.1667 4.3116 10.5 5.0814L26 14.268Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Volume Control */}
              <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 flex items-center justify-center p-2 h-8 w-8 lg:h-10 lg:w-10 rounded bg-white bg-opacity-50 backdrop-blur-sm"> 
                <svg width={14} height={10} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-4 lg:h-3">
                  <path d="M8 1V11M4 3.5V8.5M12 2V10M0 4.5V7.5" stroke="#381207" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Positive Experiences Section */}
      <div className="flex-shrink-0 w-full bg-[#ede4dc] py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex items-start justify-between gap-8 min-h-[400px]">
            {/* Left Card - Family Connection */}
            <div className="flex-shrink-0 inline-flex flex-col justify-between items-start p-8 h-[328px] w-[303px] rounded-2xl bg-[#f7f6f4]">
              <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53.3359 31.9987C53.3359 26.3407 51.0883 20.9145 47.0875 16.9138C43.0868 12.913 37.6606 10.6654 32.0026 10.6654C26.3447 10.6654 20.9184 12.913 16.9177 16.9138C12.9169 20.9145 10.6693 26.3407 10.6693 31.9987C10.6693 37.6566 12.9169 43.0829 16.9177 47.0836C20.9184 51.0844 26.3447 53.332 32.0026 53.332C37.6606 53.332 43.0868 51.0844 47.0875 47.0836C51.0883 43.0829 53.3359 37.6566 53.3359 31.9987ZM58.6693 31.9987C58.6693 39.0711 55.8598 45.8539 50.8588 50.8549C45.8578 55.8558 39.075 58.6654 32.0026 58.6654C28.5007 58.6654 25.0331 57.9756 21.7977 56.6355C18.5624 55.2954 15.6227 53.3311 13.1464 50.8549C8.14545 45.8539 5.33594 39.0711 5.33594 31.9987C5.33594 24.9263 8.14545 18.1435 13.1464 13.1425C18.1474 8.14155 24.9302 5.33203 32.0026 5.33203C35.5045 5.33203 38.9721 6.02179 42.2075 7.36191C45.4428 8.70204 48.3826 10.6663 50.8588 13.1425C53.335 15.6187 55.2993 18.5585 56.6394 21.7938C57.9795 25.0292 58.6693 28.4968 58.6693 31.9987ZM26.6693 25.332C26.6693 27.4654 24.8026 29.332 22.6693 29.332C20.5359 29.332 18.6693 27.4654 18.6693 25.332C18.6693 23.1987 20.5359 21.332 22.6693 21.332C24.8026 21.332 26.6693 23.1987 26.6693 25.332ZM45.3359 25.332C45.3359 27.4654 43.4693 29.332 41.3359 29.332C39.2026 29.332 37.3359 27.4654 37.3359 25.332C37.3359 23.1987 39.2026 21.332 41.3359 21.332C43.4693 21.332 45.3359 23.1987 45.3359 25.332ZM32.0026 45.9454C27.3359 45.9454 23.2293 43.9987 20.8293 41.1187L24.6159 37.332C25.8159 39.252 28.6693 40.612 32.0026 40.612C35.3359 40.612 38.1893 39.252 39.3893 37.332L43.1759 41.1187C40.7759 43.9987 36.6693 45.9454 32.0026 45.9454Z" fill="#381207" />
              </svg>
              <div className="flex flex-col items-start gap-5 w-full">
                <div className="text-[#381207] text-center font-['Poppins'] text-2xl font-medium leading-[normal] w-full">
                  Family Connection
                </div>
                <div className="text-[#381207] font-['Poppins'] leading-[normal] w-full">
                  Loved ones feel happier and more alert when watching together.
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center gap-10 flex-1 text-center">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="text-[#a6a643] font-['Poppins'] text-[2rem] font-semibold leading-[136%] w-full" style={{letterSpacing: '-0.32px'}}>
                  Positive Experiences
                </div>
                <div className="text-[#381207] font-['Poppins'] text-4xl lg:text-5xl font-semibold leading-[136%] w-full" style={{letterSpacing: '-0.48px'}}>
                  Virtueel Wandelen creates warm, positive moments for all.
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-[#a6a643] text-white font-['Poppins'] text-xl font-medium leading-[136%] cursor-pointer hover:bg-opacity-90 transition-all" style={{letterSpacing: '-0.2px'}}>
                Watch Now
              </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-4 flex-shrink-0">
              {/* Top Right Card - Calm & Comfort */}
              <div className="inline-flex flex-col justify-between items-start p-8 h-[328px] w-[303px] rounded-2xl bg-[#f7f6f4]">
                <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M61.4571 30.4075C61.202 29.9593 60.8601 29.5664 60.4515 29.2518C60.0429 28.9371 59.5756 28.7071 59.0771 28.575C57.2686 28.1094 55.3996 27.9223 53.5346 28.02C54.5346 23.0575 53.7846 19.1325 53.0196 16.805C52.7147 15.8489 52.0646 15.0406 51.1962 14.5378C50.3277 14.0349 49.3031 13.8735 48.3221 14.085C45.7781 14.6514 43.3592 15.6783 41.1846 17.115C39.5918 13.8617 37.2731 11.0177 34.4071 8.8025C33.7126 8.28159 32.8678 8 31.9996 8C31.1314 8 30.2867 8.28159 29.5921 8.8025C26.7256 11.0171 24.4066 13.8612 22.8146 17.115C20.6401 15.6783 18.2211 14.6514 15.6771 14.085C14.6961 13.8735 13.6715 14.0349 12.8031 14.5378C11.9346 15.0406 11.2845 15.8489 10.9796 16.805C10.2296 19.1325 9.47962 23.055 10.4646 28.02C8.59965 27.9223 6.73068 28.1094 4.92212 28.575C4.42359 28.7071 3.95636 28.9371 3.54772 29.2518C3.13909 29.5664 2.79723 29.9593 2.54212 30.4075C2.27513 30.8666 2.10226 31.3744 2.03358 31.901C1.9649 32.4277 2.0018 32.9627 2.14212 33.475C2.98962 36.6175 5.59212 42.595 13.4746 47.305C21.3571 52.015 28.2821 52 32.0121 52C35.7421 52 42.6796 52 50.5121 47.305C58.3946 42.595 60.9971 36.6175 61.8446 33.475C61.9868 32.9636 62.0258 32.4289 61.9592 31.9023C61.8927 31.3756 61.722 30.8675 61.4571 30.4075ZM14.7846 18.035C14.7876 18.0226 14.7952 18.0118 14.8059 18.0048C14.8166 17.9979 14.8296 17.9952 14.8421 17.9975C17.1684 18.5228 19.3637 19.5154 21.2946 20.915C20.4155 23.7914 19.9789 26.7848 19.9996 29.7925C19.9996 34.4775 20.9421 38.2925 22.2771 41.3625C20.3793 39.4629 18.7371 37.3241 17.3921 35C12.8871 27.155 13.8246 21 14.7846 18.035ZM15.5346 43.8725C8.86712 39.8925 6.70462 35.0125 5.99962 32.425C7.83915 31.972 9.74802 31.8727 11.6246 32.1325C12.251 33.8107 13.0162 35.4338 13.9121 36.985C16.1119 40.7773 18.9936 44.1302 22.4121 46.875C19.9948 46.1798 17.6792 45.1703 15.5246 43.8725H15.5346ZM31.9996 47.6C29.6671 45.865 23.9996 40.5425 23.9996 29.7925C23.9996 19.175 29.5946 13.81 31.9996 12C34.4046 13.815 39.9996 19.18 39.9996 29.7975C39.9996 40.5425 34.3321 45.865 31.9996 47.6ZM42.7046 20.915C44.6358 19.5163 46.831 18.5245 49.1571 18C49.1697 17.9977 49.1826 18.0003 49.1933 18.0073C49.204 18.0143 49.2116 18.0251 49.2146 18.0375C50.1746 21 51.1121 27.155 46.6071 35C45.2634 37.3272 43.6212 39.4687 41.7221 41.37C43.0571 38.305 43.9996 34.485 43.9996 29.8C44.0211 26.7898 43.5844 23.7938 42.7046 20.915ZM57.9996 32.43C57.3071 34.9925 55.1496 39.8825 48.4771 43.8725C46.3224 45.1694 44.0068 46.1781 41.5896 46.8725C45.0081 44.1277 47.8899 40.7747 50.0896 36.9825C50.9856 35.4313 51.7507 33.8082 52.3771 32.13C54.2532 31.8716 56.1613 31.9725 57.9996 32.4275V32.43Z" fill="#381207" />
                </svg>
                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="text-[#381207] text-center font-['Poppins'] text-2xl font-medium leading-[normal] w-full">
                    Calm & Comfort
                  </div>
                  <div className="text-[#381207] font-['Poppins'] leading-[normal] w-full">
                    Caregivers notice a soothing effect for restless residents.
                  </div>
                </div>
              </div>

              {/* Bottom Right Card - Sharing Memories */}
              <div className="inline-flex flex-col justify-between items-start p-8 h-[328px] w-[303px] rounded-2xl bg-[#f7f6f4]">
                <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.0026 58.6654C23.2954 58.6654 22.6171 58.3844 22.117 57.8843C21.6169 57.3842 21.3359 56.7059 21.3359 55.9987V47.9987H10.6693C9.25478 47.9987 7.89823 47.4368 6.89803 46.4366C5.89784 45.4364 5.33594 44.0798 5.33594 42.6654V10.6654C5.33594 9.25088 5.89784 7.89432 6.89803 6.89413C7.89823 5.89393 9.25478 5.33203 10.6693 5.33203H53.3359C54.7504 5.33203 56.107 5.89393 57.1072 6.89413C58.1074 7.89432 58.6693 9.25088 58.6693 10.6654V42.6654C58.6693 44.0798 58.1074 45.4364 57.1072 46.4366C56.107 47.4368 54.7504 47.9987 53.3359 47.9987H37.0693L27.2026 57.892C26.6693 58.3987 26.0026 58.6654 25.3359 58.6654H24.0026ZM26.6693 42.6654V50.8787L34.8826 42.6654H53.3359V10.6654H10.6693V42.6654H26.6693Z" fill="#381207" />
                </svg>
                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="text-[#381207] text-center font-['Poppins'] text-2xl font-medium leading-[normal] w-full">
                    Sharing Memories
                  </div>
                  <div className="text-[#381207] font-['Poppins'] leading-[normal] w-full">
                    Residents enjoy spotting familiar scenes and telling stories.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Routes Near You Section */}
      <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Background2})`}}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full h-full py-16 px-8">
          <div className="max-w-[1280px] mx-auto">
            {/* Header Section */}
            <div className="mb-16">
              <div className="text-[#a6a643] font-['Poppins'] text-lg font-medium mb-4 tracking-tight">
                Discover Routes Near You
              </div>
              <div className="text-white font-['Poppins'] text-4xl lg:text-5xl font-bold leading-tight max-w-[800px]">
                Explore beautiful journeys from participating municipalities.
              </div>
            </div>

            {/* Location Buttons */}
            <div className="flex items-center gap-4 mb-16 flex-wrap">
              {/* Left Arrow */}
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Location Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-['Poppins'] hover:bg-white/10 transition-all">
                  Dalfsen
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-['Poppins'] hover:bg-white/10 transition-all">
                  Deventer
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-['Poppins'] hover:bg-white/10 transition-all">
                  Haaksbergen
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-['Poppins'] hover:bg-white/10 transition-all">
                  Hellendoorn
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-['Poppins'] hover:bg-white/10 transition-all">
                  Hof van Twente
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-['Poppins'] hover:bg-white/10 transition-all">
                  Olst-Wijhe
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-['Poppins'] hover:bg-white/10 transition-all">
                  Ommen
                </button>
              </div>

              {/* Right Arrow */}
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Bottom Section */}
            <div className="space-y-6">
              <div className="text-white font-['Poppins'] text-xl font-medium">
                Your Turn to Inspire – New Every Month!
              </div>
              
              <div className="space-y-4 max-w-[600px]">
                <div className="text-white/90 font-['Poppins'] leading-relaxed">
                  Have a scenic or special route we haven't covered yet?
                </div>
                <div className="text-white/90 font-['Poppins'] leading-relaxed">
                  Log in and submit your favorite – we might feature it in our next video!
                </div>
                <div className="text-white/90 font-['Poppins'] leading-relaxed">
                  We publish new videos and community-suggested routes every month,
                </div>
                <div className="text-white/90 font-['Poppins'] leading-relaxed">
                  so keep exploring and stay inspired.
                </div>
              </div>

              <button className="inline-flex items-center px-8 py-3 rounded-lg bg-[#a6a643] text-white font-['Poppins'] text-lg font-medium hover:bg-[#8a8f39] transition-all">
                Explore this feature
              </button>
            </div>
          </div>
        </div>
      </div>
      <RequestCard />
      <Testimonial />
      <FaqQuestions />
      <SubscribeCard />
      <Footer />
    </>
  );
};

export default Aran;
